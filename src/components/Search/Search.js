import classNames from "classnames/bind";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Tippy from '@tippyjs/react/headless'; 


import styles from "./Search.module.scss"
import SearchItem from "./SearchItem/SearchItem";

const cx = classNames.bind(styles)

function Search() {
    return ( 
        <Tippy
            visible
            interactive
            render={attrs => (
                <div className={cx("search-box")} tabIndex="-1" {...attrs}>
                    <span className={cx("search-heading")}>Gợi ý kết quả</span>
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
            )}
        >
            <div className={cx("search-wrapper")}>
                <div className={cx("search-icon")}>
                    <SearchIcon sx={{fontSize: "2.6rem"}}/>
                </div>
                <input 
                    className={cx("search-input")}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,..."
                />
                <div className={cx("clear-icon")}>
                    <ClearIcon />
                </div>
            </div>
        </Tippy>
    );
}

export default Search;