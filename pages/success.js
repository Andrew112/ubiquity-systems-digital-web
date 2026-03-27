import Head from 'next/head';

export default function SuccessPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Payment Successful — Ubiquity Systems Digital</title>
      </Head>

      <style>{`
        :root {
          --bg: #060c18;
          --bg2: #0a1628;
          --blue: #1a8fff;
          --cyan: #00d4ff;
          --text: #e8f0f8;
          --text-dim: #7a9ab5;
          --border: #1a3558;
          --card: #0c1a2e;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          text-align: center;
          padding: 60px 40px;
          max-width: 520px;
        }

        .icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(0, 212, 255, 0.1);
          border: 2px solid var(--cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          font-size: 36px;
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff 0%, var(--cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          color: var(--text-dim);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        a {
          display: inline-block;
          padding: 14px 32px;
          background: var(--blue);
          color: #fff;
          text-decoration: none;
          border-radius: 8px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          transition: opacity 0.2s;
        }

        a:hover { opacity: 0.85; }
      `}</style>

      <div className="container">
        <div className="icon">&#10003;</div>
        <h1>Payment Successful</h1>
        <p>Thank you for your purchase! You&apos;ll receive a confirmation email shortly with everything you need to get started.</p>
        <a href="/">Back to Home</a>
      </div>
    </>
  );
}
