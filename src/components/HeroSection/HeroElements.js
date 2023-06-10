import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`;

export const VideoBg = styled.video`
    width: 100%;
    height: 101%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
    @media screen and (max-width: 768px) {
       display: none;
    }

    @media screen and (max-wdith: 480px) {
        display: none;
    }
`;
export const VideoBgMobile = styled.video`

    
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 101%;
        -o-object-fit: cover;
        object-fit: cover;
        background: #232a34;
    }

    @media screen and (max-wdith: 480px) {
        width: 100%;
    height: 101%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    }
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    top: 25%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroContentButton = styled.div`
    z-index: 3;
    max-width: 1200px;
    top: 65%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-wdith: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 2px;
    font-size: 16px;
    text-align: center;
    max-width: 600px;
    color: #e0da82;
    padding: 4px 8px 4px 8px;
    background-color: #00000045;
    font-weight: bolder;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }

    @media screen and (max-wdith: 480px) {
        font-size: 8px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ClassImg = styled.img`
    border: 1px solid #000;
    height: 105px;
    
    &.active {
        border: 1px solid #e0da82;
    }
`

export const ClassWrapper = styled.div`
    padding: 8px 12px 0px 12px;
    cursor: pointer;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    p {
        color: #fff;
    }

    :hover {
        background: #000;
        img {
            border: 1px solid #e0da82;
        }
        p {
            color: #e0da82;
        }
    }
`

export const ClassWrap = styled.div`
position: absolute;
z-index: 999;
bottom: 0;
left: 0;
right: 0;
margin: 0 auto;
background: #00000045;
border: 1px solid #000;
padding: 4px 4px 32px 4px;


@media screen and (max-width: 842px) {
    display: none;
}

@media screen and (max-wdith: 480px) {
    display: none;
}
`

export const ClassDivWrap = styled.div`
display: flex;
align-items: center; 
justify-content: center;
`