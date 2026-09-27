export default function WhatsAppFloat() {
    return (
        <a 
            href="https://wa.me/254725436394?text=Hello%20AIC%20Kibera,%20I%20would%20like%20to%20connect%20with%20the%20church." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '25px',
                right: '25px',
                backgroundColor: '#25d366',
                color: '#fff',
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                zIndex: 9999,
                textDecoration: 'none',
                transition: 'transform 0.3s ease, background-color 0.2s ease'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = '#20ba5a';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#25d366';
            }}
            title="Chat with us on WhatsApp"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
}