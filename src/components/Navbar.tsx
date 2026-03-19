import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) }),
            { threshold: 0.35 }
        )
        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    const goto = (href) => {
        setMenuOpen(false)
        setTimeout(() => {
            const el = document.querySelector(href)
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 60
                window.scrollTo({ top, behavior: 'smooth' })
            }
        }, 80)
    }

    return (
        <>
            <nav
                className="navbar-bar"
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                    maxWidth: '480px', margin: '0 auto',
                    height: '60px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0 24px',
                    backgroundColor: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(192,192,192,0.08)' : 'none',
                    transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
                }}
            >
                <span style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: '20px',
                    color: '#ffffff',
                    letterSpacing: '0.04em',
                }}>
                    LAVANYA
                </span>

                {/* Desktop horizontal nav links — hidden on mobile via inline display:none, shown via CSS */}
                <div className="navbar-desktop-links" style={{
                    display: 'none',
                    alignItems: 'center',
                    gap: '32px',
                }}>
                    {navLinks.map(({ label, href }) => (
                        <button key={label} onClick={() => goto(href)}
                            style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: '13px',
                                color: activeSection === href.slice(1) ? '#ffffff' : 'rgba(192,192,192,0.7)',
                                background: 'none', border: 'none', cursor: 'pointer',
                                letterSpacing: '0.04em',
                                transition: 'color 0.2s ease',
                                padding: '8px 0',
                            }}>
                            {label}
                        </button>
                    ))}
                </div>

                <button className="navbar-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#fff' }} />
                    <span style={{ display: 'block', width: '16px', height: '1.5px', background: '#C0C0C0', marginLeft: 'auto' }} />
                    <span style={{ display: 'block', width: '24px', height: '1.5px', background: '#fff' }} />
                </button>
            </nav>

            {menuOpen && (
                <div className="menu-overlay-enter noise-bg" style={{
                    position: 'fixed', inset: 0, zIndex: 100,
                    maxWidth: '480px', margin: '0 auto',
                    background: 'linear-gradient(160deg, #0f0f0f 0%, #111111 100%)',
                    display: 'flex', flexDirection: 'column',
                }}>
                    {/* Top bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', height: '60px' }}>
                        <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: '20px', color: '#ffffff' }}>LAVANYA</span>
                        <button onClick={() => setMenuOpen(false)} aria-label="Close"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', padding: '8px' }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Thin separator */}
                    <div style={{ height: '1px', background: 'rgba(192,192,192,0.1)', margin: '0 24px' }} />

                    {/* Links */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 28px', gap: '4px' }}>
                        {navLinks.map(({ label, href }) => (
                            <button key={label} onClick={() => goto(href)}
                                style={{
                                    fontFamily: '"DM Serif Display", serif',
                                    fontSize: '32px',
                                    color: activeSection === href.slice(1) ? '#C0C0C0' : '#ffffff',
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    textAlign: 'left', padding: '10px 0',
                                    lineHeight: 1.15,
                                    transition: 'color 0.2s ease',
                                    borderBottom: '1px solid rgba(192,192,192,0.07)',
                                    letterSpacing: '-0.01em',
                                }}>
                                {label}
                            </button>
                        ))}
                    </div>

                    <div style={{ padding: '0 28px 48px' }}>
                        <button onClick={() => goto('#contact')}
                            style={{
                                width: '100%', height: '52px', borderRadius: '999px',
                                border: '1px solid rgba(192,192,192,0.4)',
                                color: '#C0C0C0', background: 'none', cursor: 'pointer',
                                fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 600,
                                letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>
                            Enquire Now
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
