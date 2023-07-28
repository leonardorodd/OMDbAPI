import styled, { keyframes } from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';

export const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 210px 1fr;
    background: var(--base-red);
`;

export const TitleHeader = styled.div`
    font-family: 'Holtwood One SC', serif;    
    font-size: 60px;
    display: flex;
    align-items: center;
    color: var(--base-white);

    @media only screen and (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative ;
`;

export const Content = styled.div`
    padding: 30px;
    display: flex;
    background: var(--base-black);
    justify-content: center;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

export const SearchBar = styled.div`
    z-index: 1;
    position: absolute;
    bottom: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 49px;
    height: 40p;
    height: 40px;
    padding: 0px 20px 0px 5px;
    background: var(--base-white);
    width: 80vw;

    > svg {
        padding: 4px;
        height: 30px;
        width: 30px;
        color: white;
        background: var(--base-red);
        border-radius: 20px;
    }

    > input {
        padding: 8px;    
        border: none;
        width: 100%;
    }`
;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled(ImSpinner2)`
    animation: ${rotate} 1.5s linear infinite;
`;

export const Title = styled.p`
    font-weight: 700;
    color: var(--base-white);
    font-size: 24px;
    line-height: 30px;
`;

export const Subtitle = styled.p`
    font-weight: 400;
    color: var(--secondary-gray);
    font-size: 16px;
    line-height: 16px;
`;

export const SearchResults = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        width: 200px;
    }

    > img {
        height: auto;
        width: 100%;
        padding-bottom: 24px;
    }
`;

export const CardList = styled.div`
    width: 70vw;
    display: grid;
    padding-top: 30px;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-self: baseline;
    justify-self: center;
`;

export const Card = styled.div`
    min-width: 200px;
    height: 320px;
    cursor: pointer;
    transition: transform .2s ease-out;
    border-radius: 8px;
    overflow: hidden;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.9);
    }

    > img {
        width: 100%;
        height: 100%;
    }
`