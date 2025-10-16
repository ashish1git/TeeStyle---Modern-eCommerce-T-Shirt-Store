import { motion } from 'framer-motion';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div
      layout
      className="glass p-4 rounded-lg"
    >
      <div className="flex space-x-4">
        {/* Image */}
        <div className="w-20 h-20 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
          <img
            src={item.images?.[0] || 'https://via.placeholder.com/80'}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold truncate mb-1">{item.name}</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
            <span>Size: {item.size}</span>
            <span>•</span>
            <span>Color: {item.color}</span>
          </div>
          
          {/* Quantity Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 bg-white/5 rounded-lg">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity - 1)}
                className="p-2 hover:bg-white/10 transition-colors rounded-l-lg"
              >
                <FiMinus size={14} className="text-white" />
              </motion.button>
              
              <span className="text-white font-semibold px-3">{item.quantity}</span>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => updateQuantity(item._id, item.size, item.color, item.quantity + 1)}
                className="p-2 hover:bg-white/10 transition-colors rounded-r-lg"
              >
                <FiPlus size={14} className="text-white" />
              </motion.button>
            </div>

            <span className="text-primary font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Remove Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => removeFromCart(item._id, item.size, item.color)}
          className="text-red-400 hover:text-red-300 transition-colors self-start"
        >
          <FiTrash2 size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CartItem;