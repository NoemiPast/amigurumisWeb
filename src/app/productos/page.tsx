"use client"
import Navbar from "../COMPONENTS/Navbar";
import { useState, useEffect } from 'react';
import Head from 'next/head';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulación de carga de datos
    const fetchProducts = () => {
      setIsLoading(true);
      setTimeout(() => {
        setProducts([
          {
            id: 1,
            name: 'Silla Minimal Ergo',
            description: 'Diseño ergonómico con materiales sostenibles',
            price: 299,
            category: 'muebles',
            image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            featured: true
          },
          {
            id: 2,
            name: 'Lámpara Aurora',
            description: 'Iluminación cálida ajustable con control táctil',
            price: 149,
            category: 'iluminacion',
            image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 3,
            name: 'Mesa Horizonte',
            description: 'Superficie de roble macizo con patas de acero',
            price: 599,
            category: 'muebles',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 4,
            name: 'Reloj Nocturno',
            description: 'Diseño silencioso con iluminación nocturna',
            price: 89,
            category: 'decoracion',
            image: 'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 5,
            name: 'Jarrón Egeo',
            description: 'Cerámica artesanal con acabado mate',
            price: 75,
            category: 'decoracion',
            image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 6,
            name: 'Estantería Flotante',
            description: 'Sistema modular de estantes invisibles',
            price: 199,
            category: 'muebles',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
          }
        ]);
        setIsLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
    <Navbar />
      <Head>
        <title>Colección Minimal | Productos de diseño</title>
        <meta name="description" content="Productos de diseño minimalista para tu hogar" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-50 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 animate-pulse"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900 mb-4 animate-fade-in">
                Productos <span className="font-medium"></span>
              </h1>
              <p className="max-w-xl mx-auto text-lg text-gray-600 mb-8 animate-fade-in-up delay-100">
                ¡Bienvenid@ a tu tienda favorita de materiales para amigurumis!
              </p>
            </div>
          </div>
        </div>

        {/* Product Gallery */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-64 rounded-lg"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Product Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.featured && (
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        Destacado
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-lg font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                  <button className="mt-4 w-full bg-black text-white py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver detalles
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No hay productos en esta categoría</h3>
              <p className="mt-2 text-sm text-gray-500">Prueba con otra categoría o vuelve más tarde</p>
            </div>
          )}
        </section>

        {/* Featured Banner */}
        <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-4">Suscríbete a nuestra newsletter</h2>
            <p className="text-gray-300 mb-6">Recibe un 10% de descuento en tu primera compra y novedades exclusivas</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 min-w-0 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-white text-gray-900 px-6 py-3 rounded-r-md font-medium hover:bg-gray-100 transition-colors">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}