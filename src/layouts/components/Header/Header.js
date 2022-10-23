import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import BlockIcon from '@mui/icons-material/Block';
import HdOutlinedIcon from '@mui/icons-material/HdOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

import Search from '../../../components/Search/Search';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';

const cx = classNames.bind(styles);

const settingMenu = [
    {
        icon: <BlockIcon className={cx('icon')} />,
        title: 'Danh sách chặn',
    },
    {
        icon: <HdOutlinedIcon className={cx('icon')} />,
        title: 'Chất lượng nhạc',
    },
    {
        icon: <PlayCircleFilledWhiteOutlinedIcon className={cx('icon')} />,
        title: 'Giao diện',
    },
    {
        divider: true,
    },
    {
        icon: <ErrorOutlineOutlinedIcon className={cx('icon')} />,
        title: 'Giới thiệu',
    },
    {
        icon: <LocalPhoneOutlinedIcon className={cx('icon')} />,
        title: 'Liên hệ',
    },
    {
        icon: <DescriptionOutlinedIcon className={cx('icon')} />,
        title: 'Thỏa thuận sử dụng',
    },
    {
        icon: <SecurityOutlinedIcon className={cx('icon')} />,
        title: 'Chính sách bảo mật',
    },
];
function Header() {
    const [openSetting, setOpenSetting] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);

    useEffect(()=> {
    },[])

    return (
        <header className={cx('header')}>
            <Search />
            <div className={cx('actions')}>
                <Tippy content="Nâng cấp VIP">
                    <Link to="/" className={cx('action-item')}>
                        <DiamondOutlinedIcon sx={{ fontSize: '24px' }} />
                    </Link>
                </Tippy>
                <Tippy content="Tải lên">
                    <div className={cx('action-item')}>
                        <FileUploadOutlinedIcon sx={{ fontSize: '26px' }} />
                    </div>
                </Tippy>
                <HeadlessTippy
                    visible={openSetting}
                    onClickOutside={() => setOpenSetting(false)}
                    interactive
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <Paper sx={{ width: 240, maxWidth: '100%', backgroundColor: '#203d65', color: 'white' }}>
                                <MenuList>
                                    {settingMenu.map((item, index) => {
                                        if (item.divider) {
                                            return <Divider key={index}/>;
                                        } else {
                                            return (
                                                <MenuItem sx={{ padding: '12px 16px' }} key={index}>
                                                    <ListItemIcon>
                                                            {item.icon}
                                                    </ListItemIcon>
                                                    <ListItemText className={cx('title')}>{item.title}</ListItemText>
                                                </MenuItem>
                                            );
                                        }
                                    })}
                                    {/* <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <BlockIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Danh sách chặn</ListItemText>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                            <ListItemIcon>
                                                <HdOutlinedIcon className={cx('icon')} />
                                            </ListItemIcon>
                                            <ListItemText className={cx('title')}>Chất lượng nhạc</ListItemText>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <PlayCircleFilledWhiteOutlinedIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Giao diện</ListItemText>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <ErrorOutlineOutlinedIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Giới thiệu</ListItemText>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <LocalPhoneOutlinedIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Liên hệ</ListItemText>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <DescriptionOutlinedIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Thỏa thuận sử dụng</ListItemText>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <SecurityOutlinedIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Chính sách bảo mật</ListItemText>
                                    </MenuItem> */}
                                </MenuList>
                            </Paper>
                        </div>
                    )}
                >
                    <Tippy content="Cài đặt">
                        <div onClick={() => setOpenSetting(!openSetting)} className={cx('action-item')}>
                            <SettingsIcon sx={{ fontSize: '24px' }} />
                        </div>
                    </Tippy>
                </HeadlessTippy>
                <HeadlessTippy
                    visible={openUserMenu}
                    interactive
                    onClickOutside={() => setOpenUserMenu(false)}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <Paper sx={{ width: 240, maxWidth: '100%', backgroundColor: '#203d65', color: 'white' }}>
                                <MenuList>
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <DiamondOutlinedIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Nâng cấp VIP</ListItemText>
                                    </MenuItem>
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <StorefrontOutlinedIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Mua code VIP</ListItemText>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem sx={{ padding: '12px 16px' }}>
                                        <ListItemIcon>
                                            <LogoutIcon className={cx('icon')} />
                                        </ListItemIcon>
                                        <ListItemText className={cx('title')}>Đăng xuất</ListItemText>
                                    </MenuItem>
                                </MenuList>
                            </Paper>
                        </div>
                    )}
                >
                    <Tippy content="Cài đặt">
                        <Avatar
                            onClick={() => setOpenUserMenu(!openUserMenu)}
                            className={cx('action-item')}
                            src="https://s120-ava-talk-zmp3.zmdcdn.me/b/3/1/c/2/120/93f577eb9ce46362a4b309c258facca8.jpg"
                            alt=""
                        />
                    </Tippy>
                </HeadlessTippy>
            </div>
        </header>
    );
}

export default Header;
