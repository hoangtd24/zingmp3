import classNames from "classnames/bind";
import styles from "./Player.module.scss"

const cx = classNames.bind(styles)

function PlayerRight() {

    return ( 
        <div className={cx("player-right")}>
           
        </div>
    );
}

export default PlayerRight;