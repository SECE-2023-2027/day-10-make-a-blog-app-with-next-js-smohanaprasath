'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function HomePage() {
    const [blogs, setBlogs] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem("blogs");
        if (stored) {
            setBlogs(JSON.parse(stored));
        }
    }, []);

    return (
        <div style={{ backgroundImage: 'url("/background.jpg")', backgroundSize: 'cover', minHeight: '100vh', color: 'black' }}>
            <Navbar />
            <div style={{ padding: '60px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Welcome to Thought Space</h1>
                <p style={{ fontSize: '20px' }}>Share your thoughts with the world in style ✨</p>

                <button onClick={() => router.push('/blog')} style={{ marginTop: '30px', padding: '12px 30px', fontSize: '16px', backgroundColor: '#6a11cb', color: 'white', borderRadius: '10px' }}>
                    ➕ Add Blog
                </button>

                <div style={{ marginTop: '50px' }}>
                    {blogs.length === 0 ? (
                        <p style={{ fontSize: '18px', fontStyle: 'italic' }}>📭 No Blog's Found</p>
                    ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {blogs.map((blog, index) => (
                                <div key={index} style={{ backgroundColor: '#ffffffcc', padding: '20px', margin: '15px', width: '300px', borderRadius: '12px' }}>
                                    <img src={blog.image} alt="Blog" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
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
