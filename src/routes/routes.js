import Home from "../pages/Home/Home";
import Follow from "../pages/Category/Category";
import MyMusic from "../pages/MyMusic/MyMusic";
import Radio from "../pages/Radio/Radio";
import ZingChart from "../pages/NewRelease/NewRelease";
import Top from "../pages/Top100/Top100";

const publicRoutes = [
    {path: '/home', component: <Home />},
    {path: '/category', component: <Follow />},
    {path: '/my-music', component: <MyMusic />},
    {path: '/radio', component: <Radio />},
    {path: '/new-release', component: <ZingChart />},
    {path: '/top100', component: <Top />},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}