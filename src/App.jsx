import React, { useState, useEffect } from 'react';
import { mediaServices, clientVideos } from './mockData.js';
import About from './About.jsx';
import Services from './Services.jsx';
import Showcase from './Showcase.jsx';
import ContactForm from './ContactForm.jsx';

const App = () => {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="app-container">
      <nav className="glass">
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => setView('home')}>
          <img src="/logo.jpg" alt="Teasparkz Logo" style={{
            height: '50px',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(255, 193, 7, 0.2)'
          }} />
          <div className="logo-text gradient-text" style={{ fontSize: '1.8rem', letterSpacing: '1px' }}>TEASPARKZ</div>
        </div>
        <div className="nav-links">
          <button className="nav-btn" onClick={() => setView('home')} style={{ color: view === 'home' ? 'var(--accent-secondary)' : 'var(--text-secondary)' }}>Home</button>
          <button className="nav-btn" onClick={() => setView('about')} style={{ color: view === 'about' ? 'var(--accent-secondary)' : 'var(--text-secondary)' }}>About Us</button>
          <button className="nav-btn" onClick={() => setView('services')} style={{ color: view === 'services' ? 'var(--accent-secondary)' : 'var(--text-secondary)' }}>Services</button>
          <button className="nav-btn" onClick={() => setView('showcase')} style={{ color: view === 'showcase' ? 'var(--accent-secondary)' : 'var(--text-secondary)' }}>Showcase</button>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/teasparkz/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-instagram-11.png" width="24" style={{ filter: 'invert(1)' }} />
          </a>
          <a href="https://www.youtube.com/@teasparkz" target="_blank" rel="noopener noreferrer" title="YouTube">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" width="32" alt="YouTube" />
          </a>
        </div>
      </nav>

      <main>
        {view === 'home' && (
          <div className="page-transition">
            <header className="hero section glass" style={{ textAlign: 'center', padding: '10rem 2rem', margin: '2rem 1rem', borderRadius: '32px' }}>
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <span style={{
                  background: 'rgba(142, 68, 173, 0.2)',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--accent-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '2rem',
                  display: 'inline-block',
                  border: '1px solid rgba(142, 68, 173, 0.3)'
                }}>TEASPARKZ MEDIA PRODUCTION</span>
                <h1 style={{ fontSize: '4.5rem', marginBottom: '2rem', lineHeight: '1.2', fontWeight: 800 }}>Pollachi's Premier <span className="gradient-text">Social Media</span> & Video Hub</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                  The #1 Video Production and YouTube Promotion Company in Pollachi. We specialize in cinematic excellence, strategic digital mastery, and high-impact SEO for local and global brands.
                </p>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn-primary" style={{ textDecoration: 'none', padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Launch Your Project</button>
                  <button onClick={() => setView('showcase')} className="glass btn-primary" style={{ border: '1px solid var(--accent-secondary)', textDecoration: 'none', background: 'transparent', padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Watch Showreel</button>
                </div>
              </div>
            </header>

            <section id="services" className="section" style={{ padding: '6rem 1rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">Superior <span className="gradient-text">Media Services</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>End-to-end creative solutions tailored for modern digital dominance.</p>
              </div>
              <div className="news-grid" style={{ gap: '3rem' }}>
                {mediaServices.map(service => (
                  <div key={service.id} className="card glass news-card" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                    <div style={{ overflow: 'hidden', height: '240px' }}>
                      <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="news-content" style={{ padding: '2.5rem' }}>
                      <span className="category-tag" style={{ letterSpacing: '1px' }}>{service.category}</span>
                      <h3 className="news-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>{service.description}</p>
                      <div style={{ marginTop: '2.5rem' }}>
                        <button onClick={() => setView('services')} style={{
                          color: 'var(--accent-secondary)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 700,
                          padding: 0,
                          fontSize: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>Detailed Service Specs <span style={{ fontSize: '1.2rem' }}>→</span></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="showcase" className="section glass" style={{ padding: '6rem 2rem', borderRadius: '40px', margin: '4rem 1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
                <div style={{ maxWidth: '600px' }}>
                  <h2 className="section-title" style={{ marginBottom: '1rem' }}>Unrivaled <span className="gradient-text">Client Showcases</span></h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Transforming industry giants through visual storytelling. See the real impact of our production.</p>
                </div>
                <button onClick={() => setView('showcase')} className="btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '12px' }}>
                  Explore Full Library
                </button>
              </div>
              <div className="news-grid">
                {clientVideos.slice(0, 3).map(video => (
                  <div key={video.id} className="card glass video-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '32px' }}>
                    <img src={video.thumbnail} alt={video.title} style={{ height: '350px', width: '100%', objectFit: 'cover' }} />
                    <div className="video-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
                      <div style={{ borderLeft: '3px solid var(--accent-secondary)', paddingLeft: '1.5rem' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>{video.client}</span>
                        <h3 style={{ fontSize: '1.5rem', color: 'white', fontFamily: 'Playfair Display', margin: '0.5rem 0' }}>{video.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="section" style={{ textAlign: 'center', padding: '8rem 1rem' }}>
              <div className="glass" style={{ padding: '5rem 2rem', borderRadius: '48px', border: '2px solid var(--accent-primary)', maxWidth: '1000px', margin: '0 auto', boxShadow: '0 0 50px rgba(142, 68, 173, 0.2)' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Scale Your <span className="gradient-text">Empire</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                  Whether it's a feature film, a strategic election campaign, or a global brand advertisement, we have the machinery to deliver.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Direct Line</p>
                    <p style={{ fontSize: '1.8rem', fontWeight: 700 }}>+91 6380853637</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--accent-secondary)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Business Email</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>teasparkzz@gmail.com</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </section>
          </div>
        )}
        {view === 'about' && <div className="page-transition"><About /></div>}
        {view === 'services' && <div className="page-transition"><Services /></div>}
        {view === 'showcase' && <div className="page-transition"><Showcase /></div>}
      </main>

      <footer className="footer glass">
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', cursor: 'pointer' }} onClick={() => setView('home')}>
          <img src="/logo.jpg" alt="Teasparkz Logo" style={{ height: '80px', borderRadius: '8px' }} />
          <div className="logo-text gradient-text" style={{ fontSize: '2rem' }}>TEASPARKZ</div>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>Igniting Brands with Cinematic Production & Strategic Digital Mastery.</p>
        <div className="social-links" style={{ justifyContent: 'center', gap: '3rem' }}>
          <a href="https://www.instagram.com/teasparkz/" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>INSTAGRAM</a>
          <a href="https://www.youtube.com/@teasparkz" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>YOUTUBE</a>
        </div>
        <div style={{ marginTop: '3rem', color: 'var(--accent-secondary)', fontSize: '0.9rem', opacity: 0.8, maxWidth: '800px', margin: '3rem auto 0' }}>
          #Pollachi #SocialMediaPollachi #VideoProductionPollachi #YouTubePromotion #Teasparkz #BestInPollachi #PollachiInfluencer #DigitalMarketingPollachi #PollachiBusiness #SEOIndia
        </div>
        <div style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', letterSpacing: '1px' }}>
          &copy; 2026 TEASPARKZ MEDIA PRODUCTION COMPANY. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default App;
