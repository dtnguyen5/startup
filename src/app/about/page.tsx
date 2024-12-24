// src/app/about/page.tsx
export default  async function AboutPage() {
    await new Promise ((resolve) => setTimeout(resolve, 100));
    return (
      
      <div>
        <h1>About Us</h1>
        <p>We are a team of developers building awesome web applications.</p>
      </div>
    );
  }
  