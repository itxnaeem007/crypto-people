import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksWrapper, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/buy">Buy NFT's</FooterLink>
                                <FooterLink to="/test">How it works</FooterLink>
                                <FooterLink to="/test3">Careers</FooterLink>
                                <FooterLink to="/test4">Partners</FooterLink>
                                <FooterLink to="/test2">Terms and Conditions</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/buy">Buy NFT's</FooterLink>
                                <FooterLink to="/test">How it works</FooterLink>
                                <FooterLink to="/test3">Careers</FooterLink>
                                <FooterLink to="/test4">Partners</FooterLink>
                                <FooterLink to="/test2">Terms and Conditions</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/buy">Buy NFT's</FooterLink>
                                <FooterLink to="/test">How it works</FooterLink>
                                <FooterLink to="/test3">Careers</FooterLink>
                                <FooterLink to="/test4">Partners</FooterLink>
                                <FooterLink to="/test2">Terms and Conditions</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/buy">Facebook</FooterLink>
                                <FooterLink to="/test">Instagram</FooterLink>
                                <FooterLink to="/test3">Telegram</FooterLink>
                                <FooterLink to="/test4">GitHub</FooterLink>
                                <FooterLink to="/test2">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            GoodGirls
                        </SocialLogo>
                        <WebsiteRights>GoodGirls © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
