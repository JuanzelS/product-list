function CategoryButton({ name, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(name)}
      style={{
        margin: '5px',
        padding: '8px 12px',
        backgroundColor: isActive ? '#333' : '#eee',
        color: isActive ? '#fff' : '#000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {name}
    </button>
  )
}

export default CategoryButton

