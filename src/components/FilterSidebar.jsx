import { motion } from 'framer-motion';
import { FiX, FiSearch } from 'react-icons/fi';
import { useProducts } from '../../contexts/ProductContext';

const categories = [
	{ value: 'all', label: 'All Categories' },
	{ value: 'men', label: 'Men' },
	{ value: 'women', label: 'Women' },
	{ value: 'unisex', label: 'Unisex' },
	{ value: 'kids', label: 'Kids' },
];

const sortOptions = [
	{ value: 'featured', label: 'Featured' },
	{ value: 'newest', label: 'Newest' },
	{ value: 'price-asc', label: 'Price: Low to High' },
	{ value: 'price-desc', label: 'Price: High to Low' },
];

const FilterSidebar = ({ isOpen, onClose }) => {
	const { filters, updateFilters, resetFilters } = useProducts();

	return (
		<>
			{/* Mobile Overlay */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/50 z-40 lg:hidden"
					onClick={onClose}
				/>
			)}

			{/* Sidebar */}
			<motion.div
				initial={{ x: -300 }}
				animate={{ x: isOpen ? 0 : -300 }}
				className={`fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 lg:w-full glass-dark p-6 z-50 overflow-y-auto ${
					isOpen ? 'block' : 'hidden lg:block'
				}`}
			>
				{/* Header */}
				<div className="flex items-center justify-between mb-6 lg:hidden">
					<h2 className="text-xl font-bold text-white">Filters</h2>
					<button onClick={onClose} className="p-2 hover:bg-white/10 rounded">
						<FiX size={24} className="text-white" />
					</button>
				</div>

				{/* Search */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
					<div className="relative">
						<input
							type="text"
							placeholder="Search products..."
							value={filters.search}
							onChange={(e) => updateFilters({ search: e.target.value })}
							className="input-field pl-10"
						/>
						<FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					</div>
				</div>

				{/* Category */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
					<div className="space-y-2">
						{categories.map((category) => (
							<button
								key={category.value}
								onClick={() => updateFilters({ category: category.value })}
								className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
									filters.category === category.value
										? 'bg-primary text-white'
										: 'text-gray-300 hover:bg-white/10'
								}`}
							>
								{category.label}
							</button>
						))}
					</div>
				</div>

				{/* Price Range */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
					<div className="flex items-center space-x-2">
						<input
							type="number"
							placeholder="Min"
							value={filters.minPrice}
							onChange={(e) => updateFilters({ minPrice: e.target.value })}
							className="input-field"
						/>
						<span className="text-gray-400">-</span>
						<input
							type="number"
							placeholder="Max"
							value={filters.maxPrice}
							onChange={(e) => updateFilters({ maxPrice: e.target.value })}
							className="input-field"
						/>
					</div>
				</div>

				{/* Sort */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
					<select
						value={filters.sort}
						onChange={(e) => updateFilters({ sort: e.target.value })}
						className="input-field"
					>
						{sortOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>

				{/* Reset Button */}
				<button
					onClick={resetFilters}
					className="w-full btn-secondary"
				>
					Reset Filters
				</button>
			</motion.div>
		</>
	);
};

export default FilterSidebar;