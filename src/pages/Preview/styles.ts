import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 80px 1fr;
    background: var(--base-red);
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Content = styled.div`
    padding: 30px;
    display: flex;
    background: var(--base-black);
    align-items: center;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    flex-direction: column;
`;


export const Navigation = styled.div`
    width: 80vw;
   
    > svg {
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
        color: var(--secondary-gray);

        &:hover {
            cursor: pointer;
        }
    }
`;

export const MovieInfo = styled.div`
    width: 80vw;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: fit-content;
        height: 22px;
        font-size: 18px;
        padding: 20px 0px;
        color: var(--secondary-gray);

        > span {
            background: var(--secondary-gray);
            color: var(--base-black);
            border-radius: 5px;
            padding: 5px;
            font-weight: bold;
        }

        > p {
            margin-right: 10px;
        }
    }
`;

export const MovieContainer = styled.div`
    display: flex;
    width: 80vw;
    height: 100%;

    @media only screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        > div {
            width: 100%;
        }
    }
`;

export const MovieDetails = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
`;

export const MovieCover = styled.div`
    height: 100%;
    width: 40%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    > div {
        width: 75%;
        height: 90%;
        
        > img {
            border-radius: 10px;
            width: 100%;
            object-fit: cover;
        }
    }
`;

export const MovieTitle = styled.p`
    font-size: 60px;
    color: var(--base-white);
    font-weight: bold;
    padding: 30px 0px;

    @media only screen and (max-width: 600px) {
        font-size: 40px;
    }
`;

export const MovieRatings = styled.div`
    display: flex;
    width: auto;

    > button {
        width: 150px;
        height: 40px;
        border: 0.5px solid var(--border-color);
        border-radius: 5px;
        background: none;
        color: var(--secondary-gray);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: background-color 0.8s ease;

        &:hover {
            background: var(--base-red);
            color: var(--base-white);
        }

        > svg {
            width: 20px;
            height: 20px;
        }
    }
`;

interface RatingProps {
  color: string;
}

export const Rating = styled.div<RatingProps>`
    display: flex;
    align-items: center;
    width: 150px;
    height: 40px;
    border: 0.5px solid var(--border-color);
    border-radius: 5px;
    margin-right: 15px;

    > :first-child {
        height: 100%;
        background: ${(props) => props.color};
        overflow: hidden;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        > img {
            height: 18px;
        }
    }

    > div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > :last-child {
        > p {
            color: var(--base-white);
        }
    }
`;

export const Plot = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0px;
    font-size: 20px;

    > span {
        color: var(--secondary-gray);
        font-weight: bold;
        margin-bottom: 15px;
    }

    > p {
        color: var(--base-white);
    }
`

export const CastContainer = styled.div`
    display: flex;
    width: 100%;
    font-size: 20px;

    > div {
        width: 33%;
    }   
`;

export const Cast = styled.div`
    display: flex;
    flex-direction: column;
   
    > span {
        color: var(--secondary-gray);
        font-weight: bold;
        margin-bottom: 15px;
    }

    p {
        margin-bottom: 5px;
        color: var(--base-white);
    }
`

export const Loading = styled.div`
    height: 100%;
    display: flex;
`