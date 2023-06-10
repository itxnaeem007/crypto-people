import styled from 'styled-components';
import { Link } from 'react-scroll';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? "#E00505" : "#010606")};
    white-space: nowrap;
    padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
    color: ${({dark}) => (dark ? "#fff" : "#fff")};
    border: 1px solid #000;
    font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? "#fff" : "#E00505" )};
        color: ${({dark}) => (dark ? "#fff" : "#000")};
        border: 1px solid #000;
    }
`;