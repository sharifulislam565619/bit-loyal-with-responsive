import React from "react";
// import required modules
import { Grid, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../images/nft/Group 2.png';
import img2 from '../../images/nft/Group 3.png';
import img3 from '../../images/nft/Group 4.png';
import img4 from '../../images/nft/Group 5.png';
import img5 from '../../images/nft/Group 6.png';
import img6 from '../../images/nft/Group 7.png';
import img7 from '../../images/nft/Group 8.png';
import './Nft.css';






const Nft = () => {
   return (
      <div id="nft_swiper_wrapper">
         <Swiper
            slidesPerView={4.6}
            
            spaceBetween={15}

           
            className="mySwiper"
         >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
         </Swiper>


         <Swiper
            slidesPerView={6.2}
            
            spaceBetween={15}
           
            className="mySwiper"
         >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Nft;