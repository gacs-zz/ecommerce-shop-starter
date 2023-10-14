//5. import CreateContext, useState, useEffect
import React, { createContext, useEffect, useState } from 'react';

//6. create context
export const ProductContext = createContext();

//6. Change ProductContext to ProductProvider
//const ProductContext = () => {
 // return <div>ProductContext</div>;
//};

const ProductProvider = ({ children }) => {

  //7. products state 
const [products, setProducts] = useState([]);

//8. fect products
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    setProducts(data);
    //console.log(data);

};
fetchProducts();
},[]);

//6. Change ProductContext to ProductProvider
return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
//6. Change ProductContext to ProductProvider
export default ProductProvider;
