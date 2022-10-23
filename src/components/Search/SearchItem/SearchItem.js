import classNames from "classnames/bind";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import styles from "./SearchItem.module.scss"

const cx = classNames.bind(styles)
function SearchItem({data}) {
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("wrapper-img")}>
                <img src={data.thumbnailM} alt=""/>
                <div className={cx("btn-start")}>
                    <PlayArrowIcon sx={{fontSize: '20px'}}/>
                </div>
            </div>
            <div className={cx("wrapper-info")}>
                <p className={cx("song-name")}>{data.title}</p>
                <p className={cx("singer-name")}>{data.artistsNames}</p>
            </div>
        </div>
    );
}

export default SearchItem;