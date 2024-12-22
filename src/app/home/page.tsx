// src/app/home/page.tsx
export default async function HomePage() {
  await new Promise ((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1>Inventura na jedno kliknutí</h1>
      <p>This is the main content of the homepage.</p>
    </div>
  );
}
