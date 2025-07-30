import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function DishCard({ dish }) {
  return (
    <Link to={`/menu`}>
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
          <StarIcon className="h-3 w-3 mr-1" />
          {Math.floor(Math.random() * 2 + 4).toFixed(1)}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-bold text-amber-900">{dish.name}</h3>
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-sm font-semibold whitespace-nowrap">
            ${dish.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-sm text-amber-700 mb-4">{dish.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">
            {dish.category}
          </span>
          <motion.button 
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            whileTap={{ scale: 0.95 }}
          >
            Add to Order
          </motion.button>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
