import { Link } from "react-router-dom";
import products from "../data/products.json";

const AmazonProd = () => {
  return (
    <div className="p-4">
  
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md p-5 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl"
          >
         
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />

          
            <h2 className="text-lg font-bold mt-3 text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-xs text-yellow-500 mt-1">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
            <p className="text-green-600 font-bold text-xl mt-2">${product.price}</p>
            <Link to={`/products/${product.id}`}>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-3 transition duration-300">
              View Details
            </button>
            </Link>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default AmazonProd;
