import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mercado de Angola
          </h1>
          <p className="text-xl mb-8">O mercado certo para negociar. 100% GRÁTIS!</p>
          <input type="text" placeholder="Procurar..." className="w-full max-w-md px-4 py-3 rounded-lg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🚗', name: 'Veículos' },
            { icon: '🏠', name: 'Imóveis' },
            { icon: '📱', name: 'Eletrônicos' },
            { icon: '🛋️', name: 'Móveis' },
            { icon: '👕', name: 'Moda' },
            { icon: '🛠️', name: 'Serviços' },
            { icon: '💼', name: 'Empregos' },
            { icon: '📦', name: 'Outros' },
          ].map((cat) => (
            <div key={cat.name} className="bg-white p-4 rounded-lg shadow">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="font-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
