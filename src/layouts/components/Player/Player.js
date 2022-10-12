import classNames from "classnames/bind";
import styles from "./Player.module.scss"

const cx = classNames.bind(styles)

function Player() {
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("player")}>
                
            </div>
        </div>
    );
}

export default Player;