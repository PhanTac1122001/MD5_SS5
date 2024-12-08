import { createBrowserRouter } from "react-router-dom";
import userRouters from "./user.routes";
import adminRouters from "./admin.routes";

const mergerRouter=[...userRouters,...adminRouters]

const router = createBrowserRouter(mergerRouter)

export default router;