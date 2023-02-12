import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import TopUp from "../Pages/TopUp/TopUp";
import TransferPoint from "../Pages/TransferPoint/TransferPoint";
import Reward from "../Pages/Reward/Reward";
import Notification from "../Pages/Notification/Notification";
import News from "../Pages/News/News";
import PageNotFound from "../Pages/PageNotFound";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/user", component: User },
  { path: "/topup", component: TopUp },
  { path: "/transferpoint", component: TransferPoint },
  { path: "/reward", component: Reward },
  { path: "/notification", component: Notification },
  { path: "/news", component: News },
  { path: "*", component: PageNotFound },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
