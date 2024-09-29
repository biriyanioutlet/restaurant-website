import React, { useState } from 'react';
import restroData from '../data/restro.json';
import Container from './Container/Container';

// import vegLogo from '../assets/vegLogo.png'; // Update the path to your veg logo

interface MenuItem {
  name: string;
  price: string;
  type?: string | undefined;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

interface MenuProps {
  backgroundColor?: string; // Accept background color as a prop
}

const Menu: React.FC<MenuProps> = ({ backgroundColor = '#ffffff' }) => {
  const [filter, setFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredMenu = restroData.menu.map((category: MenuCategory) => ({
    ...category,
    items: category.items.filter((item) => {
      if (filter === 'all') return true;
      return item.type === filter || item.type === undefined; // Adjust filter for optional type
    }),
  }));

  return (
    <div id="menu" className="p-4 md:p-8 lg:p-12" style={{ backgroundColor }}>
      <Container>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-6">
          Our Menu
        </h1>
        <div className="mb-4 mt-4 flex ">
          <button
            onClick={() => setFilter('veg')}
            className={`px-4 py-2 border rounded ${filter === 'veg' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}
          >
            Veg
          </button>
          <button
            onClick={() => setFilter('non-veg')}
            className={`px-4 py-2 border rounded ${filter === 'non-veg' ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}
          >
            Non-Veg
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 border rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          >
            All
          </button>
        </div>
        {filteredMenu.map((category: MenuCategory, index: number) => (
          <div key={index} className="menu-category mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              {category.category}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item: MenuItem, itemIndex: number) => (
                <li
                  key={itemIndex}
                  className="menu-item flex justify-between items-center text-sm md:text-base lg:text-lg p-2 transition-colors duration-200 hover:bg-gray-200"
                >
                  <span className="flex items-center">
                    {/* {item.type === 'veg' && filter === 'all' && (
                    <img src={vegLogo} alt="Veg" className="w-4 h-4 mr-2" />
                  )} */}
                    {item.name}
                  </span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Menu;
