import data from '../../mock/data.json';
import { Product } from './Product';
// import '../scss/products.scss';

export const Products = () => {
  return (
    <>
      <div className='products'>
        <h1 className='products__title'>Welcome to my Store</h1>
        <li className='products__grid'>
          {data.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </li>
      </div>
    </>
  );
};
