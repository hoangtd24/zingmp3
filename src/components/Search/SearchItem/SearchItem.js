import classNames from "classnames/bind";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import styles from "./SearchItem.module.scss"

const cx = classNames.bind(styles)
function SearchItem() {
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("wrapper-img")}>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/covers/a/f/af1166b25cf77fb307716eda9cc172d1_1477998573.jpg" alt=""/>
                <div className={cx("btn-start")}>
                    <PlayArrowIcon sx={{fontSize: '20px'}}/>
                </div>
            </div>
            <div className={cx("wrapper-info")}>
                <p className={cx("song-name")}>Cơn mưa cuối</p>
                <p className={cx("singer-name")}>JustaTee, Binz</p>
            </div>
        </div>
    );
}

export default SearchItem;