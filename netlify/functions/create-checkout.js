 const Stripe = require('stripe');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const { items } = JSON.parse(event.body);

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
      success_url: `${process.env.URL}/success.html`,
      cancel_url:  `${process.env.URL}/index.html`,
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ id: session.id }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
