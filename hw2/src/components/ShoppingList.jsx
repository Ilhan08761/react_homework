function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>List is empty</p>;
  }
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default ShoppingList;
