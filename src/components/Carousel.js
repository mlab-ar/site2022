import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import Arrow from '../assets/Arrow.svg';

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import croatia from '../assets/Nfts/card-croatia.jpeg'
import england from '../assets/Nfts/card-england.jpeg'
import france from '../assets/Nfts/card-france.jpeg'
import iran from '../assets/Nfts/card-iran.jpeg'
import saudiArabia from '../assets/Nfts/card-saudi-arabia.jpeg'
import serbia from '../assets/Nfts/card-serbia.jpeg'
import southKorea from '../assets/Nfts/card-south-korea.jpeg'
import spain from '../assets/Nfts/card-spain.jpeg'
import switzerland from '../assets/Nfts/card-switzerland.jpeg'

const Container = styled.div`
width: 25vw;
height: 70vh;

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
    height: 100%;
}

.swiper-slide {
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
    border-radius: 20px;
    display: flex;
    align-items: center;
    border: 1px solid black;

    img {
        width: auto;
        height: 80%;
        position: relative;
        left: 16%;
        right: 50%;
        margin: 1rem;
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
                <img src={croatia} alt="Token Sport NFT" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={england} alt="Token Sport NFT" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={france} alt="Token Sport NFT" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={iran} alt="Token Sport NFT" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={saudiArabia} alt="Token Sport NFT" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={serbia} alt="Token Sport NFT" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={southKorea} alt="Token Sport NFT" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={spain} alt="Token Sport NFT" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={switzerland} alt="Token Sport NFT" />
            </SwiperSlide>
        </Swiper>
    </Container>
  )
}

export default Carousel