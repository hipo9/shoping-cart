import { Spinner } from '../../ui/components/Spinner';
import { AuthLayout } from '../layout/AuthLayout';

export const CheckingAuth = () => {
  return (
    <AuthLayout>
      <Spinner />
    </AuthLayout>
  );
};
