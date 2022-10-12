import Home from "../pages/Home/Home";
import Follow from "../pages/Follow/Follow";
import MyMusic from "../pages/MyMusic/MyMusic";
import Radio from "../pages/Radio/Radio";
import ZingChart from "../pages/ZingChart/ZingChart";

const publicRoutes = [
    {path: '/', component: <Home />},
    {path: '/follow', component: <Follow />},
    {path: '/my-music', component: <MyMusic />},
    {path: '/radio', component: <Radio />},
    {path: '/zing-chart', component: <ZingChart />},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}