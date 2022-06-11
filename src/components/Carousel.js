import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import Arrow from '../assets/Arrow.svg';

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import american_express from "../assets/clients/american_express.png"
import nicar_logo from "../assets/clients/nicar_logo.jpeg"
import alkemy_logo from "../assets/clients/alkemy_logo.png"
import cronista_logo from "../assets/clients/cronista_logo.png"
import cronica_logo from "../assets/clients/cronica_logo.png"
import veintitres_logo from "../assets/clients/veintitres_logo.png"

const Container = styled.div`
width: 25vw;
height: 70vh;
margin-top: 40vh;

@media (max-width: 70em) {
    height: 60vh;
}

@media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
}

@media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
}

@media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
}

.swiper {
    width: 100%;
    height: 40%;
}

.swiper-slide {
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
    border-radius: 20px;
    display: flex;
    align-items: center;
    border: 1px solid black;

    img {
        width: 100%;
        height: 100%;
        position: center;
    }
}

.swiper-button-next {
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    background: url(${Arrow}) center/cover;

    &::after {
        display: none;
    }

    @media (max-width: 64em) {
        width: 3rem;
    }

    @media (max-width: 38em) {
        width: 2rem;
    }
}

.swiper-button-prev {
    color: ${props => props.theme.text};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);
    background: url(${Arrow}) center/cover;

    &::after {
        display: none;
    }
    
    @media (max-width: 64em) {
        width: 3rem;
    }

    @media (max-width: 38em) {
        width: 2rem;
    }
}
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            pagination={{
                type: 'fraction'
            }}
            scrollbar={{
                draggable: true
            }}
            navigation={true}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={american_express} alt="American Express" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={nicar_logo} alt="Nic Argentina" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={alkemy_logo} alt="Alkemy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cronista_logo} alt="Cronista Comercial" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cronica_logo} alt="Cronica" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={veintitres_logo} alt="Revista Veintitres" />
            </SwiperSlide>
        </Swiper>
    </Container>
  )
}

export default Carousel