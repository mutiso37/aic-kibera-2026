import { Link } from 'react-router-dom';
import ServicesImageSlider from '../components/ServicesImageSlider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function FirstTime() {
    return (
        <div className="first-time-page">

            <Navbar />

            {/* =====================================================
                HERO
            ====================================================== */}
            <section
                className="first-time-hero"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            90deg,
                            rgba(0,0,0,0.82),
                            rgba(0,0,0,0.48),
                            rgba(0,0,0,0.30)
                        ),
                        url('/hero-bg1.jpg')
                    `
                }}
            >

                <div className="container">

                    <div className="first-time-hero-content">

                        <span className="first-time-eyebrow">
                            WELCOME TO A.I.C. KIBERA
                        </span>

                        <h1>
                            Your First Visit
                            <br />
                            <span>Starts Here.</span>
                        </h1>

                        <p>
                            Whether you are visiting for the first time,
                            returning after some time away, or looking
                            for a church family, we are delighted to
                            welcome you to A.I.C. Kibera.
                        </p>

                        <div className="first-time-hero-buttons">

                            <Link
                                to="/programme"
                                className="first-time-primary-btn"
                            >
                                View Programme
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                            <Link
                                to="/contact"
                                className="first-time-secondary-btn"
                            >
                                Plan Your Visit
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="first-time-hero-scroll">
                    <span>DISCOVER A.I.C. KIBERA</span>
                    <i className="fa-solid fa-arrow-down"></i>
                </div>

            </section>


            {/* =====================================================
                WELCOME INTRO
            ====================================================== */}
            <section className="first-time-welcome">

                <div className="container">

                    <div className="first-time-welcome-grid">

                        {/* IMAGE */}
                        <div className="first-time-visual">

                            <ServicesImageSlider />

                            <div className="first-time-visual-badge">

                                <div className="visual-badge-icon">
                                    <i className="fa-solid fa-church"></i>
                                </div>

                                <div>
                                    <strong>A.I.C. Kibera</strong>
                                    <span>
                                        Worship • Fellowship • Service
                                    </span>
                                </div>

                            </div>

                        </div>


                        {/* TEXT */}
                        <div className="first-time-welcome-content">

                            <span className="first-time-section-label">
                                YOU ARE WELCOME
                            </span>

                            <h2>
                                We're Glad
                                <span> You're Here</span>
                            </h2>

                            <div className="first-time-heading-line"></div>

                            <p className="lead-text">
                                At A.I.C. Kibera, we believe church is more
                                than a building. It is a community where
                                people come together to worship God, grow
                                in faith, build relationships and serve
                                others.
                            </p>

                            <p>
                                We want your first experience with us to be
                                comfortable, meaningful and welcoming.
                                Come as you are and join us in worship,
                                fellowship and the Word of God.
                            </p>

                            <div className="welcome-highlight">

                                <div className="welcome-highlight-icon">
                                    <i className="fa-solid fa-heart"></i>
                                </div>

                                <div>
                                    <strong>
                                        There is a place for you here.
                                    </strong>

                                    <span>
                                        Come and worship with us.
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SUNDAY SERVICES
            ====================================================== */}
            <section className="first-time-services">

                <div className="container">

                    <div className="first-time-section-heading">

                        <div>
                            <span className="first-time-section-label">
                                SUNDAY WORSHIP
                            </span>

                            <h2>
                                Join Us for
                                <span> Worship</span>
                            </h2>
                        </div>

                        <p>
                            Choose a service and join our church family
                            for worship, fellowship and the Word of God.
                        </p>

                    </div>


                    <div className="first-time-service-grid">

                        {/* ENGLISH */}
                        <div className="first-time-service-card">

                            <div className="service-card-top">
                                <span className="service-card-number">
                                    01
                                </span>

                                <div className="service-card-icon">
                                    <i className="fa-solid fa-globe"></i>
                                </div>
                            </div>

                            <div className="service-card-body">

                                <span className="service-language">
                                    ENGLISH
                                </span>

                                <h3>English Service</h3>

                                <div className="service-card-time">
                                    <i className="fa-regular fa-clock"></i>
                                    <strong>
                                        9:00 AM – 11:00 AM
                                    </strong>
                                </div>

                                <p>
                                    A time of worship, biblical teaching,
                                    prayer, fellowship and spiritual growth.
                                </p>

                            </div>

                        </div>


                        {/* SWAHILI */}
                        <div className="first-time-service-card featured">

                            <div className="service-card-top">
                                <span className="service-card-number">
                                    02
                                </span>

                                <div className="service-card-icon">
                                    <i className="fa-solid fa-language"></i>
                                </div>
                            </div>

                            <div className="service-card-body">

                                <span className="service-language">
                                    KISWAHILI
                                </span>

                                <h3>Swahili Service</h3>

                                <div className="service-card-time">
                                    <i className="fa-regular fa-clock"></i>
                                    <strong>
                                        11:00 AM – 1:00 PM
                                    </strong>
                                </div>

                                <p>
                                    A welcoming Swahili-speaking service
                                    centred on worship, fellowship and
                                    the Word of God.
                                </p>

                            </div>

                        </div>


                        {/* FAMILY */}
                        <div className="first-time-service-card">

                            <div className="service-card-top">
                                <span className="service-card-number">
                                    03
                                </span>

                                <div className="service-card-icon">
                                    <i className="fa-solid fa-people-roof"></i>
                                </div>
                            </div>

                            <div className="service-card-body">

                                <span className="service-language">
                                    FAMILY
                                </span>

                                <h3>Family Service</h3>

                                <div className="service-card-time">
                                    <i className="fa-regular fa-clock"></i>
                                    <strong>
                                        10:00 AM – 1:00 PM
                                    </strong>
                                </div>

                                <p>
                                    A family-focused time of worship and
                                    fellowship for people of different
                                    generations.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT TO EXPECT
            ====================================================== */}
            <section className="first-time-expect">

                <div className="container">

                    <div className="first-time-centered-heading">

                        <span className="first-time-section-label">
                            YOUR FIRST EXPERIENCE
                        </span>

                        <h2>
                            What Can You
                            <span> Expect?</span>
                        </h2>

                        <p>
                            From the moment you arrive, we want you to feel
                            welcomed and comfortable as you worship with us.
                        </p>

                    </div>


                    <div className="first-time-expect-grid">

                        <div className="expect-item">

                            <span className="expect-number">
                                01
                            </span>

                            <div className="expect-icon">
                                <i className="fa-solid fa-handshake"></i>
                            </div>

                            <h3>Be Welcomed</h3>

                            <p>
                                Experience a warm and welcoming church
                                community where visitors are valued.
                            </p>

                        </div>


                        <div className="expect-item">

                            <span className="expect-number">
                                02
                            </span>

                            <div className="expect-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <h3>Find Your Place</h3>

                            <p>
                                Settle in comfortably and prepare to take
                                part in worship and fellowship.
                            </p>

                        </div>


                        <div className="expect-item">

                            <span className="expect-number">
                                03
                            </span>

                            <div className="expect-icon">
                                <i className="fa-solid fa-music"></i>
                            </div>

                            <h3>Worship With Us</h3>

                            <p>
                                Join us in worship, prayer, biblical
                                teaching and fellowship.
                            </p>

                        </div>


                        <div className="expect-item">

                            <span className="expect-number">
                                04
                            </span>

                            <div className="expect-icon">
                                <i className="fa-solid fa-people-group"></i>
                            </div>

                            <h3>Connect</h3>

                            <p>
                                Meet the church family and discover ways
                                to participate, serve and grow.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CHURCH LIFE
            ====================================================== */}
            <section className="first-time-church-life">

                <div className="container">

                    <div className="church-life-wrapper">

                        <div className="church-life-content">

                            <span className="first-time-section-label">
                                LIFE AT A.I.C. KIBERA
                            </span>

                            <h2>
                                More Than
                                <span> Sunday</span>
                            </h2>

                            <p>
                                Church fellowship continues throughout
                                the week through prayer, choir ministry,
                                worship practice, pastoral fellowship
                                and other activities.
                            </p>

                            <div className="church-life-features">

                                <div>
                                    <i className="fa-solid fa-check"></i>
                                    <span>Prayer & Fellowship</span>
                                </div>

                                <div>
                                    <i className="fa-solid fa-check"></i>
                                    <span>Choir & Worship Ministry</span>
                                </div>

                                <div>
                                    <i className="fa-solid fa-check"></i>
                                    <span>Children & Youth</span>
                                </div>

                                <div>
                                    <i className="fa-solid fa-check"></i>
                                    <span>Community & Unity</span>
                                </div>

                            </div>

                            <Link
                                to="/programme"
                                className="first-time-dark-btn"
                            >
                                Explore Weekly Programme
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>


                        <div className="church-life-image">

                            <ServicesImageSlider />

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CHILDREN & YOUTH
            ====================================================== */}
            <section className="first-time-generation">

                <div className="container">

                    <div className="first-time-centered-heading">

                        <span className="first-time-section-label">
                            NEXT GENERATION
                        </span>

                        <h2>
                            Growing the
                            <span> Next Generation</span>
                        </h2>

                        <p>
                            A.I.C. Kibera provides opportunities for
                            children and young people to participate,
                            fellowship and grow.
                        </p>

                    </div>


                    <div className="generation-grid">

                        <div className="generation-card">

                            <div className="generation-icon">
                                <i className="fa-solid fa-child"></i>
                            </div>

                            <div>

                                <span>YOUNG GIRLS</span>

                                <h3>Cadets</h3>

                                <p>
                                    An opportunity for young girls to
                                    participate, fellowship and grow
                                    in Christian values.
                                </p>

                            </div>

                        </div>


                        <div className="generation-card">

                            <div className="generation-icon">
                                <i className="fa-solid fa-people-group"></i>
                            </div>

                            <div>

                                <span>YOUTH</span>

                                <h3>Battalion</h3>

                                <p>
                                    A youth-focused ministry providing
                                    opportunities for young people to
                                    fellowship, participate and grow.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                THIRD SUNDAY
            ====================================================== */}
            <section className="third-sunday-feature">

                <div className="container">

                    <div className="third-sunday-inner">

                        <div className="third-sunday-symbol">
                            <i className="fa-solid fa-hands-holding-child"></i>
                        </div>

                        <div className="third-sunday-content">

                            <span>
                                EVERY THIRD SUNDAY
                            </span>

                            <h2>
                                Celebrating Our
                                <strong> Unity</strong>
                            </h2>

                            <p>
                                Every third Sunday of the month, we come
                                together in unity to share Holy Communion,
                                celebrate birthdays and strengthen
                                fellowship within the church family.
                            </p>

                            <div className="third-sunday-list">

                                <div>
                                    <i className="fa-solid fa-cross"></i>
                                    <span>Holy Communion</span>
                                </div>

                                <div>
                                    <i className="fa-solid fa-cake-candles"></i>
                                    <span>Birthday Celebrations</span>
                                </div>

                                <div>
                                    <i className="fa-solid fa-people-group"></i>
                                    <span>Unity & Fellowship</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ====================================================== */}
            <section className="first-time-final-cta">

                <div className="container">

                    <div className="first-time-final-content">

                        <span>
                            WE WOULD LOVE TO SEE YOU
                        </span>

                        <h2>
                            Come Worship
                            <strong> With Us</strong>
                        </h2>

                        <p>
                            Whether you are visiting for the first time
                            or looking for a church family, you are
                            welcome at A.I.C. Kibera.
                        </p>

                        <div className="final-cta-buttons">

                            <Link
                                to="/programme"
                                className="first-time-primary-btn"
                            >
                                View Programme
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                            <Link
                                to="/contact"
                                className="first-time-outline-btn"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            <Footer />

            <WhatsAppFloat />

        </div>
    );
}