import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ThemeItem from './ThemeItem';

import classNames from 'classnames/bind';
import styles from './ThemeModal.module.scss'

const cx = classNames.bind(styles)
const themes = [
    {
        type: 'Dynamic',
        data: [
            {
                image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dynamic-light-dark-1.jpg',
                color: {
                    theme:'light-dark'
                },
                name: 'Sáng tối'
            },
            {
                image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dynamic-blue.jpg',
                color: {
                    theme: ''
                },
                name: 'Xanh Da Trời'
            },
            {
                image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dynamic-pink.jpg',
                color: {
                    theme: 'pink'
                },
                name: 'Hồng'
            },
            {
                image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dynamic-brown.jpg',
                color: {
                    theme: 'brown'
                },
                name: 'Nâu'
            },
        ],
    },
    {
        type: 'Nghệ sĩ',
        data: [
            {
                image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jack.jpg',
                color: {
                    layoutBg: '#767269',
                    playerBg: '#4C473E',
                    primaryBg: '#605C52',
                    bgImage: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/jack.jpg',
                },
                name: 'Jack'
            },
            {
                image: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/rose.jpg',
                color: {
                    layoutBg: '#061C4F',
                    playerBg: '#061641',
                    primaryBg: '#1A3570',
                    bgImage: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/rose.jpg',
                },
                name: 'Rosé'
            },
        ],
    },
];
function ThemeModal({ open, setOpen }) {

    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={cx('modal-content')}>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: 'white'}}
                >
                    Giao diện
                </Typography>
                {themes.map((item, index) => (
                    <div className={cx("content")} key={index}>
                        <h3 className={cx("theme-title")}>{item.type}</h3>
                        <div className={cx("theme-list")}>
                            {item.data.map((theme, index) => <ThemeItem key={index} theme= {theme}/>)}
                        </div>
                    </div>
                ))}
            </Box>
        </Modal>
    );
}

export default ThemeModal;
