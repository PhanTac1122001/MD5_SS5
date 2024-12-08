import { Spin } from "antd";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = React.lazy(() => import("@/pages/login"));
const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const CategoryManager = React.lazy(() => import("@/pages/categoryManager"));
const ProductManager = React.lazy(() => import("@/pages/productManager"));

const AdminLayout = React.lazy(() => import("@/layouts/AdminLayout"));

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const LazyLoad = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      }
    >
      {children}
    </Suspense>
  );
};

const routers = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LazyLoad>
        <LoginPage />
      </LazyLoad>
    ),
  },
  {
    path: "/admin",
    element: (
        <AdminLayout />
    ),
    children: [
      {
        index:true,
        element: (
          <LazyLoad>
            <Dashboard />
          </LazyLoad>
        ),
      },
      {
        path: "product",
        element: (
          <LazyLoad>
            <ProductManager />
          </LazyLoad>
        ),
      },
      {
        path: "category",
        element: (
          <LazyLoad>
            <CategoryManager />
          </LazyLoad>
        ),
      },
    ],
  },
]);

export default routers;
