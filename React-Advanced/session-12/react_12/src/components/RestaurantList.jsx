function RestaurantList({ restaurants }) {
  return (
    <>
      <h2>Restaurants</h2>

      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>

          <p>{restaurant.cuisine}</p>

          <hr />
        </div>
      ))}
    </>
  );
}

export default RestaurantList;