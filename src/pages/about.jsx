import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
const churchImg = "/aickibera-church-image.png";
export default function About() {
useEffect(() => {
if (window.location.hash) {
const targetId = window.location.hash.substring(1);
const element = document.getElementById(targetId);

        if (element) {
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 150);
        }
    }
}, []);

return (
    <div
        style={{
            overflowX: "hidden",
            background: "#f8f9fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        }}
    >
        <Navbar />

        {/* PAGE HERO HEADER */}
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${churchImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "6rem 1rem",
                color: "#fff",
                textAlign: "center"
            }}
        >
            <div
                className="container"
                style={{
                    animation: "fadeIn 1s ease-out",
                    maxWidth: "800px",
                    margin: "0 auto"
                }}
            >
                <h1
                    style={{
                        fontSize: "clamp(32px, 5vw, 44px)",
                        marginBottom: "12px",
                        fontWeight: "800",
                        letterSpacing: "-0.5px"
                    }}
                >
                    About A.I.C. Kibera
                </h1>

                <p
                    style={{
                        fontSize: "clamp(15px, 2vw, 18px)",
                        color: "#e2e8f0",
                        fontWeight: "300"
                    }}
                >
                    Rooted in Christ. Serving People. Transforming Communities.
                </p>
            </div>
        </div>

        {/* MAIN CONTENT */}
        <section
            style={{
                padding: "60px 20px",
                flex: 1
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px"
                }}
            >
                {/* SECTION 1 */}
                <div
                    id="history"
                    style={{
                        background: "#fff",
                        borderRadius: "16px",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                        padding: "clamp(24px, 5vw, 40px)",
                        borderLeft: "6px solid #b71c1c",
                        scrollMarginTop: "100px"
                    }}
                >
                    <div
                        style={{
                            color: "#b71c1c",
                            textTransform: "uppercase",
                            fontSize: "12px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            marginBottom: "8px"
                        }}
                    >
                        Who We Are & History
                    </div>

                    <h2
                        style={{
                            color: "#1a1a1a",
                            fontSize: "clamp(24px, 3vw, 30px)",
                            marginBottom: "20px"
                        }}
                    >
                        A Church for Everyone
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(280px, 1fr))",
                            alignItems: "start",
                            gap: "30px",
                            marginBottom: "40px"
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    color: "#4a5568",
                                    fontSize: "15px",
                                    lineHeight: "1.8",
                                    marginBottom: "15px"
                                }}
                            >
                                Africa Inland Church – Kenya, Kibera is a
                                Christian community committed to proclaiming
                                the Gospel of Jesus Christ, nurturing
                                believers in faith, serving our community
                                and reaching people with the transforming
                                message of Christ.
                            </p>

                            <p
                                style={{
                                    color: "#4a5568",
                                    fontSize: "15px",
                                    lineHeight: "1.8",
                                    margin: 0
                                }}
                            >
                                We are part of the Africa Inland Church
                                family, with a strong heritage of faith,
                                service and mission.
                            </p>
                        </div>

                        <div
                            style={{
                                background: "#f8f9fa",
                                border: "1px solid #e2e8f0",
                                borderRadius: "12px",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px"
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    gap: "15px",
                                    alignItems: "flex-start"
                                }}
                            >
                                <i
                                    className="fa-solid fa-location-dot"
                                    style={{
                                        color: "#b71c1c",
                                        fontSize: "20px",
                                        marginTop: "3px"
                                    }}
                                ></i>

                                <div>
                                    <div
                                        style={{
                                            fontSize: "11px",
                                            color: "#718096",
                                            fontWeight: "bold",
                                            textTransform: "uppercase"
                                        }}
                                    >
                                        Location
                                    </div>

                                    <div
                                        style={{
                                            fontSize: "14px",
                                            color: "#1a1a1a",
                                            fontWeight: "600"
                                        }}
                                    >
                                        Kibera, Nairobi, Kenya
                                    </div>
                                </div>
                            </div>

                            <hr
                                style={{
                                    border: "0",
                                    borderTop: "1px solid #e2e8f0",
                                    margin: 0
                                }}
                            />

                            <div
                                style={{
                                    display: "flex",
                                    gap: "15px",
                                    alignItems: "flex-start"
                                }}
                            >
                                <i
                                    className="fa-solid fa-users"
                                    style={{
                                        color: "#b71c1c",
                                        fontSize: "18px",
                                        marginTop: "3px"
                                    }}
                                ></i>

                                <div>
                                    <div
                                        style={{
                                            fontSize: "11px",
                                            color: "#718096",
                                            fontWeight: "bold",
                                            textTransform: "uppercase"
                                        }}
                                    >
                                        Affiliation
                                    </div>

                                    <div
                                        style={{
                                            fontSize: "14px",
                                            color: "#1a1a1a",
                                            fontWeight: "600"
                                        }}
                                    >
                                        Africa Inland Church (A.I.C.)
                                    </div>
                                </div>
                            </div>

                            <hr
                                style={{
                                    border: "0",
                                    borderTop: "1px solid #e2e8f0",
                                    margin: 0
                                }}
                            />

                            <div
                                style={{
                                    display: "flex",
                                    gap: "15px",
                                    alignItems: "flex-start"
                                }}
                            >
                                <i
                                    className="fa-solid fa-bullseye"
                                    style={{
                                        color: "#b71c1c",
                                        fontSize: "18px",
                                        marginTop: "3px"
                                    }}
                                ></i>

                                <div>
                                    <div
                                        style={{
                                            fontSize: "11px",
                                            color: "#718096",
                                            fontWeight: "bold",
                                            textTransform: "uppercase"
                                        }}
                                    >
                                        Focus
                                    </div>

                                    <div
                                        style={{
                                            fontSize: "14px",
                                            color: "#1a1a1a",
                                            fontWeight: "600"
                                        }}
                                    >
                                        Worship, Discipleship, Community
                                        Service & Mission
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* JOURNEY OF FAITH */}
                    <div
                        style={{
                            marginTop: "40px",
                            paddingTop: "30px",
                            borderTop: "1px solid #e2e8f0"
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "22px",
                                color: "#1a1a1a",
                                marginBottom: "6px"
                            }}
                        >
                            A Journey of Faith
                        </h3>

                        <p
                            style={{
                                color: "#718096",
                                fontSize: "14px",
                                marginBottom: "25px"
                            }}
                        >
                            From humble beginnings to a growing church
                            family, God has been faithful.
                        </p>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: "20px"
                            }}
                        >
                            {[
                                {
                                    era: "1970s – 1980s",
                                    title: "The Beginning",
                                    desc: "The church was established in Kibera, bringing hope and the Gospel to the community.",
                                    accent: "#b71c1c"
                                },
                                {
                                    era: "1990s – 2000s",
                                    title: "Growth & Discipleship",
                                    desc: "More believers joined, ministries expanded and the church became a beacon of hope.",
                                    accent: "#1a1a1a"
                                },
                                {
                                    era: "2010s – 2020s",
                                    title: "Community Impact",
                                    desc: "Increased outreach, schools, health programs and community development.",
                                    accent: "#b71c1c"
                                },
                                {
                                    era: "Today",
                                    title: "A Growing Family",
                                    desc: "We continue to reach more lives, empower communities and advance the Kingdom.",
                                    accent: "#1a1a1a"
                                }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: "#fdfdfd",
                                        border: "1px solid #e2e8f0",
                                        borderRadius: "12px",
                                        padding: "20px",
                                        borderTop: `4px solid ${item.accent}`,
                                        transition:
                                            "transform 0.2s ease, box-shadow 0.2s ease",
                                        boxShadow:
                                            "0 2px 4px rgba(0,0,0,0.02)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform =
                                            "translateY(-4px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 8px 16px rgba(0,0,0,0.06)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform =
                                            "translateY(0)";
                                        e.currentTarget.style.boxShadow =
                                            "0 2px 4px rgba(0,0,0,0.02)";
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "11px",
                                            fontWeight: "bold",
                                            color: "#b71c1c",
                                            marginBottom: "4px"
                                        }}
                                    >
                                        {item.era}
                                    </div>

                                    <div
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                            color: "#1a1a1a",
                                            marginBottom: "8px"
                                        }}
                                    >
                                        {item.title}
                                    </div>

                                    <p
                                        style={{
                                            fontSize: "13px",
                                            color: "#64748b",
                                            margin: 0,
                                            lineHeight: "1.5"
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECTION 2 */}
                <div
                    id="mission-vision"
                    style={{
                        scrollMarginTop: "100px",
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "30px"
                    }}
                >
                    <div
                        style={{
                            background: "#1a202c",
                            color: "#fff",
                            borderRadius: "16px",
                            padding: "30px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "24px",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.08)"
                        }}
                    >
                        <div>
                            <h4
                                style={{
                                    color: "#fff",
                                    fontSize: "18px",
                                    marginBottom: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
                                <i
                                    className="fa-solid fa-bullseye"
                                    style={{ color: "#b71c1c" }}
                                ></i>
                                Our Mission
                            </h4>

                            <p
                                style={{
                                    color: "#cbd5e1",
                                    fontSize: "14px",
                                    lineHeight: "1.6",
                                    margin: 0
                                }}
                            >
                                To make disciples of Jesus Christ, nurture
                                believers in faith and serve communities
                                through the Gospel.
                            </p>
                        </div>

                        <hr
                            style={{
                                border: "0",
                                borderTop:
                                    "1px solid rgba(255,255,255,0.1)",
                                margin: 0
                            }}
                        />

                        <div>
                            <h4
                                style={{
                                    color: "#fff",
                                    fontSize: "18px",
                                    marginBottom: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
                                <i
                                    className="fa-solid fa-eye"
                                    style={{ color: "#b71c1c" }}
                                ></i>
                                Our Vision
                            </h4>

                            <p
                                style={{
                                    color: "#cbd5e1",
                                    fontSize: "14px",
                                    lineHeight: "1.6",
                                    margin: 0
                                }}
                            >
                                To be a Christ-centered, Spirit-filled
                                church transforming lives and impacting
                                generations.
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            background: "#fff",
                            border: "1px solid #e2e8f0",
                            borderRadius: "16px",
                            padding: "30px",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.04)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}
                    >
                        <div
                            style={{
                                color: "#b71c1c",
                                textTransform: "uppercase",
                                fontSize: "11px",
                                fontWeight: "bold",
                                letterSpacing: "1px",
                                marginBottom: "6px"
                            }}
                        >
                            Statement of Faith
                        </div>

                        <h3
                            style={{
                                fontSize: "22px",
                                color: "#1a1a1a",
                                marginBottom: "12px"
                            }}
                        >
                            What We Believe
                        </h3>

                        <p
                            style={{
                                color: "#4a5568",
                                fontSize: "14px",
                                lineHeight: "1.7",
                                margin: 0
                            }}
                        >
                            We believe in the Holy Scriptures, the one true
                            God, Jesus Christ, the Holy Spirit, salvation by
                            grace through faith, the Church, baptism, and
                            the return of Christ.
                        </p>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div
                    id="core-values"
                    style={{
                        background: "#fff",
                        borderRadius: "16px",
                        border: "1px solid #e2e8f0",
                        padding: "30px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
                        scrollMarginTop: "100px"
                    }}
                >
                    <div
                        style={{
                            color: "#b71c1c",
                            textTransform: "uppercase",
                            fontSize: "11px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            marginBottom: "5px"
                        }}
                    >
                        Core Values
                    </div>

                    <h3
                        style={{
                            fontSize: "22px",
                            color: "#1a1a1a",
                            marginBottom: "6px"
                        }}
                    >
                        What We Value
                    </h3>

                    <p
                        style={{
                            color: "#718096",
                            fontSize: "14px",
                            marginBottom: "25px"
                        }}
                    >
                        Our core values guide everything we do.
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(160px, 1fr))",
                            gap: "20px",
                            textAlign: "center"
                        }}
                    >
                        {[
                            {
                                title: "Love",
                                desc: "We love God & people.",
                                bg: "#fff1f2",
                                border: "#be123c",
                                color: "#9f1239"
                            },
                            {
                                title: "Integrity",
                                desc: "We do what is right.",
                                bg: "#f0fdf4",
                                border: "#15803d",
                                color: "#166534"
                            },
                            {
                                title: "Excellence",
                                desc: "We give our best.",
                                bg: "#eff6ff",
                                border: "#1d4ed8",
                                color: "#1e40af"
                            },
                            {
                                title: "Service",
                                desc: "We serve humbly.",
                                bg: "#faf5ff",
                                border: "#7e22ce",
                                color: "#6b21a8"
                            },
                            {
                                title: "Faith",
                                desc: "We trust God fully.",
                                bg: "#fffbeb",
                                border: "#b45309",
                                color: "#92400e"
                            },
                            {
                                title: "Mission",
                                desc: "We reach nations.",
                                bg: "#f0fdfa",
                                border: "#0f766e",
                                color: "#115e59"
                            }
                        ].map((val, idx) => (
                            <div
                                key={idx}
                                style={{
                                    padding: "22px 16px",
                                    background: val.bg,
                                    borderRadius: "14px",
                                    border: "1px solid #e2e8f0",
                                    borderTop: `4px solid ${val.border}`,
                                    transition:
                                        "transform 0.2s ease, box-shadow 0.2s ease",
                                    boxShadow:
                                        "0 2px 6px rgba(0,0,0,0.02)"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-4px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 8px 20px rgba(0,0,0,0.08)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 2px 6px rgba(0,0,0,0.02)";
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        color: val.color,
                                        marginBottom: "6px"
                                    }}
                                >
                                    {val.title}
                                </div>

                                <div
                                    style={{
                                        fontSize: "12px",
                                        color: "#4a5568",
                                        lineHeight: "1.4"
                                    }}
                                >
                                    {val.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 4 - LEADERSHIP */}
                <div
                    id="leadership"
                    style={{
                        background: "#fff",
                        borderRadius: "16px",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
                        padding: "40px 20px",
                        borderLeft: "6px solid #1a1a1a",
                        textAlign: "center",
                        scrollMarginTop: "100px"
                    }}
                >
                    <div
                        style={{
                            color: "#b71c1c",
                            textTransform: "uppercase",
                            fontSize: "12px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            marginBottom: "6px"
                        }}
                    >
                        Leadership
                    </div>

                    <h2
                        style={{
                            color: "#1a1a1a",
                            fontSize: "28px",
                            marginBottom: "8px"
                        }}
                    >
                        Our Leadership
                    </h2>

                    <p
                        style={{
                            color: "#718096",
                            fontSize: "14px",
                            marginBottom: "40px"
                        }}
                    >
                        Servant leaders for a greater tomorrow.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            maxWidth: "950px",
                            margin: "0 auto",
                            gap: "20px"
                        }}
                    >
                        {/* SENIOR PASTOR */}
                        <div
                            style={{
                                background:
                                    "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)",
                                color: "#fff",
                                borderRadius: "50px",
                                padding: "12px 35px 12px 12px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "15px",
                                boxShadow:
                                    "0 10px 25px rgba(0,0,0,0.15)",
                                border: "2px solid #b71c1c"
                            }}
                        >
                            <img
                                src="/leader-rev.png"
                                alt="Rev. John N. Mwangi"
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "2px solid #fff"
                                }}
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://via.placeholder.com/65?text=Senior+Pastor";
                                }}
                            />

                            <div style={{ textAlign: "left" }}>
                                <div
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Rev. John N. Mwangi
                                </div>

                                <div
                                    style={{
                                        fontSize: "11px",
                                        color: "#fca5a5",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.5px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Senior Pastor
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                width: "2px",
                                height: "25px",
                                background: "#b71c1c"
                            }}
                        ></div>

                        {/* PASTORAL TEAM */}
                        <div
                            style={{
                                width: "100%",
                                background: "#fafafa",
                                borderRadius: "14px",
                                padding: "20px",
                                border: "1px solid #e2e8f0"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                    color: "#b71c1c",
                                    textTransform: "uppercase",
                                    marginBottom: "15px",
                                    letterSpacing: "0.5px"
                                }}
                            >
                                Pastoral Team
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                    flexWrap: "wrap"
                                }}
                            >
                                {[
                                    {
                                        name: "Pastor Josephine K",
                                        role: "Assistant Pastor",
                                        img: "/leader-josephine.png",
                                        fallback: "Asst. Pastor"
                                    },
                                    {
                                        name: "Pastor Meshack",
                                        role: "Youth Pastor",
                                        img: "/leader-meshack.png",
                                        fallback: "Youth Pastor"
                                    },
                                    {
                                        name: "Rev. Kalulu",
                                        role: "Pastor",
                                        img: "/leader-kalulu.png",
                                        fallback: "Pastor"
                                    }
                                ].map((pastor, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: "#fff",
                                            border: "1px solid #cbd5e1",
                                            borderRadius: "12px",
                                            padding: "16px",
                                            width: "230px",
                                            boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.03)",
                                            textAlign: "center"
                                        }}
                                    >
                                        <img
                                            src={pastor.img}
                                            alt={pastor.name}
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                margin: "0 auto 8px auto",
                                                border: "2px solid #b71c1c"
                                            }}
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    `https://via.placeholder.com/55?text=${pastor.fallback}`;
                                            }}
                                        />

                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                color: "#1a1a1a",
                                                marginBottom: "2px"
                                            }}
                                        >
                                            {pastor.name}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: "11px",
                                                color: "#b71c1c",
                                                textTransform: "uppercase",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {pastor.role}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            style={{
                                width: "2px",
                                height: "25px",
                                background: "#b71c1c"
                            }}
                        ></div>

                        {/* OFFICIAL STAFF */}
                        <div
                            style={{
                                width: "100%",
                                background: "#fff",
                                borderRadius: "14px",
                                padding: "20px",
                                border: "1px solid #e2e8f0"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                    color: "#1a1a1a",
                                    textTransform: "uppercase",
                                    marginBottom: "15px",
                                    letterSpacing: "0.5px"
                                }}
                            >
                                Official Staffs & Executive Committee
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit, minmax(200px, 1fr))",
                                    gap: "15px"
                                }}
                            >
                                {[
                                    {
                                        name: "Mr. Peter Maina",
                                        role: "Church Administrator",
                                        img: "/leader-admin.png"
                                    },
                                    {
                                        name: "Mr. Samuel Njoroge",
                                        role: "Assistant Administrator",
                                        img: "/leader-admin-asst.png"
                                    },
                                    {
                                        name: "Mrs. Grace Achieng",
                                        role: "Church Secretary",
                                        img: "/leader-secretary.png"
                                    },
                                    {
                                        name: "Mr. James Ochieng",
                                        role: "Church Treasurer",
                                        img: "/leader-treasurer.png"
                                    },
                                    {
                                        name: "Mr. David Odhiambo",
                                        role: "Assistant Treasurer",
                                        img: "/leader-treasurer-asst.png"
                                    },
                                    {
                                        name: "Mr. John Karimi",
                                        role: "Church Chairman",
                                        img: "/leader-chairman.png"
                                    },
                                    {
                                        name: "Mrs. Esther Wanjiku",
                                        role: "Chairlady",
                                        img: "/leader-chairlady.png"
                                    }
                                ].map((staff, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: "#f8f9fa",
                                            border: "1px solid #e2e8f0",
                                            borderRadius: "10px",
                                            padding: "14px",
                                            textAlign: "center"
                                        }}
                                    >
                                        <img
                                            src={staff.img}
                                            alt={staff.name}
                                            style={{
                                                width: "45px",
                                                height: "45px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                margin: "0 auto 6px auto",
                                                border: "1px solid #4a5568"
                                            }}
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://via.placeholder.com/45?text=Staff";
                                            }}
                                        />

                                        <div
                                            style={{
                                                fontSize: "13px",
                                                fontWeight: "bold",
                                                color: "#1a1a1a",
                                                marginBottom: "2px"
                                            }}
                                        >
                                            {staff.name}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: "10px",
                                                color: "#718096",
                                                textTransform: "uppercase",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {staff.role}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            style={{
                                width: "2px",
                                height: "25px",
                                background: "#b71c1c"
                            }}
                        ></div>

                        {/* DEACONS & USHERS */}
                        <div
                            style={{
                                width: "100%",
                                background: "#fafafa",
                                borderRadius: "14px",
                                padding: "20px",
                                border: "1px solid #e2e8f0"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "13px",
                                    fontWeight: "bold",
                                    color: "#b71c1c",
                                    textTransform: "uppercase",
                                    marginBottom: "15px",
                                    letterSpacing: "0.5px"
                                }}
                            >
                                Deacons & Ushers
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                    flexWrap: "wrap"
                                }}
                            >
                                {[
                                    {
                                        name: "Mr. Daniel Kiprop",
                                        role: "Head Deacon",
                                        img: "/leader-deacons.png"
                                    },
                                    {
                                        name: "Mrs. Ruth Njeri",
                                        role: "Head Usher",
                                        img: "/leader-ushers.png"
                                    }
                                ].map((du, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: "#fff",
                                            border: "1px solid #cbd5e1",
                                            borderRadius: "12px",
                                            padding: "16px",
                                            width: "220px",
                                            boxShadow:
                                                "0 4px 12px rgba(0,0,0,0.03)",
                                            textAlign: "center"
                                        }}
                                    >
                                        <img
                                            src={du.img}
                                            alt={du.name}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                margin: "0 auto 8px auto",
                                                border: "2px solid #1a1a1a"
                                            }}
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://via.placeholder.com/50?text=Leader";
                                            }}
                                        />

                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                color: "#1a1a1a",
                                                marginBottom: "2px"
                                            }}
                                        >
                                            {du.name}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: "11px",
                                                color: "#1a1a1a",
                                                textTransform: "uppercase",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {du.role}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <WhatsAppFloat />
        <Footer />
    </div>
);

}