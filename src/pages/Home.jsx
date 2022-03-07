import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/button/Button";
import HeroSlide from '../components/hero-slide/Heroslide';
import MovieList from '../components/movie-list/MovieList';
import { category, movieType, tvType } from "../api/tmdbApi";
const Home = () =>{
    return (
        <div>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Films</h2>
                        <Link to="/movie">
                        <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Films</h2>
                        <Link to="/movie">
                        <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Popular Shows</h2>
                        <Link to="/movie">
                        <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </div>
    );
}
export default Home;