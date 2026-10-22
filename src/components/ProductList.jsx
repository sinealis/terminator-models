import Product from "../components/Product.jsx";

const ProductList = ({ items }) => {
  const productComponents = items.map((item) => {
    return (
      <Product
        key={item.id}
        id={item.id}
        image={item.image}
        username={item.username}
        zipcode={item.address.zipcode}
      />
    );
  });
  return <div>{productComponents}</div>;
};
export default ProductList;
