import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {
    Link
} from "react-router-dom"
//Material UI icon
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
//Ityped animation
import { init } from "ityped"


const Header = () => {
    const textRef = useRef();       //ityped function https://www.npmjs.com/package/ityped

    useEffect(() => {               //render ityped function
        init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Le Vinh Phuc"],
        });
    }, []);
    return (
        <Nav>
            <HeaderLogo>                        {/* Home Logo */}
                <Link to="/">
                    <HomeIcon style={{ fontSize: 45, color: 'white'}}/>
                </Link>
            </HeaderLogo> 
            <Ityped ref={textRef}></Ityped>     {/* Ityped */}
            <NavMenu>                           {/* Display the navigation bar menu */}
                <a target="_blank" rel="noreferrer" href="https://github.com/phuclevinh2000">
                    <GitHubIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>GitHub</span>
                </a>
                <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/phuc-le-vinh-2000/">
                    <LinkedInIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>Linkedin</span>
                </a>
                <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/phuc-le-vinh-2000/">
                    <CodeIcon style={{ fontSize: 30, color: 'white'}}/>
                    <span>Source Code</span>
                </a>
            </NavMenu>
        </Nav>
    )
}

export default Header

const HeaderLogo = styled.div`
    padding-right: 20px;

`
const Ityped = styled.span`
    display: flex;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    justify-content: flex-end;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        span {
            font-size: 13px;
            letter-spacing: 1.4px;
            position: relative;
            padding: 0 5px;
            
            &:after {                   //make the hover effect on the navbar menu
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {                       //make the hover effect on the navbar menu
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const Nav = styled.div`
    height: 60px;
    background: #264653;
    display: flex;
    align-items: center;
    padding: 0 36px;

    a{
        text-decoration: none;
        color: white;
    }
`
