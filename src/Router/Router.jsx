import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import SingleProduct from "../Pages/Products/SingleProduct/SingleProduct";

const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>},
        {path: 'cetegory/:id', element: <Products></Products>},
        {path: 'product/:id', element: <SingleProduct></SingleProduct>},
    ]
}
])

export default router;