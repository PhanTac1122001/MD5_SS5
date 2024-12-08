import Account from "../pages/bai11/Account";
import Login from "../pages/bai11/Login";
import PrivateRouter from "../pages/bai11/PrivateRouter";

const adminRouters = [
    
        
        {
            path: "/login",
            element: <Login />
            
          },
          {
            path: "/account",
            element: <PrivateRouter >
                <Account/>
            </PrivateRouter>
          },
        
  ];
  export default adminRouters;