/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Header, Content, Navigation, MovieContainer, MovieDetails, MovieCover, MovieTitle, MovieRatings, Rating, Plot, Cast, CastContainer, MovieInfo, Loading } from './styles';
import api from '../../services/api';
import IMDbLogo from '../../assets/IMDbLogo.svg';
import RottenLogo from '../../assets/rottenLogo.svg'
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/loading.json';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type rateLogosType<T> = {
  [key: string]: T;
};

const rateLogos: rateLogosType<{image: string, color: string}> = {
  "Internet Movie Database": {
    image: IMDbLogo,
    color: '#FF9B39'
  },
  "Rotten Tomatoes": {
    image: RottenLogo,
    color: '#F93A1E'
  }
} 

export interface IMDBMovie {
  Title:      string;
  Year:       string;
  Rated:      string;
  Runtime:    string;
  Genre:      string;
  Director:   string;
  Actors:     string;
  Plot:       string;
  Poster:     string;
  Ratings:    Rating[];
}

export interface Rating {
  Source: string;
  Value:  string;
}

const Preview: React.FC = () => {
  const [movieData, setMovieData] = useState<IMDBMovie | null>(null);
  const [favoriteList, setFavoriteList] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const params = useLocation();

  const { imdbID } = params.state;

  const updateFavorites = () => {
    const updatedFavoriteList = favoriteList.includes(imdbID)
    ? favoriteList.filter((favorite: string) => favorite !== imdbID)
    : [...favoriteList, imdbID];

    localStorage.setItem('favorites', JSON.stringify(updatedFavoriteList))
    setFavoriteList(updatedFavoriteList);
  }

  const getMovieData = async () => {
    try{
      setLoading(true);
      const { data } = await api.get('', { params: { i: imdbID }});
      setMovieData(data);
    }catch(e) {
      const err = e as AxiosError;
      toast.error(err.message, { toastId: 'error1' })
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
    const initialValue = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (initialValue) {
      setFavoriteList(initialValue);
    }
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Navigation>
          <MdArrowBack onClick={() => navigate('/')}/>
        </Navigation>
        {loading ? 
          <Loading>
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
          </Loading> : 
          <>
            <MovieInfo>
              <div>
                <p>{movieData?.Runtime}</p>
                <p>•</p>
                <p>{movieData?.Year}</p>
                <p>•</p>
                <span>{movieData?.Rated}</span>
              </div>
            </MovieInfo>
            <MovieContainer>
              <MovieDetails>
                <MovieTitle>{movieData?.Title}</MovieTitle>
                <MovieRatings>
                  {movieData?.Ratings.filter((rating: Rating) => rateLogos[rating.Source])
                    .map((rating: Rating) => 
                      <Rating color={rateLogos[rating.Source].color}>
                        <div>
                          <img src={rateLogos[rating.Source].image} />
                        </div>
                        <div>
                          <p>{rating.Value}</p>
                        </div>
                      </Rating>
                    )
                  }
                  <button onClick={() => updateFavorites()} >{favoriteList.includes(imdbID) ? <><AiFillHeart/> Rmv from </> : <><AiOutlineHeart/> Add to </>}favorites</button>
                </MovieRatings>
                <Plot>
                  <span>Plot</span>
                  <p>{movieData?.Plot}</p>
                </Plot>
                <CastContainer>
                  <Cast>
                    <span>Cast</span>
                    {movieData?.Actors.split(",").map((actor: string) => <p>{actor}</p>)}
                  </Cast>
                  <Cast>
                    <span>Genre</span>
                    <p>{movieData?.Genre.split(",").map((genre: string) => <p>{genre}</p>)}</p>
                  </Cast>
                  <Cast>
                    <span>Director</span>
                    <p>{movieData?.Director.split(",").map((director: string) => <p>{director}</p>)}</p>
                  </Cast>
                </CastContainer>
              </MovieDetails>
              <MovieCover>
                <div>
                  <img src={movieData?.Poster} />
                </div>
              </MovieCover>
            </MovieContainer>
          </>
        }
      </Content>
    </Container>
  );
}

export default Preview;