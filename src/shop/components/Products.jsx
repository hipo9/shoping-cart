import { Spinner } from '../../ui/components/Spinner';
import { Product } from './Product';


// eslint-disable-next-line react/prop-types
export const Products = ({ products }) => {
  
  return (
    <>
      <main className='products container'>
        <h1 className='products__title'>Welcome to my Store</h1>
        <li className='products__grid'>
          {!products && (
            <div className='products__spinner'>
              <h2>Cargando Productos</h2>
              <Spinner />
            </div>
          )}
          {products?.map((item) => (
            <Product product={item} key={item.id} />
          ))}
        </li>
      </main>
    </>
  );
};
