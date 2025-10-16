import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, getCartTotal, getCartCount, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 glass-dark z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <FiShoppingBag size={24} className="text-primary" />
                <h2 className="text-xl font-bold text-white">
                  Cart ({getCartCount()})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <FiX size={24} className="text-white" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-4"
                  >
                    <FiShoppingBag size={40} className="text-gray-500" />
                  </motion.div>
                  <p className="text-gray-400 text-center mb-2">Your cart is empty</p>
                  <p className="text-gray-500 text-sm text-center mb-6">
                    Add some products to get started
                  </p>
                  <Link to="/products" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Start Shopping
                    </motion.button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={`${item._id}-${item.size}-${item.color}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <CartItem item={item} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-white/10 p-6 space-y-4">
                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center space-x-2 w-full text-red-400 hover:bg-red-500/10 px-4 py-2 rounded-lg transition-colors"
                >
                  <FiTrash2 size={18} />
                  <span>Clear Cart</span>
                </button>

                {/* Total */}
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span className="text-gray-300">Total:</span>
                  <span className="gradient-text">${getCartTotal().toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <Link to="/checkout" onClick={onClose}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;