import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useState } from "react";
const ProductDetails = () => {
  const { id } = useParams(); 
  const product = products.find((p) => String (p.id )=== String (id)); 

  if (!product) {
    return <div className="text-center text-red-500 text-xl mt-10">Product not found</div>;
  }
  const [ratings, setRatings] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = Math.round(product.rating.rate); 
      return acc;
    }, {})
  );

 
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img
        src={product.image}
        alt={product.title}
        className=" h-48 w-auto object-cover rounded-md mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4 text-gray-800">{product.title}</h1>
      <p className="text-gray-600 text-lg mt-2">{product.description}</p>
      <div className="flex items-center text-lg">
  {renderStars(ratings[product.id])}
  <p className="text-gray-500 text-sm ml-2">({product.rating.count} reviews)</p>
</div>
      <p className="text-green-600 text-2xl font-bold mt-4">${product.price}</p>
 
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg mt-4 transition duration-300">
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetails;
