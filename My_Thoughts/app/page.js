'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function HomePage() {
    const [blogs, setBlogs] = useState([]); // Empty initially
    const router = useRouter();

    return (
        <div style={{
            backgroundImage: 'url("/background.jpg")',
            backgroundSize: 'cover',
            minHeight: '100vh',
            color: 'black',
        }}>
            <Navbar />

            <div style={{
                padding: '60px',
                textAlign: 'center',
            }}>
                <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Welcome to Thought Space</h1>
                <p style={{ fontSize: '20px' }}>
                    Share your thoughts with the world in style ✨
                </p>

                {/* Add Blog Button */}
                <button
                    style={{
                        marginTop: '30px',
                        padding: '12px 30px',
                        fontSize: '16px',
                        backgroundColor: '#6a11cb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s ease',
                    }}
                    onClick={() => router.push('/blog')}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#2575fc';
                        e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#6a11cb';
                        e.target.style.transform = 'scale(1)';
                    }}
                >
                    ➕ Add Blog
                </button>

                {/* Blog Display Section */}
                <div style={{ marginTop: '50px' }}>
                    {blogs.length === 0 ? (
                        <p style={{
                            fontSize: '18px',
                            fontStyle: 'italic',
                            color: '#444'
                        }}>
                            📭 No Blog's Found
                        </p>
                    ) : (
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}>
                            {blogs.map((blog, index) => (
                                <div key={index} style={{
                                    backgroundColor: '#ffffffcc',
                                    padding: '20px',
                                    margin: '15px',
                                    width: '300px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                    textAlign: 'left'
                                }}>
                                    <img src={blog.image} alt="Blog Image" style={{
                                        width: '100%',
                                        height: '160px',
                                        objectFit: 'cover',
                                        borderRadius: '8px'
                                    }} />
                                    <h3 style={{ margin: '10px 0' }}>{blog.title}</h3>
                                    <p style={{ fontSize: '14px' }}>{blog.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
