import classNames from "classnames/bind";
import styles from "./Player.module.scss"
import PlayerControll from "./PlayerControl";
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";

const cx = classNames.bind(styles)

function Player() {

    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("player")}>
                <PlayerLeft />
                <PlayerControll />
                <PlayerRight />
            </div>
        </div>
    );
}

export default Player;