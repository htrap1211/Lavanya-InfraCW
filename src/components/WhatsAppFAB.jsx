export default function WhatsAppFAB() {
    return (
        <a
            href="https://wa.me/918847774100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-8 right-8 z-50 whatsapp-pulse"
            style={{
                width: '56px', height: '56px',
                background: 'linear-gradient(45deg, #25D366, #128C7E)',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.2s ease-in-out',
                position: 'fixed', bottom: '32px', right: '32px', zIndex: 50,
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="28" height="28">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.498 1.132 6.738 3.052 9.37L1.056 31.2l6.072-1.952a15.93 15.93 0 008.876 2.688C24.828 31.936 32 24.76 32 16.004S24.828 0 16.004 0zm9.43 22.616c-.396 1.116-2.316 2.132-3.232 2.268-.828.12-1.876.172-3.028-.192a27.606 27.606 0 01-2.744-1.016c-4.828-2.088-7.984-6.964-8.224-7.288-.232-.324-1.908-2.54-1.908-4.844s1.208-3.436 1.636-3.908c.428-.472.936-.588 1.248-.588.312 0 .624.004.896.016.288.012.676-.108 1.056.808.396.952 1.344 3.28 1.464 3.516.116.24.196.516.04.832-.156.316-.236.516-.472.792-.232.28-.492.624-.7.836-.232.24-.476.496-.204.972.272.476 1.212 2 2.6 3.24 1.784 1.592 3.288 2.084 3.756 2.32.468.24.744.2 1.016-.116.276-.316 1.18-1.372 1.492-1.844.316-.472.628-.392 1.06-.236.432.156 2.744 1.296 3.216 1.532.468.236.78.352.896.548.116.196.116 1.132-.28 2.248z" />
            </svg>
        </a>
    )
}
