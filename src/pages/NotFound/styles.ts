import styled from 'styled-components';

export const Container = styled.div`
    background: var(--base-black);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;   
`;

export const Content = styled.div`
    width: 900px;
    height: 600px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 50px;
    border-radius: 10px;

    > button {
        width: 150px;
        padding: 10px;
        border-radius: 20px;
        background-color: var(--base-red);
        color: var(--base-white);
        border: none;
        font-weight: bold;
        text-transform: uppercase;
    }
`;
