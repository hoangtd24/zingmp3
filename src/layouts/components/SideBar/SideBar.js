import classNames from "classnames/bind";
import images from "../../../assets/images";
import styles from "./SideBar.module.scss"

const cx = classNames.bind(styles)

function SideBar() {
    return ( 
        <aside className={cx("wrapper")}>
            <div className={cx("logo")}>
                <img src={images.logo} alt="logo-zingmp3" />
            </div>
        </aside>
    );
}

export default SideBar;