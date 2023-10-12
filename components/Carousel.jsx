import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Mars from "@/public/destination/image-mars.webp";
import Moon from "@/public/destination/image-moon.webp";
import Europa from "@/public/destination/image-europa.webp";
import Titan from "@/public/destination/image-titan.webp";
import { destinations } from "@/data.json";
import Planet from "./ui/Planet";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="p-20 px-40 m-auto">
        <Slider {...settings}>
          <Planet
            name={destinations[1].name}
            image={Mars}
            description={destinations[1].description}
            distance={destinations[1].distance}
            travel={destinations[1].travel}
          />
          <Planet
            name={destinations[0].name}
            image={Moon}
            description={destinations[0].description}
            distance={destinations[0].distance}
            travel={destinations[0].travel}
          />
          <Planet
            name={destinations[2].name}
            image={Europa}
            description={destinations[2].description}
            distance={destinations[2].distance}
            travel={destinations[2].travel}
          />
          <Planet
            name={destinations[3].name}
            image={Titan}
            description={destinations[3].description}
            distance={destinations[3].distance}
            travel={destinations[3].travel}
          />
        </Slider>
      </div>
    );
  }
}
