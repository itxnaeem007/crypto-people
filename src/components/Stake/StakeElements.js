import styled from 'styled-components';

export const StakeContainer = styled.div`
    position: relative;
    color: #fff;
    background: #000;

    @media screen and (max-wdith: 768px) {
        padding: 100px 0;
    }
`;


export const StakeWrapper = styled.div`
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