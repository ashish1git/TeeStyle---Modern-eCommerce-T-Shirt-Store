import { motion } from 'framer-motion';
import { FiShield, FiTruck, FiRefreshCw, FiAward } from 'react-icons/fi';

const badges = [
  {
    icon: FiShield,
    title: 'Secure Payment',
    description: '100% secure transactions',
  },
  {
    icon: FiTruck,
    title: 'Free Shipping',
    description: 'On orders over $50',
  },
  {
    icon: FiRefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: FiAward,
    title: 'Premium Quality',
    description: 'Certified materials',
  },
];

const TrustBadges = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4"
              >
                <badge.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{badge.title}</h3>
              <p className="text-gray-400 text-sm">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;