import classNames from "classnames/bind";
import Search from "../../../components/Search/Search";
import styles from "./Header.module.scss"

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header className={cx("header")}>
            <Search />
            <div className={cx("action")}></div>
        </header>
    );
}

export default Header;