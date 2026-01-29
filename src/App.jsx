import { useState } from 'react'
import products, { uniqueCategories } from './data'
import CategoryButton from './components/CategoryButton'
import ProductCard from './components/ProductCard'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory)

  // ✅ PART 4 — Dynamic Totals
  const totalUnits = filteredProducts.reduce((sum, p) => sum + p.units, 0)

  const totalPrice = filteredProducts.reduce(
    (sum, p) => sum + p.units * p.price,
    0
  )

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛍 Product List</h1>

      {/* Category Buttons */}
      <div>
        <CategoryButton
          name="All"
          isActive={selectedCategory === 'All'}
          onClick={setSelectedCategory}
        />
        {uniqueCategories.map(category => (
          <CategoryButton
            key={category}
            name={category}
            isActive={selectedCategory === category}
            onClick={setSelectedCategory}
          />
        ))}
      </div>

      {/* Product Count */}
      <h2>{filteredProducts.length} Products Shown</h2>

      {/* ✅ Dynamic Totals Display */}
      <p><strong>Total Units:</strong> {totalUnits}</p>
      <p><strong>Total Inventory Value:</strong> ${totalPrice.toFixed(2)}</p>

      {/* Product Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
  