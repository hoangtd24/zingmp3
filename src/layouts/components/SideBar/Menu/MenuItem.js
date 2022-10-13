import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)
function MenuItem({to, icon, name}) {
    return ( 
        <NavLink to = {to} className = {(nav) => cx("menu-item", {active: nav.isActive})}>
            <div className={cx("icon")}>{icon}</div>
            <p className={cx("name")}>{name}</p>
        </NavLink>
    );
}

export default MenuItem;