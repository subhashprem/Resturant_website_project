import { useState } from 'react';
import { dishes } from '../assets/assets';
import DishCard from '../components/DishCard';
import AnimatedPage from '../components/AnimatedPage';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Drinks'];
  
  const filteredDishes = activeCategory === 'All' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <AnimatedPage>
    <div className="py-12 bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">Our Menu</h1>
        
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-amber-800 hover:bg-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}