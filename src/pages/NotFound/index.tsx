import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/notFound.json';
import { Container, Content } from './styles';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {

    const navigate = useNavigate();

    return( 
        <Container>
            <Content>
                <Lottie 
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                        },
                    }}
                    isClickToPauseDisabled
                /> 
                <button onClick={() => navigate('/')}>Go to home page</button>
            </Content>
        </Container>
    )
  
}

export default NotFound;