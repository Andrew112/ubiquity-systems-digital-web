const Stripe = require('stripe');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const { items } = req.body;

    const line_items = items.map(item => ({
      price_data: {
        currency: 'usd',
        unit_amount: item.price,
        product_data: {
          name: item.name,
          description: item.type,
        },
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: `${process.env.URL}/success`,
      cancel_url:  `${process.env.URL}/`,
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ id: session.id });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
