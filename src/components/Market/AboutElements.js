import styled from 'styled-components';


export const AboutContainer = styled.div`
    position: relative;
    color: #fff;
    background: #000;

    @media screen and (max-wdith: 768px) {
        padding: 100px 0;
    }
`;


export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 72px 24px 24px 24px;
`;

export const TopLine = styled.p`
    color: #E00505;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width; 480px) {
        font-size: 32px;
    }
`;


export const ImgWrap = styled.div`
    display: flex;
`;

export const Subtitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
`;


export const BtnWrap = styled.div`
    z-index: 999;
    padding-top: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`;