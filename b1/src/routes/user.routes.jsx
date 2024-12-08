import Bai1 from "../pages/Bai1";
import Bai10 from "../pages/Bai10";
import Bai10_2 from "../pages/Bai10_2";
import Bai10_3 from "../pages/Bai10_3";
import Account from "../pages/bai11/Account";
import Login from "../pages/bai11/Login";
import PrivateRouter from "../pages/bai11/PrivateRouter";
import Bai2 from "../pages/Bai2";
import Bai3 from "../pages/Bai3";
import Bai4 from "../pages/Bai4";
import Bai5 from "../pages/Bai5";
import Bai6 from "../pages/Bai6";

const userRouters = [
  {
    path: "/user",
    element: <Bai6 />,
    children: [
      {
        path: "home",
        element: <Bai1 />,
      },
      {
        path: "contact",
        element: <Bai2 />,
      },

      {
        path: "create",
        element: <Bai4 />,
      },
      {
        path: "*",
        element: <Bai5 />,
      },
      {
        path: "list",
        element: <Bai10_3 />,
        children: [
          {
            path: "",
            element: <Bai10 />,
          },
          {
            path: ":userId/:email/:username/:address",
            element: <Bai10_2 />,
          },
        ],
      },
    ],
  },
];
export default userRouters;
