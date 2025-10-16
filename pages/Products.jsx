import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import ProductGrid from '../src/components/ProductGrid';
import FilterSidebar from '../src/components/FilterSidebar';

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Collection</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our premium T-shirt designs
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 glass px-6 py-3 rounded-lg"
          >
            <FiFilter />
            <span>Filters</span>
          </motion.button>
        </div>

        {/* Content */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar isOpen={true} />
          </div>

          {/* Mobile Sidebar */}
          <FilterSidebar 
            isOpen={isFilterOpen} 
            onClose={() => setIsFilterOpen(false)} 
          />

          {/* Products */}
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;