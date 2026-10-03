import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{ background: '#1a1a1a', color: '#f1f1f1', padding: '4rem 0 2rem 0', fontSize: '14px' }}>
            <div className="container grid-5" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px', marginBottom: '3rem' }}>
                
                {/* Column 1: About */}
                <div style={{ flex: '1', minWidth: '220px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '1.2rem', fontSize: '18px', borderBottom: '2px solid #b71c1c', paddingBottom: '8px', display: 'inline-block' }}>AIC Kibera</h3>
                    <p style={{ color: '#bbb', lineHeight: '1.7', marginBottom: '1rem' }}>
                        A transforming community of believers reaching out with the love of Christ, rooted in truth, fellowship, and compassionate service.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '1rem' }}>
                        <a href="#" style={{ color: '#fff', background: '#333', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.3s' }}><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" style={{ color: '#fff', background: '#333', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.3s' }}><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" style={{ color: '#fff', background: '#333', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.3s' }}><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" style={{ color: '#fff', background: '#333', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.3s' }}><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div style={{ flex: '1', minWidth: '180px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '1.2rem', fontSize: '18px', borderBottom: '2px solid #b71c1c', paddingBottom: '8px', display: 'inline-block' }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '8px' }}><Link to="/first-time" style={{ color: '#bbb', textDecoration: 'none' }}>First Time Here?</Link></li>
                        <li style={{ marginBottom: '8px' }}><Link to="/programme" style={{ color: '#bbb', textDecoration: 'none' }}>Church Services</Link></li>
                        <li style={{ marginBottom: '8px' }}><Link to="/departments" style={{ color: '#bbb', textDecoration: 'none' }}>Sermons & Media</Link></li>
                        <li style={{ marginBottom: '8px' }}><Link to="/register" style={{ color: '#bbb', textDecoration: 'none' }}>Join Ministry</Link></li>
                        <li style={{ marginBottom: '8px' }}><Link to="/contact" style={{ color: '#bbb', textDecoration: 'none' }}>Prayer Request</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div style={{ flex: '1', minWidth: '200px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '1.2rem', fontSize: '18px', borderBottom: '2px solid #b71c1c', paddingBottom: '8px', display: 'inline-block' }}>Contact Info</h3>
                    <p style={{ color: '#bbb', marginBottom: '10px' }}><i className="fa-solid fa-phone" style={{ color: '#b71c1c', marginRight: '8px' }}></i> +254 725436394</p>
                    <p style={{ color: '#bbb', marginBottom: '10px' }}><i className="fa-solid fa-envelope" style={{ color: '#b71c1c', marginRight: '8px' }}></i> info@aickibera.org</p>
                    <p style={{ color: '#bbb', marginBottom: '10px' }}><i className="fa-solid fa-location-dot" style={{ color: '#b71c1c', marginRight: '8px' }}></i> Kibera Drive, Off Ngong Rd, Nairobi</p>
                </div>

                {/* Column 4: Service Times */}
                <div style={{ flex: '1', minWidth: '180px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '1.2rem', fontSize: '18px', borderBottom: '2px solid #b71c1c', paddingBottom: '8px', display: 'inline-block' }}>Service Times</h3>
                    <p style={{ color: '#bbb', marginBottom: '8px' }}><strong>1st Service:</strong> 9:00 AM - 11:00 AM</p>
                    <p style={{ color: '#bbb', marginBottom: '8px' }}><strong>2nd Service:</strong> 11:00 AM - 1:00 PM</p>
                    <p style={{ color: '#bbb', marginBottom: '8px' }}><strong>Thur Prayer:</strong> 5:00 PM</p>
                </div>

                {/* Column 5: Google Map Navigation */}
                <div style={{ flex: '1', minWidth: '220px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '1.2rem', fontSize: '18px', borderBottom: '2px solid #b71c1c', paddingBottom: '8px', display: 'inline-block' }}>Find Us</h3>
                    <div style={{ width: '100%', height: '130px', borderRadius: '8px', overflow: 'hidden', marginBottom: '10px', border: '1px solid #333' }}>
                        <iframe 
                            title="AIC Kibera Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8157143922316!2d36.7820!3d-1.3032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTgnMTEuNSJTIDM2wrA0NzY5LjIiRQ!5e0!3m2!1sen!2ske!4v1650000000000!5m2!1sen!2ske" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>
                    <a 
                        href="https://maps.google.com/?q=AIC+Kibera+Nairobi" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: '#b71c1c', fontWeight: 'bold', textDecoration: 'none', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                    >
                        <i className="fa-solid fa-map-location-dot"></i> Get Directions &rarr;
                    </a>
                </div>

            </div>

            <div style={{ borderTop: '1px solid #333', paddingTop: '1.5rem', textAlign: 'center', color: '#888', fontSize: '13px' }}>
                <div className="container">
                    <p>© 2026 AIC Kibera. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}