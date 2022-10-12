import className from "classnames/bind"
import Player from "../components/Player/Player";
import SideBar from "../components/SideBar/SideBar";
import styles from "./DefaultLayout.module.scss"

const cx = className.bind(styles)

function DefaultLayout({children}) {
    return ( 
        <div className={cx("wrapper")} >
            <SideBar />
            <div className={cx("content")}>{children}</div>
            <Player />
        </div>
    );
}

export default DefaultLayout;