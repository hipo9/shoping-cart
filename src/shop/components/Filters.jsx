import { useId } from 'react';
import { useFilterContext } from '../context/filterContext/FiltersContext';
import { Range } from '../../ui/components/Range';
import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/scss/styles.scss';

export const Filters = () => {
  const { filters, setMinPrice, setCategory } = useFilterContext();
  const { minPriceFilterId } = useId();

  return (
    <section className='filters container'>
      <div className='filters__container-range '>
        <label className='filters__label' htmlFor={minPriceFilterId}>
          Min. Price
        </label>
        <Range onChange={(value) => setMinPrice(value)} min={0} max={1000} />
        <span className='filters__price-min'>${filters.minPrice}</span>
      </div>
      <div>
        <DropdownList
          defaultValue='All'
          data={['All', 'Electronics', "Women's clothing", "Men's clothing"]}
          onChange={(value) => setCategory(value.toLowerCase())}
        />
      </div>
    </section>
  );
};
