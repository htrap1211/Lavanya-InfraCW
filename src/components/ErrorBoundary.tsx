import { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, info) {
        console.error('[Lavanya] Component error:', error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    background: '#0f0f0f',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 28px',
                    textAlign: 'center',
                }}>
                    <span style={{ fontFamily: '"DM Serif Display", serif', fontSize: '32px', color: '#ffffff' }}>
                        LAVANYA
                    </span>
                    <div style={{ width: '36px', height: '1px', background: '#C0C0C0', margin: '16px auto' }} />
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px', color: 'rgba(192,192,192,0.7)', marginTop: '8px', lineHeight: 1.6 }}>
                        Something went wrong. Please refresh the page.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '28px',
                            padding: '12px 32px',
                            borderRadius: '999px',
                            border: '1px solid rgba(192,192,192,0.4)',
                            background: 'none',
                            color: '#C0C0C0',
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '13px',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}
