import classNames from "classnames/bind";
import styles from "./Library.module.scss"

const cx = classNames.bind(styles)

function Library({children}) {
    return (
        <nav className={cx("Library")}>
            {children}
        </nav>
    )

}

export default Library;