import { useEffect, useRef } from 'react'

export default function ContactSection() {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting)
                    entry.target.querySelectorAll('.fade-in-up').forEach((el) => el.classList.add('visible'))
            }),
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="contact"
            ref={ref}
            className="noise-bg contact-section"
            style={{
                position: 'relative',
                background: 'linear-gradient(160deg, #0f0f0f 0%, #111111 100%)',
                padding: '64px 28px',
                borderTop: '1px solid rgba(192,192,192,0.07)',
            }}
        >
            {/* Label */}
            <span
                className="fade-in-up"
                style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '10px',
                    color: '#C0C0C0',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    display: 'block',
                }}
            >
                Get In Touch
            </span>
            <div
                className="fade-in-up"
                style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg, #C0C0C0, transparent)', margin: '10px 0 0' }}
            />

            <h2
                className="fade-in-up"
                style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: '36px',
                    color: '#ffffff',
                    marginTop: '16px',
                    lineHeight: 1.15,
                    letterSpacing: '-0.01em',
                }}
            >
                LAVANYA<br />
                <em style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Let's Build Together</em>
            </h2>

            <p
                className="fade-in-up"
                style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '13px',
                    color: 'rgba(192,192,192,0.8)',
                    marginTop: '12px',
                    lineHeight: 1.6,
                }}
            >
                Reach out to us to map the blueprint of your next major project.
            </p>

            <div className="contact-layout">
                {/* Contact Details Card */}
                <div className="fade-in-up contact-card" style={{
                    marginTop: '36px',
                    background: 'linear-gradient(145deg, rgba(30,30,30,0.6) 0%, rgba(20,20,20,0.8) 100%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    padding: '32px 24px',
                    border: '1px solid rgba(192,192,192,0.1)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        {/* Phones */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(192,192,192,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px'
                            }}>📞</div>
                            <div>
                                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '10px', color: '#888888', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Call Us</span>
                                <a href="tel:+918847774100" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px', color: '#ffffff', fontWeight: 500, display: 'block', textDecoration: 'none', letterSpacing: '0.02em' }}>+91 8847774100</a>
                                <a href="tel:+917887774100" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '16px', color: '#ffffff', fontWeight: 500, display: 'block', textDecoration: 'none', marginTop: '6px', letterSpacing: '0.02em' }}>+91 7887774100</a>
                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(192,192,192,0.1), transparent)', width: '100%' }} />

                        {/* Email */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(192,192,192,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px'
                            }}>✉️</div>
                            <div>
                                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '10px', color: '#888888', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Email Us</span>
                                <a href="mailto:chavanajay4100@gmail.com" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '15px', color: '#ffffff', fontWeight: 500, display: 'block', textDecoration: 'none', letterSpacing: '0.01em' }}>chavanajay4100@gmail.com</a>
                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(192,192,192,0.1), transparent)', width: '100%' }} />

                        {/* Address */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(192,192,192,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0
                            }}>📍</div>
                            <div>
                                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '10px', color: '#888888', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Visit Us</span>
                                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px', color: '#E0E0E0', fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
                                    Tejas Society<br />
                                    Near Anthony Church<br />
                                    Katrang, Khopoli<br />
                                    Taluka Khalapur<br />
                                    District Raigad<br />
                                    Maharashtra – 410203<br />
                                    India
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Dark Mode Map iframe embed */}
                <div
                    className="fade-in-up contact-map"
                    style={{
                        marginTop: '28px',
                        width: '100%',
                        height: '280px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(192,192,192,0.1)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                        backgroundColor: '#111111',
                        filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)'
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15104.975417036496!2d73.34241776510656!3d18.825633644026367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fec0bf764f21%3A0xe213f57abce29df5!2sKatrang%2C%20Khopoli%2C%20Maharashtra%20410203!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lavanya Office Location"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
