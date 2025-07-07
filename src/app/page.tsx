// File: personal/src/app/page.tsx
//import Button from './components/Button';
//import Alert from './components/Alert';
//import Card from './components/Card';
//import ImageComponent from './components/Image';
//import NavbarEnvio from './components/NavbarEnvio';
import Navbar from './components/Navbar';
//import Table from './components/Table';
import Acordeon from './components/Acordeon';
import NavbarEnvio from './components/NavbarEnvio';
import Principal from './components/Principal';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <NavbarEnvio />
        <Navbar />
      <div className="max-w-6xl mx-auto space-y-8">
        <Acordeon />
        <Principal />

      </div>
    </div>
  );
}

//<Alert />
//<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>