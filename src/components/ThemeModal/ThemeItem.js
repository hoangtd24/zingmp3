import classNames from "classnames/bind";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import styles from "./ThemeModal.module.scss"
import { useDispatch} from "react-redux";
import { setTheme } from "../../features/theme/themeSlice";

const cx= classNames.bind(styles)
function ThemeItem({theme}) {
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
                    <button className={cx("btn-preview")}>XEM TRƯỚC</button>
                </div>
                <button className={cx("btn-check")}>
                    <CheckRoundedIcon sx={{color: 'white'}}/>
                </button>
            </div>
            <p className={cx("theme-name")}>{theme.name}</p>
        </div>
    );
}

export default ThemeItem;