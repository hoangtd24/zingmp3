import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Checkbox, Modal, Box, Typography, Button } from '@mui/material';
import { useState } from 'react';

import images from '../../../assets/images';
import {
    Album,
    Category,
    History,
    Individual,
    Music,
    Pen,
    Playlist,
    Plus,
    Radio,
    RadioCircle,
    SongFolder,
    Star,
    UploadMusic,
} from '../../../components/icons';
import Library from './Library/Library';
import LibraryItem from './Library/LibraryItem';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

const menu_private_items = [
    {
        icon: <Individual />,
        name: 'MyMusic',
        path: '/my-music',
    },
    {
        icon: <RadioCircle />,
        name: 'Khám Phá',
        path: '/',
    },
    {
        icon: <Radio />,
        name: 'Radio',
        path: '/radio',
    },
    {
        icon: <Music />,
        name: 'Nhạc mới',
        path: '/new-release',
    },
    {
        icon: <Category />,
        name: 'Thể loại',
        path: '/category',
    },
    {
        icon: <Star />,
        name: 'Top 100',
        path: '/top100',
    },
];

const library_items = [
    {
        id: 0,
        icon: <SongFolder />,
        name: 'Bài Hát',
        path: '/',
    },
    {
        id: 1,
        icon: <Playlist />,
        name: 'Playlist',
        path: '/',
    },
    {
        id: 2,
        icon: <Album />,
        name: 'Album',
        path: '/',
    },
    {
        id: 3,
        icon: <UploadMusic />,
        name: 'Nhạc tải lên',
        path: '/',
    },
    {
        id: 4,
        icon: <History />,
        name: 'Gần đây',
        path: '/',
    },
];

function SideBar() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#203d65',
        borderRadius: '8px',
        boxShadow: 24,
        p: 4,
        color: '#fff',
    };

    const handleValueLibrary = (checked) => {
        const value = checked.map(item => {
            return library_items.find(lib => lib.id === item)
        })
       return value
    }
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState([0,1])
    const [libraryValue, setLibraryValue] = useState(handleValueLibrary(checked))

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setChecked(libraryValue.map(item => item.id))
        setOpen(false);
    }

    const handleSave = () => {
        setLibraryValue(handleValueLibrary(checked))
        setOpen(false);
    }

    const handleChange = (index) => {
        if(checked.includes(index)){
            setChecked( checked.filter(item => item !== index))
        }else{
            setChecked(prev => [...prev, index])
        }
    }
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="logo-zingmp3" />
            </div>
            <Menu>
                {menu_private_items.map((item, index) => (
                    <MenuItem key={index} to={item.path} icon={item.icon} name={item.name} />
                ))}
            </Menu>
            <div className={cx('separate')}></div>
            <div className={cx('library')}>
                <div className={cx("banner-vip")}>
                    <p className={cx("banner-title")}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                    <button className={cx("banner-btn")}>NÂNG CẤP VIP</button>
                </div>
                <div className={cx('heading')}>
                    <span className={cx('title')}>THƯ VIỆN</span>
                    <Tippy content="Chỉnh sửa">
                        <span className={cx('icon')} onClick={handleOpen}>
                            <Pen />
                        </span>
                    </Tippy>
                </div>
                <Library>
                    {libraryValue.map((item, index) => (
                        <LibraryItem key={index} to={item.path} icon={item.icon} name={item.name} />
                    ))}
                </Library>
            </div>
            <div className={cx('create-playlist')}>
                    <span className={cx('icon')}>
                        <Plus />
                    </span>
                    <span className={cx('title')}>Tạo playlist mới</span>
                </div>            
            {/*  Modal  */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Thư viện cá nhân
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 14 }}>
                        Bạn có thể tùy chỉnh danh sách thư viện cá nhân
                    </Typography>
                    {library_items.map((item, index) => (
                        <div className={cx('checkbox-item')} key={index}>
                            <Checkbox 
                                size="large"
                                checked = {checked.includes(index)}
                                onChange={() => handleChange(index)}
                            />
                            <LibraryItem key={index} to={item.path} icon={item.icon} name={item.name} />
                        </div>
                    ))}
                    <div className={cx("actions-btn")}>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={handleClose}
                            sx={{ ml: 2, px: 4, fontSize: 14, color: '#fff'}}
                        >
                            ĐÓNG
                        </Button>
                        <Button 
                            variant="contained" 
                            sx={{ ml: 2, px: 4, fontSize: 14 }}
                            onClick= {handleSave}
                        >
                            LƯU
                        </Button>
                    </div>
                </Box>
            </Modal>
        </aside>
    );
}

export default SideBar;
