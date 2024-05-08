import { ColorRing } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height='80'
      width='80'
      ariaLabel='color-ring-loading'
      wrapperStyle={{}}
      wrapperClass='color-ring-wrapper'
      colors={['#0DCAF0', '#0DCAF0', '#0DCAF0', '#0DCAF0', '#0DCAF0']}
    />
  );
};
