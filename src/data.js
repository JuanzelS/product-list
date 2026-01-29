import products from './data.json'

/* 1.1 Extract all category names */
const categories = products.map(product => product.category)

/* 1.2 Get unique category names */
export const uniqueCategories = [...new Set(categories)]

/* 1.3 Count how many products per category */
export const categoryCounts = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1
  return acc
}, {})

/* 1.4 Array of objects with name + count */
export const categoryCountList = uniqueCategories.map(category => ({
  name: category,
  count: categoryCounts[category]
}))

/*  Stretch 1 — formatted price list */
export const priceList = products.map(
  product => `${product.name} - $${product.price.toFixed(2)}`
)

/* Stretch 2 — expensive products */
export const expensiveProducts = products.filter(product => product.price > 50)

/* Stretch 3 — total inventory value */
export const totalInventoryValue = products.reduce(
  (total, product) => total + product.price * product.units,
  0
)

/* Stretch 4 — total price per category */
export const categoryInventoryValue = products.reduce((acc, product) => {
  const totalValue = product.price * product.units
  acc[product.category] = (acc[product.category] || 0) + totalValue
  return acc
}, {})

export default products
