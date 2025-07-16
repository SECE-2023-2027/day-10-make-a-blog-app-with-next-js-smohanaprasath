'use client';

import Navbar from "../../components/Navbar";

export default function AboutPage() {
    return (
        <div style={{
            backgroundImage: 'url("/background.jpg")',
            backgroundSize: 'cover',
            minHeight: '100vh',
            color: 'white',
        }}>
            <Navbar />

            {/* Centered content container */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '60px'
            }}>
                <div style={{
                    padding: '40px',
                    backgroundColor: '#000000b0',
                    borderRadius: '12px',
                    maxWidth: '600px',
                    textAlign: 'left'
                }}>
                    <h1 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>About This App</h1>
                    <ul style={{ fontSize: '18px', lineHeight: '2' }}>
                        <li>🧠 <b>App Name:</b>Thought Space</li>
                        <li>👨‍💻 <b>Developer:</b>Mohanaprasath S</li>
                        <li>🎓 <b>Class:</b> III EEE </li>
                        <li>📧 <b>Contact:</b> mohanaprasaths@gmail.com</li>
                        <li>🏫 <b>College:</b> Sri Eshwar College of Engineering</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
