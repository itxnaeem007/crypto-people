import React, { useState, useEffect } from 'react';
import GatlingSoldier from '../../videos/customvideo.mp4';
import ShotgunMaster from '../../videos/customvideo.mp4'
import StrikeForce from '../../videos/customvideo.mp4';
import Sniper from '../../videos/customvideo.mp4';
import Seeker from '../../videos/customvideo.mp4';
import GasSoldier from '../../videos/customvideo.mp4';
import Marine from '../../videos/customvideo.mp4';
import Teleporter from '../../videos/customvideo.mp4';
import Swat from '../../videos/customvideo.mp4';
import FirearmsExpert from '../../videos/customvideo.mp4';
import Nuclear from '../../videos/customvideo.mp4';
import Driver from '../../videos/customvideo.mp4';
import GatlingSoldierImage from '../../images/classes/gatlingsoldier.png';
import ShotgunMasterImage from '../../images/classes/shotgunmaster.png';
import StrikeForceImage from '../../images/classes/strikeforce.png';
import SniperImage from '../../images/classes/sniper.png';
import SeekerImage from '../../images/classes/seeker.png';
import GasSoldierImage from '../../images/classes/gassoldier.png';
import MarineImage from '../../images/classes/marine.png';
import TeleporterImage from '../../images/classes/teleporter.png';
import SwatImage from '../../images/classes/swat.png';
import FirearmsExpertImage from '../../images/classes/firearmsexpert.png';
import NuclearImage from '../../images/classes/nuclear.png';
import DriverImage from '../../images/classes/driver.png';
import { HeroContainer, HeroBg, VideoBg, VideoBgMobile, HeroContent, HeroContentButton, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, ClassWrapper, ClassImg, ClassWrap, ClassDivWrap } from './HeroElements';
import { Button } from '../ButtonElement';
import "./heroSection.css";
import { NavLinks } from '../Navbar/NavbarElements';
import { useDencrypt } from "use-dencrypt-effect";
import { ProgressBar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const history = useHistory()

    const onHover = () => {
        setHover(!hover);
    }
    const randomVideo = [
        {
            url: GatlingSoldier,
            hero: "Gatling Soldier"
        },
        {
            url: ShotgunMaster,
            hero: "Shotgun Master"
        },
        {
            url: StrikeForce,
            hero: "Strike Force"
        },
        {
            url: Sniper,
            hero: "Sniper"
        },
        {
            url: Seeker,
            hero: "Seeker"
        },
        {
            url: GasSoldier,
            hero: "Gas Soldier"
        },
        {
            url: Marine,
            hero: "Marine"
        },
        {
            url: Teleporter,
            hero: "Teleporter"
        },
        {
            url: Swat,
            hero: "Swat"
        },
        {
            url: FirearmsExpert,
            hero: "Firearms Expert"
        },
        {
            url: Nuclear,
            hero: "Nuclear"
        },
        {
            url: Driver,
            hero: "Driver"
        }
    ]
    const item = randomVideo[Math.floor(Math.random() * randomVideo.length)];
    const now = 60;

    const [videoBG, setVideoBG] = useState(item.url);
    const [currentHero, setCurrentHero] = useState(item.hero);
    const setHeroHome = (video, hero) => {
        setVideoBG(video);
        setCurrentHero(hero);
    }
    const { result, dencrypt } = useDencrypt();
    React.useEffect(() => {

        dencrypt(currentHero);


    }, [currentHero]);
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={videoBG} type='video/mp4' />
                <VideoBgMobile autoPlay loop muted src={videoBG} type='video/mp4' />
            </HeroBg>
            <ClassWrap>
                <ClassDivWrap>
                    <div className={`classWrapper ${currentHero === "Gatling Soldier" ? "active" : ""}`} onClick={() => setHeroHome(GatlingSoldier, "Gatling Soldier")}>
                        <ClassImg src={GatlingSoldierImage} />
                        <p>Gatling Soldier</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Shotgun Master" ? "active" : ""}`} onClick={() => setHeroHome(ShotgunMaster, "Shotgun Master")}>
                        <ClassImg src={ShotgunMasterImage} />
                        <p>Shotgun Master</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Strike Force" ? "active" : ""}`} onClick={() => setHeroHome(StrikeForce, "Strike Force")}>
                        <ClassImg src={StrikeForceImage} />
                        <p>Strike Force</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Sniper" ? "active" : ""}`} onClick={() => setHeroHome(Sniper, "Sniper")}>
                        <ClassImg src={SniperImage} />
                        <p>Sniper</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Seeker" ? "active" : ""}`} onClick={() => setHeroHome(Seeker, "Seeker")}>
                        <ClassImg src={SeekerImage} />
                        <p>Seeker</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Gas Soldier" ? "active" : ""}`} onClick={() => setHeroHome(GasSoldier, "Gas Soldier")}>
                        <ClassImg src={GasSoldierImage} />
                        <p>Gas Soldier</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Marine" ? "active" : ""}`} onClick={() => setHeroHome(Marine, "Marine")}>
                        <ClassImg src={MarineImage} />
                        <p>Marine</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Teleporter" ? "active" : ""}`} onClick={() => setHeroHome(Teleporter, "Teleporter")}>
                        <ClassImg src={TeleporterImage} />
                        <p>Teleporter</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Swat" ? "active" : ""}`} onClick={() => setHeroHome(Swat, "Swat")}>
                        <ClassImg src={SwatImage} />
                        <p>Swat</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Firearms Expert" ? "active" : ""}`} onClick={() => setHeroHome(FirearmsExpert, "Firearms Expert")}>
                        <ClassImg src={FirearmsExpertImage} />
                        <p>Firearms Expert</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Nuclear" ? "active" : ""}`} onClick={() => setHeroHome(Nuclear, "Nuclear")}>
                        <ClassImg src={NuclearImage} />
                        <p>Nuclear</p>
                    </div>
                    <div className={`classWrapper ${currentHero === "Driver" ? "active" : ""}`} onClick={() => setHeroHome(Driver, "Driver")}>
                        <ClassImg src={DriverImage} />
                        <p>Driver</p>
                    </div>
                </ClassDivWrap>

            </ClassWrap>
            <HeroContent>
                <HeroH1>Hero Classes NFT Collections</HeroH1>
                <HeroP>
                    {result} Class Preview
                </HeroP>
                <div className="box">
                    <h2>BUY NOW</h2>
                    <h6>235.69 BNB sold / 1766 BNB remaining</h6>
                    <ProgressBar style={{ width: '400px', marginTop: '19px' }} now={now} label={`${now}%`} />
                    <button className="mt-5 buy-btn" onClick={() => {
                        history.push('/pre-sale')
                    }}  >
                        Buy
                    </button>

                </div>
            </HeroContent>
            <HeroContentButton>
                <HeroBtnWrapper>
                    <Button to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dakr="true">
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>

                </HeroBtnWrapper>
            </HeroContentButton>
        </HeroContainer>
    )
}

export default HeroSection
