import Head from 'next/head';
import { useEffect } from 'react';

export default function Success() {
  useEffect(() => {
    // Clear any leftover cart state here if needed
  }, []);

  return (
    <>
      <Head>
        <title>Payment Successful — Ubiquity Systems Digital</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        background: '#060c18',
        color: '#e8f0f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, sans-serif',
        flexDirection: 'column',
        gap: '16px',
        textAlign: 'center',
        padding: '40px'
      }}>
        <div style={{ fontSize: '64px' }}>✅</div>
        <h1 style={{ fontSize: '32px', fontWeight: '800' }}>Payment Successful!</h1>
        <p style={{ color: '#7a9ab5', fontSize: '16px', maxWidth: '480px' }}>
          Thank you for your purchase. Your download link has been sent to your email.
        </p>
        <a href="/" style={{
          marginTop: '20px',
          padding: '14px 28px',
          background: '#1a8fff',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '15px'
        }}>
          ← Back to Store
        </a>
      </div>
    </>
  );
}