import React from "react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.scss';
import logo from '../../assets/tmovie.png';
import { useEffect } from "react";
import { EffectFlip } from "swiper";
import { cleanup } from "@testing-library/react";
const headerNav = [
    {
        display: 'Trending',
        path:'/'
    },
    {
        display:'Films',
        path:'/movie'
    },
    {
        display:'Shows',
        path:'/tv'
    }
]
const Header = () =>{
    const{pathname}=useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.path === pathname);
    useEffect(()=>{
        const shrinkHeader = () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                headerRef.current.classList.add('shrink');
            }
            else{
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return() =>{
            window.removeEventListener('scroll', shrinkHeader);
        };
    },[]);
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <Link to="/">MovieViewz</Link>
                </div>
                <u1 className="header__nav">
                    {
                        headerNav.map((e,i)=>(
                            <li key={i} className={`${i===active? 'active':'' }`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </u1>
            </div>
        </div>
    );
}
export default Header;