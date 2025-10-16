import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    if (product.sizes?.length && product.colors?.length) {
      addToCart(product, product.sizes[0], product.colors[0].name, 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      className="glass rounded-xl overflow-hidden card-hover group"
    >
      <Link to={`/products/${product._id}`}>
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.images[0] || 'https://via.placeholder.com/400'}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/0 to-dark/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleQuickAdd}
                className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg"
              >
                <FiShoppingCart size={18} />
                <span className="text-sm">Quick Add</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsLiked(!isLiked);
                }}
                className={`p-2 rounded-full ${
                  isLiked ? 'bg-red-500' : 'bg-white/10'
                } backdrop-blur-sm`}
              >
                <FiHeart
                  size={18}
                  className={isLiked ? 'fill-white text-white' : 'text-white'}
                />
              </motion.button>
            </div>
          </div>

          {/* Badges */}
          {product.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white text-xs px-3 py-1 rounded-full">
              Featured
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Sold Out
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${product._id}`}>
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-2 mb-3">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border-2 border-white/30"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-400">+{product.colors.length - 4}</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold gradient-text">
              ${product.price}
            </span>
          </div>
          
          {product.rating > 0 && (
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-300">
                {product.rating} ({product.numReviews})
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;