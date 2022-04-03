
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Autoplay} from 'swiper'
import "swiper/css";
import "swiper/css/navigation";
import './Slider.css'
import sliderImage from './media/banner01.jpg'
import sliderImage2 from './media/banner02.jpg'
import sliderImage3 from './media/banner03.jpg'
let sliderArray=[sliderImage,sliderImage2,sliderImage3]
let HomeSlider=()=>{
  return(<>
<Swiper rewind={true} navigation={true} modules={[Navigation,Autoplay]} autoplay={true} className="home-slider">
  {sliderArray.map((slides,idx)=><SwiperSlide><img src={slides} alt="slider" /></SwiperSlide>)}
</Swiper></>)
}

export {HomeSlider}