//import useContext
import React, { useContext } from 'react';

//import prduct Context
import { ProductContext } from '../contexts/ProductContext';

//import components
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  //Get products from product context
  const { products } = useContext(ProductContext);
  //console.log(products);

  //get only mens and women clothing category
  const filteredProducts =  products.filter((item) => { 
    return (
      item.category === "electronics" ||  "jewelery" || "men's clothing" || item.category === "women's clothing"
      );
  });

  console.log(filteredProducts);
  return (
  <div>
    <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0' >
          {filteredProducts.map((product) => {
            //  <Product product={product} key={product.id} />;
            return (
              <Product product={product} key={product.id} />
            //<div className='w-full h-[300px] bg-pink-200' key={product.id}>{product.title}</div>
            );
            
          })}
        </div>
      </div>
    </section>
  </div>
  );

};

export default Home;
