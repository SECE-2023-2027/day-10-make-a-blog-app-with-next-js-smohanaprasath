export const metadata = {
    title: 'Thought Space',
    description: 'Simple Blogger App',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ margin: 0, fontFamily: 'Arial' }}>
                {children}
            </body>
        </html>
    );
}
