import React, { useState } from "react";
import "./ListItems.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

function ListItems(props) {
   return (
      <Swiper
         slidesPerView={props.perPage}
         autoplay={{
            delay: props.delay,
            disableOnInteraction: false,
         }}
         spaceBetween={20}
         // navigation={true}
         modules={[Autoplay]}
      >

         {props.list ?
            props.list.map((e, i) => (
               <SwiperSlide>
                  <li className={`grid__content ${props.className}`} key={i}>
                     <div className="grid__item">
                        <img src={e.fullPortrait ? e.fullPortrait : e.displayIcon} />
                        <p>{e.displayName}</p>
                     </div>

                     {props.className === "weapons" && (
                        <>
                           <div className="weapons__cost">
                              <p>${e.shopData && e.shopData.cost ? e.shopData.cost : "free"}</p>
                           </div>

                           <div className="weapons__category">
                              <p>{e.shopData && e.shopData.category}</p>
                           </div>
                        </>
                     )
                     }
                  </li>
               </SwiperSlide>
            ))
            : null}
      </ Swiper >
   )
}

export default ListItems;
