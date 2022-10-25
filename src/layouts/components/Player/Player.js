import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import styles from "./Player.module.scss"

const cx = classNames.bind(styles)

function Player() {
    const {playerBg} = useSelector(state => state.theme.currentBg)

    return ( 
        <div className={cx("wrapper")} style={{backgroundColor: playerBg}}>
            <div className={cx("player")}>
                
            </div>
        </div>
    );
}

export default Player;