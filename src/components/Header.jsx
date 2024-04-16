/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import '../styles/header.css';

export default function Header({ timeline, ease }) {

    let logo = useRef(null);
    let menu_item1 = useRef(null);
    let menu_item2 = useRef(null);
    let menu_item3 = useRef(null);
    useEffect(() => {
        timeline.from(logo, 1, {
            opacity: 0,
            y: '100'
        });
        timeline.from([menu_item1, menu_item2, menu_item3], 2, {
            opacity: 0,
            y: -200,
            stagger: {
                amount: 0.4
            },
            ease: ease
        })
    }, [ease, timeline])

    return (
        <div>
            <div className="header" ref={el => logo = el}>
                <div className="logo" >
                    Logo
                </div>
                <div className="menu">
                    <div className="menu-item" ref={el => menu_item1 = el}>About</div>
                    <div className="menu-item" ref={el => menu_item2 = el}>Journal</div>
                    <div className="menu-item" ref={el => menu_item3 = el}>Contact</div>
                </div>
            </div>

        </div>
    )
}
