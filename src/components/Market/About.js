import React from 'react'
import { Button } from '../ButtonElement'
import { AboutContainer, AboutWrapper, TopLine, Heading, ImgWrap, Subtitle, BtnWrap } from './AboutElements';
import CardDetails from '../CardDetails/CardDetails';
import DriverNFT from '../../images/nft/driver-nft.png';
import NuclearNFT from '../../images/nft/nuclear-nft.png';
import SniperNFT from '../../images/nft/sniper-nft.png';
import SeekerNFT from '../../images/nft/seeker-nft.png';
import MarineNFT from '../../images/nft/marine-nft.png';
// import Particles from 'react-particles-js';

const About = () => {
    return (
        <AboutContainer id="market">
            {/* <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.01
                    },
                    "move": {
                        "direction": "top",
                        "speed": 0.5
                    },
                    "size": {
                        "value": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 1
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }}
            className="part" /> */}
            <AboutWrapper>
            <TopLine>NFT Marketplace</TopLine>
            <Heading>100 NFTs Generation 0 (Beta)</Heading>
            <Subtitle>When it comes to the NFT marketplace, it is divided into several sections and performs DeFi-specific functions. Users can flip or hold their NFTs, and their NFTs value will increase over time due to the smart contract design algorithm that will distribute a certain percentage of every market place transaction to the value of the NFTs users hold.</Subtitle>
            <ImgWrap>
                <CardDetails imageUrl={DriverNFT} rarity="epic-card" />
                <CardDetails imageUrl={NuclearNFT} rarity="rare-card" />
                <CardDetails imageUrl={SniperNFT} rarity="legendary-card" />
                <CardDetails imageUrl={SeekerNFT} rarity="rare-card" />
                <CardDetails imageUrl={MarineNFT} rarity="epic-card" />
            </ImgWrap>
            <BtnWrap>
                <Button to='home' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={1}
                        dark={0}
                >
                    View SPP Marketplace
                </Button>
                <p className='ml-4 mr-4'>or</p>
                <Button to='stake' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={0}
                        dark={1}
                >
                    Stake SPP
                </Button>
            </BtnWrap>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About
