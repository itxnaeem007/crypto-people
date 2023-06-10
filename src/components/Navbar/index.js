import React, { useState, useEffect } from 'react'
import { FaBars, FaPowerOff } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import LogoImage from '../../images/superpeoplenft.png';
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn,AddressBtn, NavBtnLink } from './NavbarElements';
import useAuth from './../../hook/useAuth'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core';

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
  })
  export const shortenAddress = (address, chars = 4) => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
  };
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const { login , logout } = useAuth()
    const { account, chainId } = useWeb3React()

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img src={LogoImage} height="40px" /> 
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />    
                    </MobileIcon> 
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >About</NavLinks>    
                        </NavItem>  
                        <NavItem>
                            <NavLinks 
                            to="market"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Marketplace</NavLinks>    
                        </NavItem> 
                        <NavItem>
                            <NavLinks 
                            to="stake"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Stake</NavLinks>    
                        </NavItem> 
                        <NavItem>
                            <NavLinks 
                            to="telegram"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Classes</NavLinks>    
                        </NavItem>
                        <NavItem>
                            <NavLinks to="merch">Merch</NavLinks>    
                        </NavItem>  
                    </NavMenu> 
                    {account? 
                    <AddressBtn >
                       {shortenAddress(account || "")} <FaPowerOff onClick={()=>{logout()}} style={{color  :'red' , marginLeft : '20px'}}/>
                    </AddressBtn>:
                    <NavBtn  onClick={()=>{login(injected)}}>
                            Connect
                    </NavBtn> }
                </NavbarContainer> 
            </Nav>   
        </IconContext.Provider> 
        </>
    )
}

export default Navbar
