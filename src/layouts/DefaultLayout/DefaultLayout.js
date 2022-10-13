import className from "classnames/bind"
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Player from "../components/Player/Player";
import SideBar from "../components/SideBar/SideBar";
import styles from "./DefaultLayout.module.scss"

const cx = className.bind(styles)

function DefaultLayout({children}) {
    
    return ( 
        <div className={cx("wrapper")} >
            <SideBar />
            <div className={cx("container")}>
                <Header />
                <div className={cx("content")} >
                    {children}  
                </div>
            </div>
            <Player />
        </div>
    );
}

export default DefaultLayout;