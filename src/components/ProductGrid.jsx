import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import { useProducts } from '../../contexts/ProductContext';

const ProductGrid = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-12 rounded-xl inline-block"
        >
          <p className="text-2xl text-gray-400 mb-4">No products found</p>
          <p className="text-gray-500">Try adjusting your filters</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;