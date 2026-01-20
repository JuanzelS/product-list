import products from "./data.json";

// 1.1 Extract categories
export const categories = products.map(p => p.category);

// 1.2 Unique categories
export const uniqueCategories = [...new Set(categories)];

// 1.3 Count products per category (object)
export const categoryCounts = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

// 1.4 Category list with name + count
export const categoryList = Object.entries(categoryCounts).map(
  ([name, count]) => ({ name, count })
);

// Stretch 1: formatted price list
export const priceList = products.map(p => ({
  name: p.name,
  price: `$${p.price.toFixed(2)}`
}));

// Stretch 2: expensive products
export const expensiveProducts = products.filter(p => p.price > 50);

// Stretch 3: total inventory value
export const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.units,
  0
);

// Stretch 4: total price per category
export const categoryInventoryTotals = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + p.price * p.units;
  return acc;
}, {});

export default products;
