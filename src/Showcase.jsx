import React from 'react';
import { clientVideos } from './mockData.js';

const Showcase = () => {
    return (
        <div className="showcase-page" style={{ padding: '2rem 1rem' }}>
            <header className="section glass" style={{ textAlign: 'center', padding: '6rem 2rem', marginBottom: '4rem', borderRadius: '32px' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Visual <span className="gradient-text">Showcase</span></h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    A curated collection of our best work. From cinematic advertisements to high-impact campaign coverage, see how we bring stories to life.
                </p>
            </header>

            <div className="section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '3rem' }}>
                {clientVideos.map(video => (
                    <div key={video.id} className="card glass video-card" style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px' }}>
                        <img src={video.thumbnail} alt={video.title} style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                        <div className="video-overlay" style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '2rem',
                            transition: 'all 0.4s'
                        }}>
                            <span style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 700, marginBottom: '0.5rem', display: 'block' }}>{video.client}</span>
                            <h3 style={{ fontSize: '1.8rem', color: 'white', fontFamily: 'Playfair Display', marginBottom: '1rem' }}>{video.title}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Duration: {video.duration}</span>
                                <a href="https://www.youtube.com/@teasparkz" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: 600, borderBottom: '2px solid var(--accent-secondary)' }}>Watch Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <section className="section glass" style={{ textAlign: 'center', padding: '6rem 2rem', marginTop: '6rem', borderRadius: '32px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Want to see <span className="gradient-text">More</span>?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Check out our full library and stay updated with our latest releases on YouTube.</p>
                <a href="https://www.youtube.com/@teasparkz" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 3rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" width="30" alt="YouTube" />
                    Visit Channel
                </a>
            </section>
        </div>
    );
};

export default Showcase;
