import classNames from "classnames/bind";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Tippy from '@tippyjs/react/headless'; 
import { useSelector, useDispatch } from 'react-redux'


import styles from "./Search.module.scss"
import SearchItem from "./SearchItem/SearchItem";
import { useEffect, useState } from "react";
import { clearListSong, getSongByName } from "../../features/search/searchSlice";
import useDebounce from "../../hooks/useDebounce"
import { CircularProgress } from "@mui/material";

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchvalue] = useState('')
    const [open, setOpen] = useState(false)
    const {listSongsName,loading} = useSelector(state => state.song)
    const {primayBg}= useSelector(state=> state.theme.currentBg)

    const debounced = useDebounce(searchValue,500)

    const dispatch = useDispatch()

    useEffect(()=> {
        if(!debounced.trim()){
            dispatch(clearListSong())
            return
        }
        else{
            dispatch(getSongByName(debounced))
            setOpen(true)
        }
    },[debounced,dispatch])
    return ( 
        <Tippy
            visible ={listSongsName.length > 0 && open}
            interactive
            placement="bottom"
            onClickOutside={()=> setOpen(false)}
            render={attrs => (
                <div className={cx("search-box")} tabIndex="-1" {...attrs} style={{backgroundColor: primayBg}}>
                    <span className={cx("search-heading")}>Gợi ý kết quả</span>
                    {listSongsName.map((item,index) => <SearchItem data={item} key={index}/>)}
                </div>
            )}
        >
            <div className={cx("search-wrapper")}>
                <div 
                    className={cx("search-icon")}
                >
                    <SearchIcon sx={{fontSize: "2.6rem"}}/>
                </div>
                <input 
                    value={searchValue}
                    onClick={()=> setOpen(true)}
                    onChange= {(e) => setSearchvalue(e.target.value)}
                    className={cx("search-input")}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,..."
                />
                {
                    !loading && !!searchValue &&(
                        <div 
                            className={cx("clear-icon")}
                            onClick= {() =>setSearchvalue('')}
                        >
                            <ClearIcon />
                        </div>
                    )
                }
                {
                    loading && (
                        <div 
                            className={cx("loading-icon")}
                        >
                            <CircularProgress color="inherit"/>
                        </div>
                    )
                }
            </div>
        </Tippy>
    );
}

export default Search;