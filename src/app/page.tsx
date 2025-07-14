import Carrusel from './COMPONENTS/Carrusel';
import Navbar from './COMPONENTS/Navbar';
import Regalo from './COMPONENTS/Regalo';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8">
        <Carrusel />
        <Regalo />
      </main>
    </div>
  );
}