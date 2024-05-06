// //function ProductDetails({ addToCart }) {
//     const { id } = useParams();
//     const product = products.find(item => item.id === parseInt(id));
  
//     return (
//       <div>
//         <h2>{product.title}</h2>
//         <img src={require(`../../public/images/${product.image}`).default} alt={product.title} />
//         <p>Description: {product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button onClick={() => addToCart(product)}>Add to Cart</button>
//       </div>
//     );
//   }
  
//   export default ProductDetails;