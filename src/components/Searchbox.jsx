const Searchbox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 bn"
        type="search"
        placeholder="Search models..."
        onChange={searchChange}
      />
    </div>
  );
};
export default Searchbox;
