import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import classNames from "classnames/bind";
import { forwardRef } from 'react';
import styles from "./Button.module.scss"


const cx = classNames.bind(styles)


const Button = forwardRef(({icon, title, more,  className, small, large},ref) =>{

    const classes = cx('wrapper',{
        [className]:className,
        small,
        large,
    })
    return ( 
        <div  className={classes} ref={ref}>
            <div className={cx("icon")}>
                {icon}
            </div>
            <div className={cx("title")}>
                {title}
            </div>
            {more && <div className={cx("icon-more")}>
                <ArrowForwardIosRoundedIcon />
            </div>}
        </div>
     );
})

export default Button;