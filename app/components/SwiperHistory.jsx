"use client";

import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "@/app/globals.css";

// STYLES
import styles from "@/public/styles/components/swiper_history.module.scss";

export default function SwiperHistory() {
  const galleryItems = [
    "/images/2. history_section/history-thumbnail-1.png",
    "/images/2. history_section/history-thumbnail-2.png",
    "/images/2. history_section/history-thumbnail-1.png",
    "/images/2. history_section/history-thumbnail-2.png",
    "/images/2. history_section/history-thumbnail-1.png",
    "/images/2. history_section/history-thumbnail-2.png",
    "/images/2. history_section/history-thumbnail-1.png",
    "/images/2. history_section/history-thumbnail-2.png",
    "/images/2. history_section/history-thumbnail-1.png",
    "/images/2. history_section/history-thumbnail-2.png",
    "/images/2. history_section/history-thumbnail-1.png",
    "/images/2. history_section/history-thumbnail-2.png",
  ];
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles.history_swiper}
      breakpoints={{
        320: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        600: {
          slidesPerView: 2,
        },
        750: {
          slidesPerView: 3,
        },
        // 800: {
        //   slidesPerView: 3,
        // },
        900: {
          slidesPerView: 4,
        },
      }}
    >
      {galleryItems.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image src={item} alt='gallery item' width={220} height={135} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
