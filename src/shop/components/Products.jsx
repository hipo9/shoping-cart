import { Product } from './Product';
// import '../scss/products.scss';

export const Products = ({ products }) => {
  return (
    <>
      <div className='products'>
        <h1 className='products__title'>Welcome to my Store</h1>
        <li className='products__grid'>
          {products.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </li>
      </div>
    </>
  );
};
