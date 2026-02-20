import React from 'react';

const About = () => {
    return (
        <div className="about-page" style={{ padding: '2rem 1rem' }}>
            <header className="section glass" style={{ textAlign: 'center', padding: '6rem 2rem', marginBottom: '4rem', borderRadius: '32px' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Our <span className="gradient-text">Story</span></h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    Born from a passion for storytelling and a drive for digital excellence, Teasparkz began as a small creative collective in 2024. Today, we are a leading media force, transforming how brands connect with their audience.
                </p>
            </header>

            <section className="section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                <div className="card glass" style={{ padding: '0', overflow: 'hidden', borderRadius: '24px' }}>
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" alt="Team Collaboration" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Our <span className="gradient-text">Mission</span></h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        At Teasparkz, our mission is simple: to ignite brands through high-impact media solutions. We believe that every brand has a spark, and our job is to turn that spark into a blaze of visibility and growth.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        We specialize in bridging the gap between traditional media production and modern digital strategies, ensuring your message doesn't just reach people—it moves them.
                    </p>
                </div>
            </section>

            <section className="section glass" style={{ padding: '4rem', borderRadius: '32px', marginBottom: '6rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Why <span className="gradient-text">Choose Us</span>?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div className="card glass" style={{ padding: '2rem' }}>
                        <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Creative Edge</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Our team of creators brings a fresh perspective to every project, ensuring your content stands out in a crowded digital landscape.</p>
                    </div>
                    <div className="card glass" style={{ padding: '2rem' }}>
                        <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Strategic Vision</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We don't just make videos; we build campaigns. Every frame is backed by a strategy designed to achieve your business goals.</p>
                    </div>
                    <div className="card glass" style={{ padding: '2rem' }}>
                        <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Proven Results</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>With a track record of successful client showcases, our work speaks for itself. We deliver quality that drives impact.</p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>The <span className="gradient-text">Spark</span> Behind the Brand</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <img className="card glass img-hover" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px' }} alt="Studio" />
                    <img className="card glass img-hover" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px' }} alt="Strategy" />
                    <img className="card glass img-hover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px' }} alt="Innovation" />
                </div>
            </section>
        </div>
    );
};

export default About;
