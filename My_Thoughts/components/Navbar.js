'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 40px',
            backgroundColor: '#111827',
            color: 'white'
        }}>
            <h2 style={{ fontSize: '24px' }}>Thought Space</h2>
            <div>
                {['Home', 'About', 'Blog', 'Post'].map((item, index) => (
                    <Link
                        key={index}
                        href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                        style={{
                            marginLeft: '20px',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'color 0.3s',
                        }}
                        onMouseOver={(e) => e.target.style.color = '#38bdf8'}
                        onMouseOut={(e) => e.target.style.color = 'white'}
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
