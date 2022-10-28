import className from "classnames/bind"
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import SideBar from "../components/SideBar/SideBar";
import styles from "./DefaultLayout.module.scss"

const cx = className.bind(styles)

function DefaultLayout({children}) {

    const {bgImage} = useSelector(state => state.theme.currentTheme)
    
    return ( 
        <div className={cx("wrapper")} style={{backgroundImage: `url(${bgImage})`}}>
            <SideBar />
            <div className={cx("container")}>
                <Header />
                <div className={cx("content")} >
                    {children}  
                </div>
            </div>
            <Player />
        </div>
    );
}

export default DefaultLayout;