function useSearchResult(searchText, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

export default useSearchResult;
