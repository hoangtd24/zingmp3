import { faCircleDot, faFolder, faIcons, faMusic, faRadio, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import images from "../../../assets/images";
import { Album, History, Playlist, SongFolder, UploadMusic } from "../../../components/icons";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import styles from "./SideBar.module.scss"

const cx = classNames.bind(styles)

const menu_private_items = [
    {
        icon: <FontAwesomeIcon icon={faCircleDot} />,
        name: "Khám Phá",
        path: "/home"
    },
    {
        icon: <FontAwesomeIcon icon={faRadio} />,
        name: "Radio",
        path: "/radio"
    },
    {
        icon: <FontAwesomeIcon icon={faMusic} />,
        name: "Nhạc mới",
        path: "/new-release"
    },
    {
        icon: <FontAwesomeIcon icon={faIcons} />,
        name: "Thể loại",
        path: "/category"
    },
    {
        icon: <FontAwesomeIcon icon={faStar} />,
        name: "Top 100",
        path: "/top100"
    }
]

const library_items = [
    {
        icon: <SongFolder />,
        name: "Bài Hát"
    },
    {
        icon: <Playlist/>,
        name: "Playlist"
    },
    {
        icon: <Album/>,
        name: "Album"
    },
    {
        icon: <UploadMusic/>,
        name: "Nhạc tải lên"
    },
    {
        icon: <History />,
        name: "Gần đây"
    },
]

function SideBar() {
    return ( 
        <aside className={cx("wrapper")}>
            <div className={cx("logo")}>
                <img src={images.logo} alt="logo-zingmp3" />
            </div>
            <Menu>
                {
                    menu_private_items.map((item, index) => (
                        <MenuItem 
                            to= {item.path} 
                            icon= {item.icon}
                            name= {item.name}
                        />
                    ))
                }
            </Menu>
        </aside>
    );
}

export default SideBar;