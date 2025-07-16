'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('blogs');
        if (saved) setBlogs(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, description, image };

        if (editingIndex !== null) {
            const updated = [...blogs];
            updated[editingIndex] = newBlog;
            setBlogs(updated);
            setEditingIndex(null);
        } else {
            setBlogs([...blogs, newBlog]);
        }

        setTitle('');
        setDescription('');
        setImage('');
    };

    const handleEdit = (index) => {
        const blog = blogs[index];
        setTitle(blog.title);
        setDescription(blog.description);
        setImage(blog.image);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updated = blogs.filter((_, i) => i !== index);
        setBlogs(updated);
    };

    return (
        <div style={{ backgroundImage: 'url("/background.jpg")', backgroundSize: 'cover', minHeight: '100vh', color: 'black' }}>
            <Navbar />
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
                    {editingIndex !== null ? "Edit Blog" : "Create a New Blog"}
                </h2>

                <form onSubmit={handleSubmit} style={{ margin: '0 auto', backgroundColor: '#ffffffd8', padding: '30px', borderRadius: '12px', maxWidth: '500px' }}>
                    <label>Title</label><br />
                    <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />

                    <label>Description</label><br />
                    <textarea rows="3" value={description} required onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />

                    <label>Image URL</label><br />
                    <input type="text" value={image} required onChange={(e) => setImage(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />

                    <button type="submit" style={{ backgroundColor: editingIndex !== null ? '#ff9800' : '#111827', color: 'white', padding: '10px 20px', borderRadius: '6px' }}>
                        {editingIndex !== null ? 'Update Blog' : 'Create Blog'}
                    </button>
                </form>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
                    {blogs.length === 0 ? (
                        <p style={{ fontStyle: 'italic' }}>📝 No Blog's Found</p>
                    ) : (
                        blogs.map((blog, index) => (
                            <div key={index} style={{ backgroundColor: '#ffffffcc', padding: '20px', margin: '10px', width: '280px', borderRadius: '10px' }}>
                                <img src={blog.image} alt="Blog" style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <button onClick={() => handleEdit(index)} style={{ marginRight: '10px', backgroundColor: '#2196f3', color: 'white' }}>Edit</button>
                                <button onClick={() => handleDelete(index)} style={{ backgroundColor: '#f44336', color: 'white' }}>Delete</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
