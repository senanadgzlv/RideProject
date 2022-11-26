import React from "react";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import bg1 from "../../../assets/img/h4-slider01-1.jpg";
import bg1photo from "../../../assets/img/h4-slider1.png";
import bg2 from "../../../assets/img/slider2.jpg";
import bg3 from "../../../assets/img/slider3.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Lang from "../../Lang/Lang";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { t } from "i18next";

const Slider = () => {

  const { t } = useTranslation();
  return (
    <section className="hero">
      <Swiper
        modules={[EffectFade, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={true}
        speed={500}
        effect={"fade"}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <SwiperSlide>
          <img
            src={bg1}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="text text1">
                  <p>BIKE CLOTHING</p>
                  <h1>
                    {t("hero.0")} <br /> {t("hero.1")} <br /> {t("hero.2")}
                  </h1>
                  <Link to="/shop">{t("hero.3")}</Link>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="image">
                  <img width="500" src={bg1photo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={bg2}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />

          <div className="text text2">
            <p>T5 Helmet Pro</p>
            <h1>
              More Protection <br /> Perfect Fit
            </h1>
            <p>
              <span>Save $150</span> with orders over $1500
            </p>
            <Link to="/shop"> Shop All apparel</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg3}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />

          <div className="text text3">
            <h1>Up To 30% Off</h1>
            <h3>
              Save on cycle & <br /> Adventure <br /> Clothing
            </h3>
            <h5 className="mb-5">Helping You Stay active this season</h5>
            <Link to="/shop" className="shop  ">
              Shop Now
            </Link>
            <Link to="/shop" className="product ">
              {" "}
              Explore Product
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
