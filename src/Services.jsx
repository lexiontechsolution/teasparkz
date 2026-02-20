import React from 'react';
import { mediaServices } from './mockData.js';

const Services = () => {
    return (
        <div className="services-page" style={{ padding: '2rem 1rem' }}>
            <header className="section glass" style={{ textAlign: 'center', padding: '6rem 2rem', marginBottom: '4rem', borderRadius: '32px' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Media <span className="gradient-text">Excellence</span></h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    Explore our comprehensive suite of media services designed to give your brand the premium edge it deserves. From production to promotion, we cover it all.
                </p>
            </header>

            <div className="section" style={{ display: 'grid', gap: '4rem' }}>
                {mediaServices.map((service, index) => (
                    <div key={service.id} className="glass" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        padding: '3rem',
                        borderRadius: '32px',
                        alignItems: 'center',
                        direction: index % 2 === 0 ? 'ltr' : 'rtl'
                    }}>
                        <div style={{ direction: 'ltr' }}>
                            <span className="category-tag">{service.category}</span>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{service.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                {service.description} Our professional team uses state-of-the-art equipment and creative strategies to deliver results that exceed expectations.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={`mailto:teasparkzz@gmail.com?subject=Inquiry: ${service.title}`} className="btn-primary" style={{ textDecoration: 'none' }}>Get a Quote</a>
                            </div>
                        </div>
                        <div className="card glass" style={{ padding: '0', overflow: 'hidden', borderRadius: '24px', direction: 'ltr' }}>
                            <img src={service.image} alt={service.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        </div>
                    </div>
                ))}
            </div>

            <section className="section glass" style={{ textAlign: 'center', padding: '6rem 2rem', marginTop: '4rem', borderRadius: '32px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Need a <span className="gradient-text">Custom Solution</span>?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Every brand is unique. We provide tailored media packages to fit your specific vision and budget.
                </p>
                <a href="mailto:teasparkzz@gmail.com" className="btn-primary" style={{ padding: '1rem 3rem', textDecoration: 'none' }}>Discuss Your Project</a>
            </section>
        </div>
    );
};

export default Services;
