import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import {USER_ROLE} from "../utils/roles"

import { AdminRoutes } from './admin.routes';
import { SaleRoutes } from './sale.routes';
import { CostumerRoutes } from './costumer.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  function AccessRoute(){
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>;

      case USER_ROLE.SALE:
        return <SaleRoutes/>;

      case USER_ROLE.CUSTOMER:
        return <CostumerRoutes/>;
        
      default:
        return <CostumerRoutes/>;
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}