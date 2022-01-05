import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper as SwiperJS, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwiperBanner } from './SwiperBanner';
import { useRouter } from 'next/router';


export function Swiper () {
    const route = useRouter()

    return (
        <SwiperJS
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide onClick={() => route.push('/continent')}>
            <SwiperBanner label='Europa' text='O continente mais antigo.'/>
        </SwiperSlide>

        <SwiperSlide onClick={() => route.push('/continent')}>
            <SwiperBanner label='América do Norte' text='O continente mais antigo.'/>
        </SwiperSlide>

        <SwiperSlide onClick={() => route.push('/continent')}>
            <SwiperBanner label='América do Sul' text='O continente mais antigo.'/>
        </SwiperSlide>

        <SwiperSlide onClick={() => route.push('/continent')}>
            <SwiperBanner label='Ásia' text='O continente mais antigo.'/>
        </SwiperSlide>

        <SwiperSlide onClick={() => route.push('/continent')}>
            <SwiperBanner label='Africa' text='O continente mais antigo.'/>
        </SwiperSlide>

        <SwiperSlide onClick={() => route.push('/continent')}>
            <SwiperBanner label='Oceania' text='O continente mais antigo.'/>
        </SwiperSlide>

        </SwiperJS>
      );
}