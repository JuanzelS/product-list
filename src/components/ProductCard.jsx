function ProductCard({ product }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '12px',
      margin: '10px',
      width: '250px'
    }}>
      <h3>{product.name}</h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <p>{product.description}</p>
      <p><strong>Units:</strong> {product.units}</p>
    </div>
  )
}

export default ProductCard
