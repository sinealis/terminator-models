import "tachyons";

const Product = ({ id, username, zipcode }) => {
  return (
    <div className="tc bg-light-gray dib br3 pa3 ma2 grow">
      <img src={`https://robohash.org/${id}?size=150x150`} alt={username} />
      <div>
        <h3>{username}</h3>
        <p>SN:{zipcode}</p>
      </div>
    </div>
  );
};
export default Product;
