import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LyricsOutlinedIcon from '@mui/icons-material/LyricsOutlined';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import MicExternalOnRoundedIcon from '@mui/icons-material/MicExternalOnRounded';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BlockIcon from '@mui/icons-material/Block';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

import styles from './Player.module.scss';
import Button from '../../../components/Button/Button';
import { AddIcon, Facebook, Zalo } from '../../../components/icons';

const cx = classNames.bind(styles);

function PlayerLeft() {
    const [like, setLike] = useState(false);
    const [openMore, setOpenMore] = useState(false);

    return (
        <div className={cx('player-left')}>
            <img
                className={cx('thumbnail-song')}
                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/c/9/e/dc9e0327d6e99d57cdcd54981cb5989d.jpg"
                alt=""
            />
            <div className={cx('info-song')}>
                <p className={cx('name-song')}>Người Như Anh</p>
                <p className={cx('artist')}>Mai Tiến Dũng</p>
            </div>
            <div className={cx('action-like')}>
                <Tippy content="Thêm vào thư viện">
                    <button className={cx('btn-like')} onClick={() => setLike(!like)}>
                        {like ? (
                            <FavoriteRoundedIcon sx={{ color: `var(--purple-primary)`, fontSize: '16px' }} />
                        ) : (
                            <FavoriteBorderRoundedIcon sx={{ color: `var(--player-text)`, fontSize: '16px' }} />
                        )}
                    </button>
                </Tippy>
            </div>
            <div className={cx('more')}>
                <HeadlessTippy
                    visible={openMore}
                    interactive
                    placement="top-start"
                    onClickOutside={() => setOpenMore(false)}
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <div className={cx('container')}>
                                <div className={cx('media-song-info')}>
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/c/9/e/dc9e0327d6e99d57cdcd54981cb5989d.jpg"
                                        alt=""
                                    />
                                    <div className={cx('media-song-content')}>
                                        <p className={cx('media-song-name')}>Người Như Anh</p>
                                        <span className={cx('quantity-item')}>
                                            <FavoriteBorderRoundedIcon sx={{ color: `var(--text-secondary)` }} />
                                            <span>71K</span>
                                        </span>
                                        <span className={cx('quantity-item')}>
                                            <HeadphonesRoundedIcon sx={{ color: `var(--text-secondary)` }} />
                                            <span>1.2M</span>
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('action-list')}>
                                    <div className={cx('action-item')}>
                                        <FileDownloadOutlinedIcon
                                            sx={{ fontSize: '20px', color: `var(--player-text)` }}
                                        />
                                        <span className={cx('action-name')}>Tải xuống</span>
                                    </div>
                                    <div className={cx('action-item')}>
                                        <LyricsOutlinedIcon sx={{ fontSize: '18px', color: `var(--player-text)` }} />
                                        <span className={cx('action-name')}>Lời bài hát</span>
                                    </div>
                                    <div className={cx('action-item')}>
                                        <BlockIcon sx={{ fontSize: '18px', color: `var(--player-text)` }} />
                                        <span className={cx('action-name')}>Chặn</span>
                                    </div>
                                </div>
                                <HeadlessTippy
                                    interactive
                                    placement="top-end"
                                    offset={[215,-60]}
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <div className={cx("add-playlist-content")}>
                                                <input placeholder='Tìm playlist' className={cx("search-playlist")}/>
                                                <Button icon={<AddIcon />} title="Tạo playlist mới" large/>
                                                <Button icon={<QueueMusicRoundedIcon />} title="Tống Hoàng" small/>
                                            </div>
                                        </div>
                                    )}
                                >
                                    <Button icon={<ControlPointRoundedIcon />} title="Thêm vào playlist" more small />
                                </HeadlessTippy>
                                <Button icon={<MicExternalOnRoundedIcon />} title="Phát cùng lời bài hát" small />
                                <Button icon={<MapsUgcOutlinedIcon />} title="Bình luận" small />
                                <Button icon={<AttachmentRoundedIcon />} title="Sao chép link" small />
                                <HeadlessTippy
                                    interactive
                                    placement="bottom-end"
                                    offset={[215,-45]}
                                    render={(attrs) => (
                                        <div className="box" tabIndex="-1" {...attrs}>
                                            <div className={cx("add-playlist-content")}>
                                                <Button icon={<Facebook />} title="Facebook" large/>
                                                <Button icon={<Zalo />} title="Zalo" large/>
                                                <Button icon={<CodeRoundedIcon />} title="Mã Nhúng" large/>

                                            </div>
                                        </div>
                                    )}
                                >
                                    <Button icon={<ShareOutlinedIcon />} title="Chia sẻ" more small />
                                </HeadlessTippy>
                            </div>
                        </div>
                    )}
                >
                    <Tippy content="Xem thêm">
                        <div className={cx('btn-more')} onClick={() => setOpenMore(!openMore)}>
                            <MoreHorizRoundedIcon sx={{ color: `var(--player-text)`, fontSize: '18px' }} />
                        </div>
                    </Tippy>
                </HeadlessTippy>
            </div>
        </div>
    );
}

export default PlayerLeft;
