import classNames from "classnames/bind";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import styles from "./ThemeModal.module.scss"
import { useDispatch, useSelector} from "react-redux";
import { setTheme, previewTheme } from "../../features/theme/themeSlice";
import { Fragment } from "react";

const cx= classNames.bind(styles)
function ThemeItem({theme}) {
    const {currentTheme} = useSelector(state => state.theme)
    const dispatch = useDispatch();

    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("theme")} style={{backgroundImage: `url(${theme.image})`}}>
                <div className={cx("group-btn")}>
                    <button 
                        className={cx("btn-change")} 
                        onClick={()=> dispatch(setTheme(theme.color))}
                    >
                        ÁP DỤNG
                    </button>
                    <button 
                        className={cx("btn-preview")}
                        onClick={()=> dispatch(previewTheme(theme.color))}
                    >
                        XEM TRƯỚC
                    </button>
                </div>
                {
                    currentTheme.theme === theme.color.theme ? (
                        <button className={cx("btn-check")}>
                            <CheckRoundedIcon sx={{color: 'white'}}/>
                        </button>
                    ) : (
                        <Fragment />
                    )
                }
            </div>
            <p className={cx("theme-name")}>{theme.name}</p>
        </div>
    );
}

export default ThemeItem;