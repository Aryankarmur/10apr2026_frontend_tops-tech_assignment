function Filter({ filter, setFilter }) {
  return (
    <>
      <h2>Filter by Cuisine</h2>

      <input
        placeholder="Italian, Chinese..."
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
      />
    </>
  );
}

export default Filter;