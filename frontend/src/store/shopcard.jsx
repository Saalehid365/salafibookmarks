// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../shop-context";

// const Shopcard = (props) => {
//   const product = props.product;
//   const cart = useContext(ShopContext);
//   const productQuantity = cart.getProductQuantity(product.id);

//   console.log(cart.items);
//   return (
//     <div className=" rounded-md ">
//       <div className="flex flex-col ">
//         <div class="w-full bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-00 dark:border-gray-100">
//           <Link to={`/store/${product.id}`}>
//             <img
//               class="p-8 rounded-lg hover:transform hover:scale-150"
//               src={product.image}
//               alt="product image"
//             />
//           </Link>
//           <div class="px-5 pb-5">
//             <Link to="productpage h-24 ">
//               <h5 class="text-base font-semibold tracking-tight text-gray-500 text-start text-ellipsis whitespace-nowrap overflow-hidden ">
//                 {product.Quote}
//               </h5>
//               <h5 class="text-xl font-semibold tracking-tight text-gray-500 text-start text-ellipsis whitespace-nowrap overflow-hidden ">
//                 Bookmark
//               </h5>
//               <div class="text-sm font-semibold tracking-tight text-gray-500 text-start text-ellipsis whitespace-nowrap overflow-hidden ">
//                 {product.Color}
//               </div>
//             </Link>
//             <div class="flex items-center mt-2.5 mb-5">
//               <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-yellow-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>First star</title>
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//               </svg>
//               <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-yellow-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Second star</title>
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//               </svg>
//               <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-yellow-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Third star</title>
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//               </svg>
//               <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-yellow-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Fourth star</title>
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//               </svg>
//               <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-yellow-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Fifth star</title>
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//               </svg>
//               <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                 5.0
//               </span>
//             </div>
//             <div class="flex flex-col items-start justify-between">
//               <span class="text-1xl font-bold text-gray-500 mb-2">
//                 £{product.Price}
//               </span>

//               {productQuantity > 0 ? (
//                 <div className="flex justify-evenly  ">
//                   <h3 className="font-bold text-gray-500">
//                     In Cart: {productQuantity}
//                   </h3>
//                   <div>
//                     <div className="w-24 flex justify-evenly">
//                       <button
//                         className="h-6 w-6 bg-blue-600 rounded-sm text-white hover:bg-blue-400"
//                         onClick={() => cart.removeOneFromCart(product.id)}
//                       >
//                         -
//                       </button>
//                       <button
//                         className="h-6 w-6 bg-blue-600 rounded-sm text-white hover:bg-blue-400"
//                         onClick={() => cart.addOneToCart(product.id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                     <div className="py-4 pl-4">
//                       <button
//                         className="bg-red-500 w-28 rounded-md text-xs h-8 text-white hove:bg-red-300"
//                         onClick={() => cart.deleteFromCart(product.id)}
//                       >
//                         Remove from cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="">
//                   <button
//                     className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center "
//                     onClick={() => cart.addOneToCart(product.id)}
//                   >
//                     add to cart
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shopcard;
