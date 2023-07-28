/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { MdSearch } from 'react-icons/md';
import { TbMovie } from 'react-icons/tb';
import image from '../../assets/Image.svg'
import imageNotFound from '../../assets/imagenotfound.jpg'
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import animationData from '../../assets/lotties/loading.json';
import { Container, Title, Subtitle, SearchBar, SearchResults, CardList, Card, Header, Content, TitleHeader } from './styles';
import api from '../../services/api';
import { AxiosError } from 'axios';

interface IMovieProps {
  Title: string,
	Year: string,
	imdbID: string,
	Type: string,
	Poster: string 
}

interface IIMDbProps {
  Response: 'True';
  Search: IMovieProps[];
}

interface IIMDbPropsFalse {
  Response: 'False';
}

type IMDbResponse = IIMDbProps | IIMDbPropsFalse;

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movieList, setMovieList] = useState<IMovieProps[] | []>([]);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const navigate = useNavigate();

  const renderContent = (data?: IMDbResponse) => {
    if(data && data.Response === 'True') {
      setMovieList(data.Search)
    }else {
      movieList.length > 0 && setMovieList([]);
    }
    
    setLoading(false);
  }

  const getMoviesList = useCallback(() => {
    try {
      
      if(searchTerm === null){
        return;
      }

      if(timer) {
        clearTimeout(timer);
      }

      if(!searchTerm) {
        renderContent();
        return;
      }
      
      setLoading(true);

      setTimer(
        setTimeout(async () => {
          try {
            const { data } = await api.get('', { params: { s: searchTerm }});
            console.log('executou')
            renderContent(data);
          } catch (error) {
            throw new Error('Erro ao obter informações');
          }
        }, 4000)
      );
    } catch(e) {
      const err = e as AxiosError;
      toast.error(err.message, { toastId: 'error1' })
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => { 
    getMoviesList();
  }, [getMoviesList]);

  return (
    <Container>
      <Header>
        <TitleHeader>Movie Finder <TbMovie/></TitleHeader>
        <SearchBar>
          <MdSearch />
          <input placeholder='Search movies...' value={searchTerm || ''} onChange={(e) => setSearchTerm(e.target.value)}/>
        </SearchBar>
      </Header>
      <Content>
        {loading ? 
          <Lottie 
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            style={{
              alignSelf: 'center',
            }}
            height={100}
            width={100}
          /> 
        :
          <>
            { movieList.length > 0 ? 
              <CardList>
                {movieList.map(movie => {
                  if(movie.Poster === 'N/A') movie.Poster = imageNotFound;

                  return (
                    <Card onClick={() => {
                      navigate('/preview', { state: { imdbID: movie.imdbID } })
                    }}>
                      <img src={movie.Poster} />
                    </Card>
                  )
                })}
              </CardList>
            : <SearchResults>
                <img src={image}></img>
                <Title>Don't know what to search?</Title>
                <Subtitle>Here's an offer you can't refuse</Subtitle>
              </SearchResults>
            }
          </>
        }
      </Content>
    </Container>  
  );
}

export default Home;