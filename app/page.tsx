"use client";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Cpu,
  Facebook,
  Gauge,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const services = [
  { icon: BrainCircuit, title: "AI Product Development", desc: "From idea to intelligent, production-ready AI products." },
  { icon: Code2, title: "Web & App Development", desc: "Fast, scalable digital products with modern architecture." },
  { icon: Scale, title: "Legal-Tech Solutions", desc: "Technology designed for smarter legal workflows and access." },
  { icon: Palette, title: "UI/UX Design", desc: "Premium interfaces that feel clear, modern and purposeful." },
  { icon: Cpu, title: "Automation Systems", desc: "Automate repetitive work with intelligent systems and agents." },
  { icon: Target, title: "Brand & Digital Strategy", desc: "A cohesive product, brand and digital growth direction." },
];

const comingSoon = [
  { name: "Jersey OS", tag: "Coming Soon", desc: "Private production intelligence for modern jersey workflows.", icon: Gauge },
  { name: "LexWork", tag: "Coming Soon", desc: "An intelligent workspace built around modern legal work.", icon: BriefcaseBusiness },
  { name: "Sunshot AI", tag: "In Development", desc: "Think. Research. Create. A new AI experience from Atherious Labs.", icon: Sparkles },
];

const boardSlots = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `Board Member ${String(i + 1).padStart(2, "0")}`,
  role: "Board Member",
  desc: "Profile details will be published after final approval.",
}));

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Atherious Labs home">
      <span className="logoMark" aria-hidden="true"><i /><b /></span>
      <span>Atherious Labs</span>
    </a>
  );
}

function ProductVisual({ legal = false }: { legal?: boolean }) {
  return (
    <div className={`productVisual ${legal ? "legalVisual" : "vectorVisual"}`} aria-hidden="true">
      <div className="halo haloOne" />
      <div className="halo haloTwo" />
      <div className="glassPane paneA" />
      <div className="glassPane paneB" />
      <div className="glassPane paneC" />
      {legal ? <Scale size={72} strokeWidth={1.3} /> : <WandSparkles size={72} strokeWidth={1.3} />}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top">
      <header className="navWrap">
        <div className="nav container">
          <Logo />
          <button className="mobileMenu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={menuOpen ? "navLinks open" : "navLinks"}>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#founder">Founder</a>
            <a href="#board">Board</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="navCta" href="#products">Explore Ecosystem <ArrowRight size={15} /></a>
        </div>
      </header>

      <section className="hero sectionShell">
        <div className="heroNoise" />
        <div className="container heroGrid">
          <div className="heroCopy reveal">
            <div className="eyebrow"><Sparkles size={14} /> Innovation beyond borders</div>
            <h1>Building the Future Through <span>Intelligent Products.</span></h1>
            <p>Atherious Labs is an innovation lab and parent company building AI systems, legal-tech platforms, creative tools and smart digital ventures.</p>
            <div className="heroActions">
              <a className="button primary" href="#products">Explore Products <ArrowRight size={17} /></a>
              <a className="button secondary" href="#contact">Contact Us <ChevronRight size={17} /></a>
            </div>
            <div className="heroStats">
              <div><strong>AI</strong><span>Product Focus</span></div>
              <div><strong>Legal-Tech</strong><span>Core Expertise</span></div>
              <div><strong>Creative</strong><span>Production Systems</span></div>
              <div><strong>Global</strong><span>Vision & Impact</span></div>
            </div>
          </div>

          <div className="heroStage" aria-hidden="true">
            <div className="world">
              <div className="worldCore"><span /></div>
              <div className="orbit orbit1" />
              <div className="orbit orbit2" />
              <div className="orbit orbit3" />
            </div>
            <div className="stageCard stageTop"><Bot size={18} /><span>AI Systems</span></div>
            <div className="stageCard stageBottom"><ShieldCheck size={18} /><span>Trusted Products</span></div>
            <div className="stageGrid" />
          </div>
        </div>
      </section>

      <section id="products" className="darkSection sectionShell">
        <div className="container">
          <div className="sectionHead lightHead">
            <div><span className="kicker">Our Flagship Products</span><h2>Built for real-world impact.</h2></div>
            <p>Highlighted products combining intelligent software, thoughtful design and practical workflows.</p>
          </div>

          <div className="flagshipGrid">
            <article className="flagshipCard legalCard">
              <div className="productText">
                <div className="productTopline"><span className="productIcon"><Scale /></span><span className="status live">Live Product</span></div>
                <h3>LexGlobal BD</h3>
                <p>Bangladesh-first AI-powered legal ecosystem designed to make legal information and workflows more accessible.</p>
                <ul>
                  <li>AI-powered legal assistance</li><li>Legal research & documents</li><li>Case analysis and smart workflows</li><li>Tools for people, students and professionals</li>
                </ul>
                <a href="https://lexglobalbd.live/" target="_blank" rel="noreferrer" className="textButton">Visit LexGlobal BD <ArrowRight size={16} /></a>
              </div>
              <ProductVisual legal />
            </article>

            <article className="flagshipCard vectorCard">
              <div className="productText">
                <div className="productTopline"><span className="productIcon"><WandSparkles /></span><span className="status live">Core Product</span></div>
                <h3>ReVector AI</h3>
                <p>An advanced image-to-vector workflow focused on production-ready, editable outputs for professional creative work.</p>
                <ul>
                  <li>Image analysis and part detection</li><li>Vectorization pipeline</li><li>Editable production outputs</li><li>Validation-first workflow</li>
                </ul>
                <a href="#contact" className="textButton">Explore ReVector AI <ArrowRight size={16} /></a>
              </div>
              <ProductVisual />
            </article>
          </div>
        </div>
      </section>

      <section className="sectionShell softSection">
        <div className="container">
          <div className="sectionHead">
            <div><span className="kicker">Coming Soon</span><h2>The next wave of products.</h2></div>
            <p>New systems from Atherious Labs are being developed across production, legal productivity and general AI.</p>
          </div>
          <div className="comingGrid">
            {comingSoon.map((item) => {
              const Icon = item.icon;
              return <article className="comingCard" key={item.name}>
                <div className="comingIcon"><Icon /></div><span className="status">{item.tag}</span><h3>{item.name}</h3><p>{item.desc}</p><div className="miniLine" />
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="services" className="sectionShell whiteSection">
        <div className="container">
          <div className="sectionHead">
            <div><span className="kicker">Services We Provide</span><h2>From idea to intelligent product.</h2></div>
            <p>End-to-end technology and product services for businesses, founders and organizations.</p>
          </div>
          <div className="servicesGrid">
            {services.map(({ icon: Icon, title, desc }) => <article className="serviceCard" key={title}><span><Icon /></span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section id="contact" className="ctaBand sectionShell">
        <div className="container ctaGrid">
          <div>
            <span className="kicker kickerLight">Let&apos;s build together</span>
            <h2>Ready to Build Something Extraordinary?</h2>
            <p>Partner with Atherious Labs to turn ambitious ideas into intelligent, usable products.</p>
          </div>
          <div className="contactActions">
            <a className="button primary orderButton" href="mailto:nafiulalnahid@gmail.com?subject=Atherious%20Labs%20Project%20Order">Order Now <ArrowRight size={17} /></a>
            <a className="button glassButton" href="mailto:nafiulalnahid@gmail.com"><Mail size={17} /> Email</a>
            <div className="socials" aria-label="Social contact options">
              <a href="https://linkedin.com/in/nafiul-al-nahid" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#contact" aria-label="Facebook"><Facebook /></a>
              <a href="#contact" aria-label="Instagram"><Instagram /></a>
              <a href="#contact" aria-label="WhatsApp"><MessageCircle /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="sectionShell founderSection">
        <div className="container founderGrid">
          <div className="founderPortrait">
            <div className="portraitGlow" />
            <div className="portraitMonogram">NA</div>
            <div className="portraitBadge"><Sparkles size={15} /> Founder</div>
          </div>
          <div className="founderCopy">
            <span className="kicker">Founder Details</span>
            <h2>Md. Nahid Alom</h2>
            <h3>Founder & Director</h3>
            <p>AI resea