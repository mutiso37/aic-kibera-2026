import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Welcome() {
    return (
        <div>
            <Navbar />

            {/* HERO */}
            <section
                className="page-header welcome-header"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url('/hero-bg1.jpg')`
                }}
            >
                <div className="container text-center text-white">
                    <span className="programme-badge">
                        A MESSAGE FROM A.I.C. KIBERA
                    </span>

                    <h1>Welcome to A.I.C. Kibera</h1>

                    <p>
                        A place of worship, fellowship, spiritual growth
                        and service.
                    </p>
                </div>
            </section>


            {/* WELCOME INTRODUCTION */}
            <section className="py-5 welcome-intro">
                <div className="container">

                    <div className="welcome-grid">

                        {/* IMAGE / VISUAL */}
                        <div className="welcome-image-wrapper">

                            <div className="welcome-image-card">

                                <img
                                    src="/hero-bg1.jpg"
                                    alt="A.I.C. Kibera church"
                                />

                                <div className="welcome-image-caption">
                                    <i className="fa-solid fa-church"></i>

                                    <div>
                                        <strong>A.I.C. Kibera</strong>
                                        <span>Worship • Fellowship • Service</span>
                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* MESSAGE */}
                        <div className="welcome-message">

                            <span className="section-label">
                                YOU ARE WELCOME
                            </span>

                            <h2>
                                A Church Family <span>For You</span>
                            </h2>

                            <p>
                                We warmly welcome you to A.I.C. Kibera. Whether
                                you are joining us for the first time, returning
                                after some time away, or looking for a church
                                family, we are glad to have you with us.
                            </p>

                            <p>
                                Our desire is to provide an environment where
                                people can worship God, grow in faith, build
                                meaningful relationships and serve others.
                            </p>

                            <p>
                                We invite you to participate in the life of the
                                church through worship services, prayer,
                                fellowship, ministry activities and opportunities
                                to serve.
                            </p>

                            <div className="welcome-signature">
                                <span>
                                    <i className="fa-solid fa-heart"></i>
                                </span>

                                <div>
                                    <strong>Welcome to our church family.</strong>
                                    <small>
                                        We look forward to worshipping with you.
                                    </small>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* OUR HEART */}
            <section className="welcome-values-section">
                <div className="container">

                    <div className="section-intro text-center">
                        <span className="section-label">
                            OUR HEART
                        </span>

                        <h2>
                            Worship. <span>Grow.</span> Serve.
                        </h2>

                        <p>
                            We desire to see individuals and families grow
                            together through worship, fellowship, God's Word
                            and service.
                        </p>
                    </div>


                    <div className="welcome-values-grid">

                        {/* WORSHIP */}
                        <div className="welcome-value-card">

                            <div className="welcome-value-icon">
                                <i className="fa-solid fa-hands-praying"></i>
                            </div>

                            <h3>Worship</h3>

                            <p>
                                Come together as a church family to worship,
                                pray and give thanks to God.
                            </p>

                        </div>


                        {/* GROW */}
                        <div className="welcome-value-card">

                            <div className="welcome-value-icon">
                                <i className="fa-solid fa-book-bible"></i>
                            </div>

                            <h3>Grow</h3>

                            <p>
                                Develop your faith through biblical teaching,
                                fellowship, prayer and participation in church
                                life.
                            </p>

                        </div>


                        {/* SERVE */}
                        <div className="welcome-value-card">

                            <div className="welcome-value-icon">
                                <i className="fa-solid fa-hand-holding-heart"></i>
                            </div>

                            <h3>Serve</h3>

                            <p>
                                Discover opportunities to use your gifts and
                                abilities in service to God, the church and
                                the community.
                            </p>

                        </div>

                    </div>
                </div>
            </section>


            {/* FELLOWSHIP */}
            <section className="py-5">

                <div className="container">

                    <div className="welcome-fellowship-card">

                        <div className="fellowship-icon">
                            <i className="fa-solid fa-people-group"></i>
                        </div>

                        <div className="fellowship-content">

                            <span className="section-label">
                                FELLOWSHIP
                            </span>

                            <h2>
                                Growing Together as <span>One Family</span>
                            </h2>

                            <p>
                                Church life extends beyond the Sunday service.
                                Through prayer, choir practices, youth and
                                children's activities, fellowship and other
                                church gatherings, members have opportunities
                                to connect and grow together.
                            </p>

                            <div className="fellowship-points">

                                <div>
                                    <i className="fa-solid fa-check"></i>
                                    Prayer & Fellowship
                                </div>

                                <div>
                                    <i className="fa-solid fa-check"></i>
                                    Choir & Worship
                                </div>

                                <div>
                                    <i className="fa-solid fa-check"></i>
                                    Children & Youth
                                </div>

                                <div>
                                    <i className="fa-solid fa-check"></i>
                                    Community & Unity
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* SCRIPTURE / REFLECTION */}
            <section className="welcome-scripture">

                <div className="container">

                    <div className="scripture-card">

                        <div className="scripture-icon">
                            <i className="fa-solid fa-quote-left"></i>
                        </div>

                        <blockquote>
                            “Let us consider how we may spur one another on
                            toward love and good deeds.”
                        </blockquote>

                        <span>
                            Hebrews 10:24
                        </span>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="visit-cta">

                <div className="container text-center">

                    <span className="section-label light-label">
                        JOIN US
                    </span>

                    <h2>There Is a Place for You</h2>

                    <p>
                        Come worship with us and become part of the A.I.C.
                        Kibera church family.
                    </p>

                    <div className="welcome-buttons">

                        <a
                            href="/programme"
                            className="btn-primary-custom"
                        >
                            View Programme
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>

                        <a
                            href="/contact"
                            className="btn-outline-light-custom"
                        >
                            Contact Us
                            <i className="fa-solid fa-phone"></i>
                        </a>

                    </div>

                </div>

            </section>


            <Footer />
            <WhatsAppFloat />
        </div>
    );
}