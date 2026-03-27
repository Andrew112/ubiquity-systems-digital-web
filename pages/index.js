import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

const bodyHTML = `
<!-- ── NAV ── -->
<nav>
  <div class="nav-logo" onclick="showPage('home')">
    <div class="logo-mark">US</div>
    <div class="logo-text">
      Ubiquity Systems
      <span>Digital</span>
    </div>
  </div>
  <ul class="nav-links">
    <li><a onclick="showPage('home')" id="nav-home" class="active">Home</a></li>
    <li><a onclick="showPage('services')" id="nav-services">Services</a></li>
    <li><a onclick="showPage('store')" id="nav-store">Store</a></li>
    <li><a onclick="showPage('subscriptions')" id="nav-subscriptions">Subscriptions</a></li>
    <li><a onclick="showPage('about')" id="nav-about">About</a></li>
    <li><a onclick="showPage('store')" class="nav-cta" style="position:relative">
      Shop <span id="cart-badge" style="display:none;position:absolute;top:-6px;right:-6px;background:#ff4757;color:#fff;border-radius:50%;width:18px;height:18px;font-size:10px;font-weight:700;line-height:18px;text-align:center">0</span>
    </a></li>
  </ul>
</nav>

<!-- HOME PAGE -->
<div id="page-home" class="page active">
  <div class="hero">
    <div class="hero-left">
      <div class="hero-eyebrow fade-in fade-in-1">BUILD REAL SAAS PRODUCTS</div>
      <h1 class="fade-in fade-in-2">
        Learn AI Automation<br>
        by <span class="accent">Building Software</span>
      </h1>
      <p class="hero-desc fade-in fade-in-3">
        Master practical web development and AI automation. Ship production-ready SaaS applications using Claude, Cursor, Supabase, and React — guided by structured training built for serious builders.
      </p>
      <div class="hero-actions fade-in fade-in-4">
        <a class="btn-primary" onclick="showPage('subscriptions')">Explore Programs</a>
        <a class="btn-secondary" onclick="showPage('services')">Learn More</a>
      </div>
    </div>
    <div class="hero-visual fade-in fade-in-3">
      <div class="dashboard-frame">
        <div class="db-header">
          <div class="db-dot red"></div>
          <div class="db-dot yellow"></div>
          <div class="db-dot green"></div>
          <div class="db-title">ubiquity-agent · dashboard.jsx</div>
        </div>
        <div class="db-body">
          <div class="db-card">
            <div class="db-card-label">Active Learners</div>
            <div class="db-card-value">1,240</div>
            <div class="db-card-sub">&#8593; +18% this month</div>
          </div>
          <div class="db-card">
            <div class="db-card-label">Modules Shipped</div>
            <div class="db-card-value">47</div>
            <div class="db-card-sub">&#8593; 3 new this week</div>
          </div>
          <div class="db-chart">
            <div class="db-card-label">Completion Rate</div>
            <div class="chart-bars">
              <div class="bar" style="height:30%"></div>
              <div class="bar" style="height:50%"></div>
              <div class="bar" style="height:40%"></div>
              <div class="bar" style="height:70%"></div>
              <div class="bar" style="height:60%"></div>
              <div class="bar" style="height:85%"></div>
              <div class="bar highlight" style="height:95%"></div>
              <div class="bar" style="height:75%"></div>
              <div class="bar" style="height:88%"></div>
              <div class="bar highlight" style="height:100%"></div>
            </div>
          </div>
          <div class="db-card" style="grid-column:1/-1">
            <div class="db-card-label">Stack</div>
            <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap">
              <span class="tech-pill">Claude API</span>
              <span class="tech-pill">React</span>
              <span class="tech-pill">Supabase</span>
              <span class="tech-pill">Cursor</span>
              <span class="tech-pill">MCP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="ticker">
    <div class="ticker-inner">
      &nbsp;&nbsp;AI AUTOMATION &nbsp;·&nbsp; SAAS DEVELOPMENT &nbsp;·&nbsp; AGENTIC SYSTEMS &nbsp;·&nbsp; CLAUDE API &nbsp;·&nbsp; MCP PROTOCOL &nbsp;·&nbsp; RAG PIPELINES &nbsp;·&nbsp; CURSOR IDE &nbsp;·&nbsp; SUPABASE &nbsp;·&nbsp; REACT &nbsp;·&nbsp; PRODUCTION-READY CODE &nbsp;&nbsp;&nbsp;&nbsp;
      AI AUTOMATION &nbsp;·&nbsp; SAAS DEVELOPMENT &nbsp;·&nbsp; AGENTIC SYSTEMS &nbsp;·&nbsp; CLAUDE API &nbsp;·&nbsp; MCP PROTOCOL &nbsp;·&nbsp; RAG PIPELINES &nbsp;·&nbsp; CURSOR IDE &nbsp;·&nbsp; SUPABASE &nbsp;·&nbsp; REACT &nbsp;·&nbsp; PRODUCTION-READY CODE &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>

  <div class="stats-bar">
    <div class="stat-item"><div class="stat-num">47+</div><div class="stat-label">Training Modules</div></div>
    <div class="stat-item"><div class="stat-num">1.2k</div><div class="stat-label">Active Students</div></div>
    <div class="stat-item"><div class="stat-num">6</div><div class="stat-label">Core Curricula</div></div>
    <div class="stat-item"><div class="stat-num">100%</div><div class="stat-label">Hands-On Projects</div></div>
  </div>

  <section>
    <div class="section-eyebrow">// What We Offer</div>
    <h2>Everything You Need to<br>Build with AI</h2>
    <p class="section-desc">Structured, no-fluff training designed for developers who want to go from zero to shipping real AI-powered products — fast.</p>
    <div class="cards-grid">
      <div class="card"><div class="card-icon">🤖</div><h3>AI Agent Development</h3><p>Learn to build ReAct agents, multi-agent systems, and autonomous workflows using the Anthropic API and LangChain.</p><span class="card-tag">AGENTS · LLM · TOOLUSE</span></div>
      <div class="card"><div class="card-icon">🗄️</div><h3>RAG & Knowledge Systems</h3><p>Connect your AI to proprietary data using vector databases, embedding pipelines, and semantic search patterns.</p><span class="card-tag">RAG · PINECONE · PGVECTOR</span></div>
      <div class="card"><div class="card-icon">🔌</div><h3>MCP Integration</h3><p>Build and deploy Model Context Protocol servers. The fastest-growing AI infrastructure standard of 2025.</p><span class="card-tag">MCP · CURSOR · CLAUDE</span></div>
      <div class="card"><div class="card-icon">⚡</div><h3>SaaS Product Templates</h3><p>Production-ready starter kits for React + Supabase + Stripe. Launch your first AI-powered product in days.</p><span class="card-tag">REACT · SUPABASE · STRIPE</span></div>
      <div class="card"><div class="card-icon">📦</div><h3>Digital Asset Library</h3><p>Downloadable PDF guides, prompt templates, architecture diagrams, and reference sheets updated monthly.</p><span class="card-tag">PDF · TEMPLATES · GUIDES</span></div>
      <div class="card"><div class="card-icon">📡</div><h3>Community & Live Sessions</h3><p>Join a focused community of builders. Access live walkthroughs, code reviews, and Q&A sessions each month.</p><span class="card-tag">COMMUNITY · LIVE · SUPPORT</span></div>
    </div>
  </section>

  <div class="cta-section">
    <h2>Ready to Build Your First AI Product?</h2>
    <p>Join Ubiquity Systems Digital and ship production-ready software powered by the latest AI stack.</p>
    <a class="btn-primary" onclick="showPage('subscriptions')">Choose Your Plan →</a>
  </div>

  <footer>
    <div>© 2026 Ubiquity Systems Digital. All rights reserved.</div>
    <div style="display:flex;gap:24px"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Contact</a></div>
  </footer>
</div>

<!-- SERVICES PAGE -->
<div id="page-services" class="page">
  <div class="services-hero">
    <div class="section-eyebrow">// Services</div>
    <h1>Training Designed for<br><span class="accent">Serious Builders</span></h1>
    <p class="section-desc">Not tutorials. Not YouTube clips. Real structured curricula that take you from fundamentals to shipping production AI applications.</p>
  </div>
  <div style="padding: 60px 80px 20px">
    <div class="section-eyebrow">// Core Curricula</div>
    <h2>What You'll Build</h2>
  </div>
  <div class="services-grid">
    <div class="service-card">
      <div class="service-num">01 — FOUNDATIONS</div>
      <h3>AI Development Bootcamp</h3>
      <p>A complete beginner-to-builder curriculum. Learn prompt engineering, the Anthropic API, and deploy your first working AI application step by step.</p>
      <ul class="feature-list"><li>Prompt engineering fundamentals</li><li>Claude API integration from scratch</li><li>Building your first AI-powered UI</li><li>Deploying to production with Vercel</li><li>Project: Personal AI assistant app</li></ul>
    </div>
    <div class="service-card">
      <div class="service-num">02 — AGENTS</div>
      <h3>Agentic Systems Engineering</h3>
      <p>Go deep on ReAct patterns, multi-agent orchestration, tool use, and memory systems. Build agents that actually complete complex, multi-step tasks.</p>
      <ul class="feature-list"><li>ReAct loop implementation</li><li>Tool use and function calling</li><li>Memory: context, vector, and KV</li><li>Multi-agent orchestration patterns</li><li>Project: Autonomous research agent</li></ul>
    </div>
    <div class="service-card">
      <div class="service-num">03 — DATA</div>
      <h3>RAG Pipeline Mastery</h3>
      <p>Build knowledge-grounded AI systems. From chunking strategies to vector databases, learn the full RAG pipeline with real production datasets.</p>
      <ul class="feature-list"><li>Embedding models and chunking</li><li>Pinecone and pgvector integration</li><li>Advanced retrieval strategies</li><li>RAG evaluation with RAGAs</li><li>Project: Company knowledge base chatbot</li></ul>
    </div>
    <div class="service-card">
      <div class="service-num">04 — PRODUCTS</div>
      <h3>SaaS Product Accelerator</h3>
      <p>Ship a full AI SaaS product from scratch. React frontend, Supabase backend, Stripe payments, and Claude-powered features — all in one structured sprint.</p>
      <ul class="feature-list"><li>React + Supabase project setup</li><li>Auth, subscriptions, and billing with Stripe</li><li>AI feature integration patterns</li><li>Deployment, monitoring, and scaling</li><li>Project: Your own AI SaaS MVP</li></ul>
    </div>
  </div>
  <section>
    <div class="section-eyebrow">// Digital Assets</div>
    <h2>Download. Apply. Build.</h2>
    <p class="section-desc">Every subscription includes access to our growing library of production-ready digital assets.</p>
    <div class="cards-grid">
      <div class="card"><div class="card-icon">📄</div><h3>Architecture Reference PDFs</h3><p>Visual system diagrams for agent workflows, RAG pipelines, MCP integrations, and SaaS product architecture.</p></div>
      <div class="card"><div class="card-icon">💬</div><h3>Prompt Template Library</h3><p>Tested, production-grade system prompts for coding assistants, data extractors, customer support agents, and more.</p></div>
      <div class="card"><div class="card-icon">🧱</div><h3>Code Starter Kits</h3><p>Boilerplate repositories for React + Supabase, LangChain agents, and MCP server templates ready to clone and deploy.</p></div>
    </div>
  </section>
  <div class="cta-section">
    <h2>Start Learning Today</h2>
    <p>Pick a plan and get instant access to all curricula, assets, and the community.</p>
    <a class="btn-primary" onclick="showPage('subscriptions')">View Plans →</a>
  </div>
  <footer>
    <div>© 2026 Ubiquity Systems Digital. All rights reserved.</div>
    <div style="display:flex;gap:24px"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
  </footer>
</div>

<!-- SUBSCRIPTIONS PAGE -->
<div id="page-subscriptions" class="page">
  <div class="sub-hero">
    <div class="section-eyebrow" style="text-align:center">// Subscriptions</div>
    <h1>Simple, Transparent Pricing</h1>
    <p class="section-desc" style="margin-top:14px">One subscription unlocks everything. Choose the commitment level that works for you.</p>
  </div>
  <div class="plans-grid">
    <div class="plan">
      <div class="plan-name">Starter</div>
      <div class="plan-price">$19<span>/mo</span></div>
      <div class="plan-period">Billed monthly · Cancel anytime</div>
      <ul class="plan-features">
        <li><span class="check">✓</span> AI Foundations Curriculum</li>
        <li><span class="check">✓</span> 10 PDF Reference Guides</li>
        <li><span class="check">✓</span> Prompt Template Starter Pack</li>
        <li><span class="check">✓</span> Community Forum Access</li>
        <li><span class="cross">✗</span> Agent & RAG Curricula</li>
        <li><span class="cross">✗</span> Live Sessions</li>
        <li><span class="cross">✗</span> Code Starter Kits</li>
      </ul>
      <button class="btn-plan outline" onclick="openModal('Starter', '$19/mo')">Get Started</button>
    </div>
    <div class="plan featured">
      <div class="plan-badge">Most Popular</div>
      <div class="plan-name">Pro Builder</div>
      <div class="plan-price">$49<span>/mo</span></div>
      <div class="plan-period">Billed monthly · Cancel anytime</div>
      <ul class="plan-features">
        <li><span class="check">✓</span> All 4 Core Curricula</li>
        <li><span class="check">✓</span> Full Digital Asset Library</li>
        <li><span class="check">✓</span> All Prompt Templates</li>
        <li><span class="check">✓</span> All Code Starter Kits</li>
        <li><span class="check">✓</span> Monthly Live Sessions</li>
        <li><span class="check">✓</span> Community + Code Reviews</li>
        <li><span class="cross">✗</span> 1-on-1 Mentorship</li>
      </ul>
      <button class="btn-plan primary" onclick="openModal('Pro Builder', '$49/mo')">Start Building</button>
    </div>
    <div class="plan">
      <div class="plan-name">Elite</div>
      <div class="plan-price">$99<span>/mo</span></div>
      <div class="plan-period">Billed monthly · Cancel anytime</div>
      <ul class="plan-features">
        <li><span class="check">✓</span> Everything in Pro Builder</li>
        <li><span class="check">✓</span> Monthly 1-on-1 Mentorship</li>
        <li><span class="check">✓</span> Priority Support (48hr)</li>
        <li><span class="check">✓</span> Early Access to New Modules</li>
        <li><span class="check">✓</span> Custom Project Feedback</li>
        <li><span class="check">✓</span> Private Community Channel</li>
        <li><span class="check">✓</span> Annual discount available</li>
      </ul>
      <button class="btn-plan outline" onclick="openModal('Elite', '$99/mo')">Go Elite</button>
    </div>
  </div>
  <div class="stripe-notice">
    <div class="stripe-badge">Stripe</div>
    <div>Payments are processed securely through <strong style="color:var(--text)">Stripe</strong>. All major cards accepted. Subscriptions managed through your billing portal — upgrade, downgrade, or cancel anytime. Digital assets delivered instantly upon payment confirmation.</div>
  </div>
  <section style="padding: 0 80px 80px">
    <div class="section-eyebrow">// FAQ</div>
    <h2>Common Questions</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:36px">
      <div class="mission-card"><h3>Can I cancel anytime?</h3><p>Yes. All plans are month-to-month with no lock-in. Cancel from your billing portal and access continues through the end of your billing cycle.</p></div>
      <div class="mission-card"><h3>Do I keep assets after canceling?</h3><p>Any PDFs and templates you download before canceling are yours to keep. Access to the member portal and future updates requires an active subscription.</p></div>
      <div class="mission-card"><h3>How are new modules released?</h3><p>New training modules and digital assets drop monthly. Elite members get early access 1 week before general availability.</p></div>
      <div class="mission-card"><h3>Is this right for complete beginners?</h3><p>Yes. The Foundations curriculum starts from zero. You need basic computer literacy but no prior coding experience is required to start.</p></div>
    </div>
  </section>
  <footer>
    <div>© 2026 Ubiquity Systems Digital. All rights reserved.</div>
    <div style="display:flex;gap:24px"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
  </footer>
</div>

<!-- ABOUT PAGE -->
<div id="page-about" class="page">
  <div class="about-hero">
    <div>
      <div class="section-eyebrow">// About</div>
      <h1>Built for the<br><span class="accent">New Era of Software</span></h1>
      <p style="font-size:16px;color:var(--text-dim);line-height:1.7;margin-bottom:28px">Ubiquity Systems Digital exists because the AI revolution is happening right now — and most training is too slow, too shallow, and not built for people who actually want to ship things.</p>
      <p style="font-size:16px;color:var(--text-dim);line-height:1.7">We build structured, hands-on programs for developers at the start of their AI journey who are serious about learning. No filler content. No recorded lectures from 2022. Just real curricula, real tools, and real projects.</p>
    </div>
    <div class="about-visual">
      <div class="code-line"><span class="code-num">1</span><span class="code-comment">// ubiquity-systems/mission.ts</span></div>
      <div class="code-line"><span class="code-num">2</span></div>
      <div class="code-line"><span class="code-num">3</span><span class="code-kw">const</span>&nbsp;<span class="code-fn">mission</span>&nbsp;= {</div>
      <div class="code-line"><span class="code-num">4</span>&nbsp;&nbsp;focus:&nbsp;<span class="code-str">"AI automation training"</span>,</div>
      <div class="code-line"><span class="code-num">5</span>&nbsp;&nbsp;audience:&nbsp;<span class="code-str">"serious early-stage devs"</span>,</div>
      <div class="code-line"><span class="code-num">6</span>&nbsp;&nbsp;method:&nbsp;<span class="code-str">"build real things"</span>,</div>
      <div class="code-line"><span class="code-num">7</span>&nbsp;&nbsp;stack:&nbsp;[</div>
      <div class="code-line"><span class="code-num">8</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-str">"Claude API"</span>,&nbsp;<span class="code-str">"React"</span>,</div>
      <div class="code-line"><span class="code-num">9</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-str">"Supabase"</span>,&nbsp;<span class="code-str">"Cursor"</span>,</div>
      <div class="code-line"><span class="code-num">10</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-str">"MCP"</span>,&nbsp;<span class="code-str">"LangChain"</span></div>
      <div class="code-line"><span class="code-num">11</span>&nbsp;&nbsp;],</div>
      <div class="code-line"><span class="code-num">12</span>&nbsp;&nbsp;promise:&nbsp;<span class="code-str">"ship production AI apps"</span></div>
      <div class="code-line"><span class="code-num">13</span>};</div>
      <div class="code-line"><span class="code-num">14</span></div>
      <div class="code-line"><span class="code-num">15</span><span class="code-kw">export default</span>&nbsp;<span class="code-fn">mission</span>;</div>
    </div>
  </div>
  <div class="about-values">
    <div class="section-eyebrow">// Our Principles</div>
    <h2>How We Think About Training</h2>
    <div class="values-grid">
      <div class="value-card"><div class="value-icon">🎯</div><h3>Precision Over Volume</h3><p>Every module earns its place. We cut the noise and focus on what actually gets you building faster.</p></div>
      <div class="value-card"><div class="value-icon">🔨</div><h3>Hands-On, Always</h3><p>Every concept is tied to a real project. Theory is only taught when it explains something you're about to build.</p></div>
      <div class="value-card"><div class="value-icon">📡</div><h3>Constantly Updated</h3><p>The AI ecosystem moves fast. Our content ships monthly to stay ahead of the curve — not behind it.</p></div>
      <div class="value-card"><div class="value-icon">🤝</div><h3>Community-Driven</h3><p>Learn alongside other builders. Share projects, get feedback, and grow in a focused peer network.</p></div>
      <div class="value-card"><div class="value-icon">🏗️</div><h3>Production Standards</h3><p>We teach the way production teams actually work — with real architecture patterns, not toy examples.</p></div>
      <div class="value-card"><div class="value-icon">⚖️</div><h3>Accessible to Serious Learners</h3><p>No gatekeeping, no jargon spirals. If you're committed to learning, we're committed to teaching clearly.</p></div>
    </div>
  </div>
  <section style="padding: 0 80px 80px">
    <div class="section-eyebrow">// Reference Material</div>
    <h2>The Ubiquity AI Ecosystem Guide</h2>
    <p class="section-desc">A comprehensive 22-page reference covering Agents, Foundation Models, Skills, RAG Pipelines, MCP, and Automation Tools — included with every subscription.</p>
    <div class="cards-grid">
      <div class="card"><div class="card-icon">🤖</div><h3>Agents & Frameworks</h3><p>ReAct patterns, LangChain, CrewAI, multi-agent systems, memory architectures, and guardrail implementation.</p></div>
      <div class="card"><div class="card-icon">🧠</div><h3>Foundation Models</h3><p>Model comparison across Anthropic, OpenAI, Google, and Meta. Selection criteria, fine-tuning vs prompting, and evaluation metrics.</p></div>
      <div class="card"><div class="card-icon">🔌</div><h3>MCP & Automation</h3><p>Complete MCP architecture guide, TypeScript server examples, n8n integration patterns, and the 2026 automation stack.</p></div>
    </div>
  </section>
  <div class="cta-section">
    <h2>Join the Community</h2>
    <p>Get access to training, assets, and a network of developers building with the new AI stack.</p>
    <a class="btn-primary" onclick="showPage('subscriptions')">View Subscription Plans →</a>
  </div>
  <footer>
    <div>© 2026 Ubiquity Systems Digital. All rights reserved.</div>
    <div style="display:flex;gap:24px"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
  </footer>
</div>

<!-- STORE PAGE -->
<div id="page-store" class="page">
  <div class="store-hero">
    <div>
      <div class="section-eyebrow">// Digital Store</div>
      <h1>Tools, Templates &<br><span class="accent">Training Assets</span></h1>
      <p style="font-size:16px;color:var(--text-dim);line-height:1.7;max-width:500px;margin-top:12px">One-time purchases. Instant downloads. Everything built for developers who want to move fast with AI.</p>
    </div>
    <div>
      <div class="store-filters">
        <button class="filter-btn active" onclick="filterStore('all', this)">All Products</button>
        <button class="filter-btn" onclick="filterStore('pdf', this)">PDF Guides</button>
        <button class="filter-btn" onclick="filterStore('template', this)">Templates</button>
        <button class="filter-btn" onclick="filterStore('kit', this)">Starter Kits</button>
        <button class="filter-btn" onclick="filterStore('bundle', this)">Bundles</button>
      </div>
    </div>
  </div>
  <div class="store-grid" id="store-grid">
    <div class="product-card" data-category="pdf" data-id="1" data-name="AI Agent Architecture Guide" data-price="1900" data-icon="🤖" data-type="PDF GUIDE">
      <div class="product-thumb blue-grad">🤖</div>
      <div class="product-body">
        <div class="product-type">PDF Guide · 28 Pages</div>
        <h3>AI Agent Architecture Guide</h3>
        <p>Complete visual reference for ReAct loops, multi-agent patterns, memory systems, and guardrail implementation. Print-ready, annotated diagrams.</p>
        <div class="product-footer">
          <div class="product-price">$19<span class="cents"></span></div>
          <button class="btn-add-cart" onclick="addToCart(1, 'AI Agent Architecture Guide', 1900, '🤖', 'PDF GUIDE')">+ Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="product-card" data-category="template" data-id="2" data-name="Prompt Template Library v2" data-price="2900" data-icon="💬" data-type="TEMPLATE PACK">
      <div class="product-thumb teal-grad">💬</div>
      <div class="product-body">
        <div class="product-type">Template Pack · 60+ Prompts</div>
        <h3>Prompt Template Library v2</h3>
        <p>Production-tested system prompts for coding assistants, data extractors, support agents, summarizers, and RAG query reformulators.</p>
        <div class="product-footer">
          <div class="product-price">$29<span class="cents"></span></div>
          <button class="btn-add-cart" onclick="addToCart(2, 'Prompt Template Library v2', 2900, '💬', 'TEMPLATE PACK')">+ Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="product-card" data-category="kit" data-id="3" data-name="React + Supabase SaaS Starter Kit" data-price="4900" data-icon="🧱" data-type="STARTER KIT">
      <div class="product-thumb purple-grad">🧱</div>
      <div class="product-body">
        <div class="product-type">Starter Kit · Full Repo</div>
        <h3>React + Supabase SaaS Starter Kit</h3>
        <p>Auth, billing, protected routes, and Stripe subscriptions pre-wired. Clone, configure your keys, and ship your first SaaS in a weekend.</p>
        <div class="product-footer">
          <div class="product-price">$49<span class="cents"></span></div>
          <button class="btn-add-cart" onclick="addToCart(3, 'React + Supabase SaaS Starter Kit', 4900, '🧱', 'STARTER KIT')">+ Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="product-card" data-category="pdf" data-id="4" data-name="RAG Pipeline Reference Sheet" data-price="900" data-icon="🗄️" data-type="PDF GUIDE">
      <div class="product-thumb green-grad">🗄️</div>
      <div class="product-body">
        <div class="product-type">PDF Guide · 12 Pages</div>
        <h3>RAG Pipeline Reference Sheet</h3>
        <p>Chunking strategies, vector DB comparison, embedding model selection, and advanced retrieval patterns. One-page cheat sheet included.</p>
        <div class="product-footer">
          <div class="product-price">$9<span class="cents"></span></div>
          <button class="btn-add-cart" onclick="addToCart(4, 'RAG Pipeline Reference Sheet', 900, '🗄️', 'PDF GUIDE')">+ Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="product-card" data-category="kit" data-id="5" data-name="MCP Server Template (TypeScript)" data-price="3900" data-icon="🔌" data-type="STARTER KIT">
      <div class="product-thumb orange-grad">🔌</div>
      <div class="product-body">
        <div class="product-type">Starter Kit · TypeScript</div>
        <h3>MCP Server Template (TypeScript)</h3>
        <p>Production-ready MCP server scaffold with tool registration, OAuth 2.0 auth, rate limiting, audit logging, and stdio + HTTP transports.</p>
        <div class="product-footer">
          <div class="product-price">$39<span class="cents"></span></div>
          <button class="btn-add-cart" onclick="addToCart(5, 'MCP Server Template (TypeScript)', 3900, '🔌', 'STARTER KIT')">+ Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="product-card" data-category="bundle" data-id="6" data-name="Complete Builder Bundle" data-price="9900" data-icon="📦" data-type="BUNDLE">
      <div class="product-thumb steel-grad">📦</div>
      <div class="product-body">
        <div class="product-type">Bundle · Best Value</div>
        <h3>Complete Builder Bundle</h3>
        <p>Every guide, template pack, and starter kit in one purchase. Includes all future updates. Save $40 vs buying individually.</p>
        <div class="product-footer">
          <div class="product-price">$99<span class="cents"></span></div>
          <button class="btn-add-cart" onclick="addToCart(6, 'Complete Builder Bundle', 9900, '📦', 'BUNDLE')">+ Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="product-card" data-category="pdf" data-id="7" data-name="Model Selection Cheat Sheet" data-price="0" data-icon="🧠" data-type="FREE PDF">
      <div class="product-thumb blue-grad">🧠</div>
      <div class="product-body">
        <div class="product-type">Free PDF · Quick Reference</div>
        <h3>Model Selection Cheat Sheet</h3>
        <p>Side-by-side comparison of Claude, GPT-4o, Gemini, and Llama across cost, context, speed, and capability. Free to download.</p>
        <div class="product-footer">
          <div class="product-price free-tag">Free</div>
          <button class="btn-add-cart" onclick="addToCart(7, 'Model Selection Cheat Sheet', 0, '🧠', 'FREE PDF')">&#8595; Download</button>
        </div>
      </div>
    </div>
    <div class="product-card" data-category="template" data-id="8" data-name="LangChain Agent Boilerplate" data-price="1900" data-icon="⚡" data-type="TEMPLATE">
      <div class="product-thumb teal-grad">⚡</div>
      <div class="product-body">
        <div class="product-type">Template · Python</div>
        <h3>LangChain Agent Boilerplate</h3>
        <p>Fully configured ReAct agent with web search, code execution, file I/O, and memory tools. Drop in your API keys and start building.</p>
        <div class="product-footer">
          <div class="product-price">$19<span class="cents"></span></div>
          <button class="btn-add-cart" onclick="addToCart(8, 'LangChain Agent Boilerplate', 1900, '⚡', 'TEMPLATE')">+ Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="product-card" data-category="bundle" data-id="9" data-name="AI Ecosystem Guide 2026" data-price="1200" data-icon="📘" data-type="PDF GUIDE">
      <div class="product-thumb purple-grad">📘</div>
      <div class="product-body">
        <div class="product-type">PDF Guide · 22 Pages</div>
        <h3>AI Ecosystem Guide 2026</h3>
        <p>The complete Ubiquity reference covering Agents, Models, Skills, RAG, MCP, and Automation. Accurate as of March 2026.</p>
        <div class="product-footer">
          <div class="product-price">$12<span class="cents"></span></div>
          <button class="btn-add-cart" onclick="addToCart(9, 'AI Ecosystem Guide 2026', 1200, '📘', 'PDF GUIDE')">+ Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="stripe-notice" style="margin: 0 80px 80px">
    <div class="stripe-badge">Stripe</div>
    <div>All purchases processed securely via <strong style="color:var(--text)">Stripe</strong>. Instant delivery to your inbox. Digital products — no refunds after download. Questions? Contact support.</div>
  </div>
  <footer>
    <div>© 2026 Ubiquity Systems Digital. All rights reserved.</div>
    <div style="display:flex;gap:24px"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
  </footer>
</div>

<!-- CART OVERLAY -->
<div class="cart-overlay" id="cart-overlay" onclick="closeCart()"></div>

<!-- CART DRAWER -->
<div class="cart-drawer" id="cart-drawer">
  <div class="cart-header">
    <h3>🛒 Your Cart</h3>
    <button class="cart-close" onclick="closeCart()">×</button>
  </div>
  <div class="cart-items" id="cart-items">
    <div class="cart-empty">
      <div class="empty-icon">🛒</div>
      <p>Your cart is empty.<br>Add some products to get started.</p>
    </div>
  </div>
  <div class="cart-footer" id="cart-footer" style="display:none">
    <div class="cart-total">
      <span class="cart-total-label">Total</span>
      <span class="cart-total-value" id="cart-total-value">$0</span>
    </div>
    <button class="btn-checkout" id="btn-checkout" onclick="openStoreCheckout()">🔒 Checkout with Stripe</button>
    <div class="stripe-powered" style="margin-top:12px">Secured by <span style="color:#635bff;font-weight:600">Stripe</span> · Instant digital delivery</div>
  </div>
</div>

<!-- STORE PURCHASE MODAL -->
<div class="modal-overlay" id="store-modal-overlay">
  <div class="purchase-modal modal">
    <button class="modal-close" onclick="closeStoreModal()">×</button>
    <h3>Complete Purchase</h3>
    <p>Fill in your details below to receive your download link instantly.</p>
    <div class="order-summary" id="store-order-summary">
      <div class="order-summary-title">Order Summary</div>
    </div>
    <div class="form-group"><label>Full Name</label><input type="text" id="store-name" placeholder="Alex Johnson"></div>
    <div class="form-group"><label>Email Address</label><input type="email" id="store-email" placeholder="alex@example.com"></div>
    <div class="form-group"><label>Card Number</label><input type="text" id="store-card" placeholder="4242 4242 4242 4242" maxlength="19"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div class="form-group"><label>Expiry</label><input type="text" placeholder="MM / YY" maxlength="7"></div>
      <div class="form-group"><label>CVC</label><input type="text" placeholder="123" maxlength="4"></div>
    </div>
    <button class="btn-primary" id="store-pay-btn" style="width:100%;padding:15px;font-size:15px;border:none;cursor:pointer" onclick="handleStorePay()">Pay & Download →</button>
    <div class="stripe-powered" style="margin-top:14px">🔒 Secured by <span style="color:#635bff;font-weight:600">Stripe</span> · Download link sent to your email</div>
  </div>
</div>

<!-- SUBSCRIPTION MODAL -->
<div class="modal-overlay" id="modal-overlay">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">×</button>
    <h3>Join Ubiquity Systems</h3>
    <p>You're one step away from accessing all training, assets, and community resources.</p>
    <div class="modal-plan-label" id="modal-plan-label">Plan: Pro Builder — $49/mo</div>
    <div class="form-group"><label>Full Name</label><input type="text" placeholder="Alex Johnson"></div>
    <div class="form-group"><label>Email Address</label><input type="email" placeholder="alex@example.com"></div>
    <div class="form-group"><label>Card Number</label><input type="text" placeholder="4242 4242 4242 4242" maxlength="19"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div class="form-group"><label>Expiry</label><input type="text" placeholder="MM / YY" maxlength="7"></div>
      <div class="form-group"><label>CVC</label><input type="text" placeholder="123" maxlength="4"></div>
    </div>
    <button class="btn-primary" style="width:100%;padding:15px;font-size:15px;border:none;cursor:pointer" onclick="handleCheckout()">Subscribe Now →</button>
    <div class="stripe-powered">🔒 Secured by <span>Stripe</span> · Cancel anytime from your billing portal</div>
  </div>
</div>
`;

export default function Home() {
  useEffect(() => {
    let cart = {};

    function showPage(id) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById('page-' + id).classList.add('active');
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const navEl = document.getElementById('nav-' + id);
      if (navEl) navEl.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.showPage = showPage;

    function addToCart(id, name, price, icon, type) {
      const btn = event.target;
      if (cart[id]) { openCart(); return; }
      cart[id] = { id, name, price, icon, type };
      btn.textContent = '✓ In Cart';
      btn.classList.add('in-cart');
      btn.onclick = () => openCart();
      renderCart();
      updateCartBadge();
      openCart();
    }
    window.addToCart = addToCart;

    function removeFromCart(id) {
      delete cart[id];
      const btn = document.querySelector(`[data-id="${id}"] .btn-add-cart`);
      if (btn) {
        const prod = document.querySelector(`[data-id="${id}"]`);
        const isFree = prod && prod.dataset.price === '0';
        btn.textContent = isFree ? '↓ Download' : '+ Add to Cart';
        btn.classList.remove('in-cart');
        const origId = parseInt(id);
        const p = parseFloat(prod.dataset.price);
        const n = prod.dataset.name;
        const ic = prod.dataset.icon;
        const ty = prod.dataset.type;
        btn.onclick = () => addToCart(origId, n, p, ic, ty);
      }
      renderCart();
      updateCartBadge();
      if (Object.keys(cart).length === 0) closeCart();
    }
    window.removeFromCart = removeFromCart;

    function renderCart() {
      const container = document.getElementById('cart-items');
      const footer = document.getElementById('cart-footer');
      const items = Object.values(cart);
      if (items.length === 0) {
        container.innerHTML = '<div class="cart-empty"><div class="empty-icon">🛒</div><p>Your cart is empty.<br>Add some products to get started.</p></div>';
        footer.style.display = 'none';
        return;
      }
      footer.style.display = 'block';
      let total = 0;
      container.innerHTML = items.map(item => {
        total += item.price;
        const priceStr = item.price === 0 ? 'Free' : '$' + (item.price / 100).toFixed(0);
        return `<div class="cart-item">
          <div class="cart-item-icon" style="background:var(--bg3);border:1px solid var(--border)">${item.icon}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-type">${item.type}</div>
            <div class="cart-item-price">${priceStr}</div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
        </div>`;
      }).join('');
      const totalStr = total === 0 ? 'Free' : '$' + (total / 100).toFixed(0);
      document.getElementById('cart-total-value').textContent = totalStr;
      document.getElementById('btn-checkout').disabled = items.length === 0;
    }
    window.renderCart = renderCart;

    function updateCartBadge() {
      const count = Object.keys(cart).length;
      const badge = document.getElementById('cart-badge');
      if (count > 0) { badge.style.display = 'block'; badge.textContent = count; }
      else { badge.style.display = 'none'; }
    }
    window.updateCartBadge = updateCartBadge;

    function openCart() {
      document.getElementById('cart-drawer').classList.add('open');
      document.getElementById('cart-overlay').classList.add('open');
    }
    window.openCart = openCart;

    function closeCart() {
      document.getElementById('cart-drawer').classList.remove('open');
      document.getElementById('cart-overlay').classList.remove('open');
    }
    window.closeCart = closeCart;

    function filterStore(category, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? 'flex' : 'none';
      });
    }
    window.filterStore = filterStore;

    function openStoreCheckout() {
      closeCart();
      const items = Object.values(cart);
      let total = 0;
      const summaryEl = document.getElementById('store-order-summary');
      let html = '<div class="order-summary-title">Order Summary</div>';
      items.forEach(item => {
        total += item.price;
        const priceStr = item.price === 0 ? 'Free' : '$' + (item.price / 100).toFixed(0);
        html += `<div class="order-line"><span>${item.icon} ${item.name}</span><span>${priceStr}</span></div>`;
      });
      const totalStr = total === 0 ? 'Free' : '$' + (total / 100).toFixed(0);
      html += `<div class="order-line"><span>Total</span><span>${totalStr}</span></div>`;
      summaryEl.innerHTML = html;
      document.getElementById('store-modal-overlay').classList.add('open');
    }
    window.openStoreCheckout = openStoreCheckout;

    function closeStoreModal() {
      document.getElementById('store-modal-overlay').classList.remove('open');
    }
    window.closeStoreModal = closeStoreModal;

    async function handleStorePay() {
      const btn = document.getElementById('store-pay-btn');
      const name = document.getElementById('store-name').value.trim();
      const email = document.getElementById('store-email').value.trim();
      if (!name || !email) { alert('Please enter your name and email before continuing.'); return; }
      btn.textContent = '⏳ Redirecting to Stripe...';
      btn.disabled = true;
      try {
        const items = Object.values(cart).filter(i => i.price > 0);
        if (items.length === 0) {
          closeStoreModal();
          alert('✅ Your free download link has been sent to ' + email);
          cart = {};
          renderCart();
          updateCartBadge();
          return;
        }
        const res = await fetch('/api/create-checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items }),
        });
        const data = await res.json();
        if (data.error) {
          alert('Error: ' + data.error);
          btn.textContent = 'Pay & Download →';
          btn.disabled = false;
          return;
        }
        const stripe = window.Stripe('pk_test_51TFfkeAjDwLEnX9WSkWWNaZPu5w66nXW9aET9fnl2uzHjsEdOpOaL1Wo0ba75GMoYhKY5WirR3cFfDW2DYNVmejn004jzODguU');
        await stripe.redirectToCheckout({ sessionId: data.id });
      } catch (err) {
        alert('Something went wrong. Please try again.');
        btn.textContent = 'Pay & Download →';
        btn.disabled = false;
      }
    }
    window.handleStorePay = handleStorePay;

    function openModal(plan, price) {
      document.getElementById('modal-plan-label').textContent = 'Plan: ' + plan + ' — ' + price;
      document.getElementById('modal-overlay').classList.add('open');
    }
    window.openModal = openModal;

    function closeModal() {
      document.getElementById('modal-overlay').classList.remove('open');
    }
    window.closeModal = closeModal;

    function handleCheckout() {
      const btn = event.target;
      btn.textContent = '⏳ Processing...';
      btn.disabled = true;
      setTimeout(() => {
        document.getElementById('modal-overlay').classList.remove('open');
        btn.textContent = 'Subscribe Now →';
        btn.disabled = false;
        alert('✅ Integration Point: Connect your Stripe publishable key and backend checkout session endpoint here.');
      }, 1500);
    }
    window.handleCheckout = handleCheckout;

    document.getElementById('store-modal-overlay').addEventListener('click', function(e) {
      if (e.target === this) closeStoreModal();
    });

    document.getElementById('store-card').addEventListener('input', function() {
      let val = this.value.replace(/\D/g, '').substring(0, 16);
      this.value = val.replace(/(.{4})/g, '$1 ').trim();
    });

    document.getElementById('modal-overlay').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });

    document.querySelectorAll('input[placeholder="4242 4242 4242 4242"]').forEach(input => {
      input.addEventListener('input', function() {
        let val = this.value.replace(/\D/g, '').substring(0, 16);
        this.value = val.replace(/(.{4})/g, '$1 ').trim();
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Ubiquity Systems Digital — AI Automation Training</title>
      </Head>
      <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
      <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
    </>
  );
}
