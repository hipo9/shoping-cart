import { Header, Products } from '../components';
import { ShopLayout } from '../layout/ShopLayout';
import data from '../../mock/data.json';

import { useContext } from 'react';
import { FilterContext } from '../context/filterContext/FiltersContext';
import { Filters } from '../components/Filters';
import { useAuthContext } from '../../auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const { prodsFiltered } = useContext(FilterContext);
  const { user, logout, loading } = useAuthContext();
console.log(user);
  const products = prodsFiltered(data);
  const navigate = useNavigate();
  const handleLogout = async () => {

    await logout();
    navigate('/login');
  };
  console.log(loading);
  if (loading) return <h1>...Loading</h1>;
  return (
    <ShopLayout className='layout'>
      <h1>welcome {user.displayName || user?.email}</h1>
      <button onClick={handleLogout}>logout</button>
      <Header />
      <main className='products container'>
        <Filters />
        <Products products={products} />
      </main>
    </ShopLayout>
  );
};
