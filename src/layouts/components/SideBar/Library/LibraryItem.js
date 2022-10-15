import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Library.module.scss"

const cx = classNames.bind(styles)

function LibraryItem({to, icon, name}) {
    return ( 
        <Link to = {to} className = {cx("library-item")}>
            <div className={cx("icon")}>{icon}</div>
            <p className={cx("name")}>{name}</p>
        </Link>
    );
}

export default LibraryItem;