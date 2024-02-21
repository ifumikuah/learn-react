function List(prop) {
  prop.items.sort((a, b) => a.name.localeCompare(b.name));
  // const filterItems = prop.items.filter(i => i.value > 100)

  const listItems = prop.items.map((item, i) => <li key={i+1}>{item.name}:&nbsp;{item.value}</li>)
  if (prop.items.length > 0) {
    return (<>
              <h2>{prop.category}</h2>
              <ul>{listItems}</ul>
            </>)
  }
  return null;
};

List.defaultProps = {
  items: [],
  category: "Category"
}

export default List;