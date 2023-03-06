const useSearch = (searchText, allRestaurants) => {
  allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
};

export default useSearch;
