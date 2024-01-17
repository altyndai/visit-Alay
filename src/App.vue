<template>
  <!-- ===========================header====================================== -->
  <header class="header">
    <div class="header-info">
      <div class="container">
        <div class="navbar">
          <div class="logo__nav">
            <h1 class="logo">A</h1>
            <h2 class="logo__name">VISIT ALAY</h2>
          </div>
          <div class="header__menu">
            <ul class="menu">
              <li class="menu__item">
                <a class="menu__item-link" href="#">Home</a>
              </li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Activities</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
            <select>
              <option selected>En</option>
              <option>Ru</option>
              <option>Kg</option>
            </select>
            <div class="search">
              <img src="./assets/img/search.png" alt="" />
            </div>
          </div>
          <div class="burger">
            <div class="burger__item"></div>
            <div class="burger__item"></div>
            <div class="burger__item"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bunner__title">
      <div class="container">
        <div class="bunner__title__item">
          <h1 class="bunner__title__them">Ala Kul Lake Trek</h1>
          <p class="bunner__subtitle">
            EXPLORE THE BEST OF TIAN - SHAN MOUNTAINS
          </p>
        </div>
      </div>
    </div>
  </header>
  <!-- ===========================header====================================== -->

  <!-- ===========================visit-alay====================================== -->
  <section class="visit-alay">
    <div class="visit-alay-project">
      <div class="container">
        <div class="description__box">
          <div class="description__col">
            <div class="description__block">
              <a class="description__item">Overview</a>
            </div>
          </div>
          <div class="description__col">
            <div class="description__block">
              <a class="description__item">Itinerary</a>
            </div>
          </div>
          <div class="description__col">
            <div class="description__block">
              <a class="description__item">Prices & Dates</a>
            </div>
          </div>
          <div class="description__col border-none">
            <div class="description__block">
              <a class="description__item">Trip Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ===========================visit-alay====================================== -->

  <!-- ===========================txt__info====================================== -->
  <section class="txt__info">
    <div class="container">
      <h2 class="txt__info__title">Ala Kul lake</h2>
      <p :class="title" class="txt__info__p">
        Ala-Kul is one of the most inaccessible sights of Kyrgyzstan. Despite
        the fact that the lake is located very close to the city of Karakol, it
        is very difficult to get to it by car. First of all, this is due to the
        poor quality of roads in local gorges — it is possible to drive there
        only on a prepared SUV with an experienced driver. Another option is to
        walk all the way. The path from the entrance to the Karakol gorge to the
        lake itself is about 30 kilometers. The same applies to the
        Altyn-Arashan gorge. An interesting option for a multi-day hike.Ala-Kul
        really impresses with its colors: bright turquoise water juxtaposes with
        snow that does not m... <span @click="click">Еще</span>
      </p>
      <p :class="content" class="txt__info__p-2">
        Ala-Kul is one of the most inaccessible sights of Kyrgyzstan. Despite
        the fact that the lake is located very close to the city of Karakol, it
        is very difficult to get to it by car. First of all, this is due to the
        poor quality of roads in local gorges — it is possible to drive there
        only on a prepared SUV with an experienced driver. Another option is to
        walk all the way. The path from the entrance to the Karakol gorge to the
        lake itself is about 30 kilometers. The same applies to the
        Altyn-Arashan gorge. An interesting option for a multi-day hike.Ala-Kul
        really impresses with its colors: bright turquoise water juxtaposes with
        snow that does not m... even in summer, green grass and mountain flowers
        of various shades. The lake is located really high — at 3500 meters
        above sea level. Of all the high-altitude lakes of Kyrgyzstan, Ala-Kul
        is perhaps the most favorite among tourists, due to its extraordinary
        beauty and large size. The size of the lake, by the way, is almost 3
        kilometers long and 500 meters wide. The total length of the coastline
        is 7 kilometers.
      </p>
    </div>
  </section>
  <!-- ===========================txt__info====================================== -->

  <!-- ===========================about__trekking====================================== -->
  <section class="about__trekking">
    <div class="container">
      <h2 class="about__trekking__title">About trekking</h2>
      <div class="about__trekking__box">
        <div class="about__trekking__col">
          <div class="about__trekking__block">
            <img
              class="about__trekking__img"
              src="./assets/img/Black.svg"
              alt=""
            />
            <p class="about__trekking__p">
              Issyk Kol region, <br />
              Karakul city, <br />
              Tian Shan Mountains
            </p>
          </div>
        </div>
        <div class="about__trekking__col">
          <div class="about__trekking__block">
            <img
              class="about__trekking__img"
              src="./assets/img/Group 144.svg"
              alt=""
            />
            <p class="about__trekking__p">Distance 41 km</p>
          </div>
        </div>
        <div class="about__trekking__col">
          <div class="about__trekking__block">
            <img
              class="about__trekking__img"
              src="./assets/img/Black1.svg"
              alt=""
            />
            <p class="about__trekking__p">4 days / 3 nights <br /></p>
          </div>
        </div>
        <div class="about__trekking__col">
          <div class="about__trekking__block">
            <img
              class="about__trekking__img"
              src="./assets/img/Black2.svg"
              alt=""
            />
            <p class="about__trekking__p">
              Moderate to <br />
              Demanding <br />
              depending on <br />
              physical fitness
            </p>
          </div>
        </div>
        <div class="about__trekking__col">
          <div class="about__trekking__block">
            <img class="img_svg" src="./assets/img/Black3.svg" alt="" />
            <p class="about__trekking__p">
              Max elevation <br />
              3950 m
            </p>
          </div>
        </div>
        <div class="about__trekking__col">
          <div class="about__trekking__block">
            <img class="img_svg" src="./assets/img/Black.svg" alt="" />
            <p class="about__trekking__p">
              Min elevation <br />
              2450 m
            </p>
          </div>
        </div>
        <div class="about__trekking__col">
          <div class="about__trekking__block">
            <img class="img_svg" src="./assets/img/Group 151.svg" alt="" />
            <p class="about__trekking__p">
              July to mid <br />
              September
            </p>
          </div>
        </div>
        <div class="about__trekking__col">
          <div class="about__trekking__block">
            <img class="img_svg" src="./assets/img/Black4.svg" alt="" />
            <p class="about__trekking__p">
              Karakul City-Terskey <br />
              Ala Too range of Tian <br />
              Shan mountains
            </p>
          </div>
        </div>
      </div>
      <div class="about__trekking__button">
        <button class="button_btn1">Book a place</button>

        <button class="button_btn2">Contact</button>
      </div>
    </div>
  </section>
  <!-- ===========================about__trekking====================================== -->

  <!-- ===========================gallery====================================== -->
  <section class="gallery">
    <div class="gallery-info">
      <div class="container">
        <h2 class="gallery__them">Destination Galery</h2>
        <div class="gallery__box">
          <div class="gallery__block w-66">
            <div class="gallery__inblock">
              <img src="./assets/img/1.png" alt="" />
            </div>
          </div>
          <div class="gallery__block w-33">
            <div class="gallery__inblock">
              <img src="./assets/img/2.png" alt="" />
            </div>
          </div>
          <div class="gallery__block w-33">
            <div class="gallery__inblock">
              <img src="./assets/img/3.png" alt="" />
            </div>
          </div>
          <div class="gallery__block w-33">
            <div class="gallery__inblock">
              <img src="./assets/img/4.png" alt="" />
            </div>
          </div>
          <div class="gallery__block w-33">
            <div class="gallery__inblock">
              <img src="./assets/img/5.png" alt="" />
            </div>
          </div>
        </div>
        <button class="gallery__button">
          Watch more <img src="./assets/img/strelka.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
  <!-- ===========================gallery====================================== -->

  <!-- ===========================coments====================================== -->
  <section class="coments">
    <div class="container">
      <div class="coments__info">
        <h2 class="coments__them">What our clients say about us</h2>
        <div class="coments__box">
          <div class="coments__col">
            <div class="coments__block">
              <img
                class="coments__vector"
                src="./assets/img/vector.svg"
                alt=""
              />
              <p class="coments__title">
                I recommend a very good tour to everyone, it was fun all the
                days, especially I liked the Ala Kul Lake
              </p>
              <img class="coments__acaunt" src="./assets/img/img.svg" alt="" />
              <p class="coments__subtitle">Elizabet Dejon</p>
            </div>
          </div>
          <div class="coments__col">
            <div class="coments__block">
              <img
                class="coments__vector"
                src="./assets/img/vector.svg"
                alt=""
              />
              <p class="coments__title">
                I recommend a very good tour to everyone, it was fun all the
                days, especially I liked the Ala Kul Lake
              </p>
              <img class="coments__acaunt" src="./assets/img/icon.svg" alt="" />
              <p class="coments__subtitle">Elizabet Dejon</p>
            </div>
          </div>
          <div class="coments__col">
            <div class="coments__block">
              <img
                class="coments__vector"
                src="./assets/img/vector.svg"
                alt=""
              />
              <p class="coments__title">
                I recommend a very good tour to everyone, it was fun all the
                days, especially I liked the Ala Kul Lake
              </p>
              <img
                class="coments__acaunt"
                src="./assets/img/icon2.svg"
                alt=""
              />
              <p class="coments__subtitle">Elizabet Dejon</p>
            </div>
          </div>
        </div>
        <button class="coments__button">view all comments ></button>
      </div>
    </div>
  </section>
  <!-- ===========================coments====================================== -->

  <!-- ===========================connection====================================== -->
  <section class="connection">
    <div class="container">
      <div class="connection__info">
        <h2 class="connection__them">Get in touch</h2>
        <div class="connection__Get">
          <input
            type="text"
            placeholder="Full name"
            class="connection__touch"
          />

          <input
            type="text"
            placeholder="Email address"
            class="connection__touch"
          />
        </div>
        <input
          type="text"
          placeholder="Your massage"
          class="connection__massage"
        />
        <button class="connection__button">Submit</button>
      </div>
    </div>
  </section>
  <!-- ===========================connection====================================== -->

  <!-- ===========================Similar-tours====================================== -->
  <section class="Similar-tours">
    <div class="container">
      <h2 class="Similar-tours__them">Similar tours</h2>
      <swiper
        :rewind="true"
        :navigation="true"
        :modules="modules"
        :slidesPerView="3"
        :spaceBetween="75"
        class="mySwiper"
        :breakpoints="{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }"
      >
        <swiper-slide v-for="tour in similarTours" :key="tour.id">
          <div class="similar-tour">
            <div class="similar-tour__img">
              <img :src="tour.img" :alt="tour.caption" />
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <h3 class="similar-tour__caption">
                {{ tour.caption }}
              </h3>

              <span class="similar-tour__price">
                {{ tour.price }}
              </span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="similar-tour__details">
                <div>{{ tour.place }}</div>
                <div>{{ tour.duration }}</div>
              </div>
              <button class="connection__button">Submit</button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <!-- ===========================Similar-tours====================================== -->

  <!-- ===========================footer====================================== -->
  <footer class="footer">
    <div class="container">
      <div class="footer-visit-alay">
        <div class="footer__box">
          <div class="footer__col">
            <div class="footer__block">
              <h2 class="footer__destination">Destination</h2>
              <div class="div"></div>
              <p>Kyrgyzstan</p>
              <p>Uzbekstan</p>
              <p>Tajikistan</p>
            </div>
          </div>
          <div class="footer__col">
            <div class="footer__block">
              <h2 class="footer__destination">Activities</h2>
              <div class="div"></div>
              <p>Treks</p>
              <p>Horse treks</p>
              <p>Pamir Highway tours</p>
              <p>Cultural tours</p>
            </div>
          </div>
          <div class="footer__col">
            <div class="footer__block">
              <h2 class="footer__destination">Core Values</h2>
              <div class="div"></div>
              <p>
                Community development <br />
                programs
              </p>
              <p>Stay local</p>
              <p>Helping travellers</p>
              <p>Nature car</p>
            </div>
          </div>
          <div class="footer__col">
            <div class="footer__block">
              <h2 class="footer__destination">Contact</h2>
              <div class="div"></div>
              <div class="contact-info">
                <img
                  class="contact-info__phont-number"
                  src="./assets/img/phone.svg"
                  alt=""
                />
                <p>+996(555) 07-76-21</p>
              </div>
              <div class="contact-info">
                <img
                  class="contact-info__phont-number"
                  src="./assets/img/phone2.svg"
                  alt=""
                />
                <p>+996(555) 07-76-21</p>
              </div>
              <div class="contact-info">
                <img
                  class="contact-info__phont-number"
                  src="./assets/img/phone3.svg"
                  alt=""
                />
                <p>oshtours@gmail.com</p>
              </div>
              <div class="contact-info">
                <img
                  class="contact-info__phont-number"
                  src="./assets/img/phone4.svg"
                  alt=""
                />
                <p>Kyrgyzstan, Osh</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__info">
          <p>Visit Alay 2018</p>
          <div class="footer__img-info">
            <img src="./assets/img/Twitter.svg" alt="" />
            <img class="img" src="./assets/img/Facebook.svg" alt="" />
            <img class="img" src="./assets/img/Union.svg" alt="" />
          </div>
          <p>@contrast_design</p>
        </div>
      </div>
    </div>
  </footer>
  <!-- ===========================footer====================================== -->
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { ref, Ref } from "vue";

const modules: Ref<any[]> = ref([Navigation]);

const similarTours: any[] = [
  {
    id: 1,
    img: "img/img1.png",
    caption: "Lenin peak base camp trek",
    place: "Tajikistan - Pamir Highway",
    duration: "11 - days",
    price: 500,
  },

  {
    id: 2,
    img: "img/img2.png",
    caption: "Pamir Highway-Dushanbe",
    place: "Kyrgyzstan - Osh",
    duration: "5 - days horse trek",
    price: 1500,
  },
  {
    id: 3,
    img: "img/img3.png",
    caption: "Nomadic horse riding",
    place: "Kyrgyzstan - Osh ",
    duration: "Lenin peak - 8 days",
    price: 600,
  },
  {
    id: 4,
    img: "img/img1.png",
    caption: "Lenin peak base camp trek",
    place: "Tajikistan - Pamir Highway",
    duration: "11 - days",
    price: 500,
  },

  {
    id: 5,
    img: "img/img2.png",
    caption: "Pamir Highway-Dushanbe",
    place: "Kyrgyzstan - Osh",
    duration: "5 - days horse trek",
    price: 1500,
  },
  {
    id: 6,
    img: "img/img3.png",
    caption: "Nomadic horse riding",
    place: "Kyrgyzstan - Osh ",
    duration: "Lenin peak - 8 days",
    price: 600,
  },
];
let title = ref("title");
let content = ref("content");
function click() {
  title.value = "text-one";
  content.value = "text-two";
}
</script>

<style>
a:hover {
  color: inherit;
}
.title {
  display: block;
}
content {
  display: none;
}
.text-one {
  display: none;
}
.text-two {
  display: block;
}
.header {
  background-image: url(../src/assets/img/Rectangle168.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
}

.header-info {
  width: 100%;
  height: 132.14px;
  background: rgba(217, 217, 217, 0.5);
  backdrop-filter: blur(30px);
  position: fixed;
  z-index: 1000;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 132px;
}
.logo__nav {
  display: flex;
  align-items: center;
}
.logo {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 67.2505px;
  line-height: 82px;
  color: #24c358;
  margin-left: 15px;
}
.logo__name {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;

  color: #05a0f2;
}
.header__menu {
  display: flex;
  align-items: center;
}
.header__menu ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
}
ul li {
  margin-left: 53px;
  list-style: none;
}
li a {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
  text-decoration: none;
}
select {
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 20px;
}
option {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #141414;
}
.bunner__title__item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 765px;
}
.bunner__title__them {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
}
.bunner__subtitle {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
}

.burger {
  width: 30px;
  height: 25px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
}
.burger__item {
  background-color: #141414;
  height: 2.5px;
  width: 100%;
}

@media screen and (max-width: 992px) {
  .burger {
    display: flex;
    cursor: pointer;
  }
  .header__menu {
    display: none;
  }
}
/* =========================== */
.description__box {
  padding: 40px 0px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  transform: translateY(-50%);
  display: flex;
}
.description__col {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  border: 0;
  border-right: 1px #000000 solid;
}

.border-none {
  border: 0;
}
.description__block {
  text-align: center;
}
.description__item {
  margin-bottom: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #141414;
  text-decoration: none;
}
/* ============================= */
.txt__info__title {
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #141414;
  margin-top: 74px;
  margin-bottom: 20px;
}
.txt__info__p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 136.2%;
  color: #000000;
}

.text-2 {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 136.2%;
  color: #000000;
  display: none;
}
.about__trekking__title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #141414;
  margin-top: 70px;
  margin-bottom: 78px;
  text-align: center;
}
.about__trekking__box {
  display: flex;
  margin-left: -20px;
  flex-wrap: wrap;
}
.about__trekking__col {
  width: 25%;
  padding-left: 20px;
  margin-bottom: 20px;
}
.about__trekking__img {
  margin-bottom: 40px;
}
.about__trekking__p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  color: #141414;
}
.about__trekking__block {
  height: 414.03px;
  border: 1px solid #000000;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about__trekking__button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 82px;
}
.button_btn1 {
  width: 238.28px;
  height: 75.54px;
  background: #141414;
  border-radius: 10px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
}
.button_btn2 {
  width: 238.28px;
  height: 75.54px;
  border: 1px solid #000000;
  border-radius: 10px;
  margin-left: 20px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #141414;
}

/* ==========GALLERY========== */
.gallery-info {
  display: flex;
  justify-content: center;
}
.gallery__them {
  text-align: center;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;

  color: #141414;
  margin-top: 120px;
  margin-bottom: 70px;
}
.gallery__box {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0px;
  margin-left: -30px;
}
.gallery__block {
  padding-left: 30px;
  margin-bottom: 30px;
}

.w-66 {
  width: 66.66666666%;
}
.w-33 {
  width: 33.3333333%;
}

.gallery__block img {
  width: 100%;
  height: 460px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
}
.gallery__button {
  width: 164.96px;
  height: 38.55px;
  background: #141414;
  border-radius: 3.78846px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 17.6795px;
  line-height: 21px;

  color: #ffffff;
  margin: auto;
  display: block;
}
/* ==========GALLERY========== */
/*===What our clients say about us===  */
.coments__info {
  display: flex;
  flex-direction: column;

  align-items: center;
}
.coments__them {
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #141414;
}
.coments__box {
  display: flex;
  margin-left: -20px;
  flex-wrap: wrap;
}
.coments__col {
  width: 33.3333%;
  padding-left: 20px;
  margin-bottom: 20px;
}
.coments__block {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 2px 8px 32px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.coments__vector {
  margin-top: 29px;
  margin-bottom: 48px;
}
.coments__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #141414;
  text-align: center;
}
.coments__acaunt {
  margin-top: 62px;
}
.coments__subtitle {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
}
.coments__button {
  width: 271.75px;
  height: 52.98px;
  border: 1px solid #141414;
  border-radius: 4px;
}
/*===What our clients say about us===  */

/* =============connection========= */
.connection__info {
  margin-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.connection__them {
  text-align: center;
  margin-bottom: 115px;
}
.connection__Get {
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  width: 100%;
}
.connection__touch {
  border: none;
  border-bottom: 1px solid #141414;
  width: 45%;
}
.connection__massage {
  width: 100%;
  border: none;
  border-bottom: 1px solid #141414;
  margin-bottom: 65px;
}
.connection__button {
  background: #141414;
  border-radius: 3.78846px;
  width: 122.77px;
  height: 38.55px;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 17.6795px;
  line-height: 21px;

  color: #ffffff;
}
/* =============connection========= */

/* =============swiper============== */
.slide__img {
  width: 100%;
}
.block {
  width: 100%;
  height: auto;
}
.block img {
  object-fit: cover;
  object-position: center;
}
.Similar-tours__them {
  text-align: center;
  margin-bottom: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #141414;
}
.Similar-tours {
  margin-top: 20px;
  margin-bottom: 20px;
}

.similar-tour {
  font-family: "Gilroy";
}
.similar-tour__img img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}
.similar-tour__caption {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: #161616;
}
.similar-tour__price {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #141414;
}
.similar-tour__details {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #686868;
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: calc(var(--swiper-navigation-sides-offset, 10px) - 2rem) !important;
  z-index: 1000 !important;
  right: auto;
}
/* =============swiper============== */

/* ================footer=========== */
.footer {
  background-image: url(../src/assets/img/footer.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.footer__box {
  display: flex;
  margin-left: -100px;
  flex-wrap: wrap;
}
.footer__col {
  width: 25%;
  padding-left: 100px;
  margin-bottom: 20px;
}
.footer__destination {
  margin-top: 80px;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
}
.div {
  margin-bottom: 60px;
}
p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}
.contact-info {
  display: flex;
  align-items: center;
}
.contact-info__phont-number {
  margin-right: 10px;
}
.footer__info {
  display: flex;
  justify-content: space-between;
}
.img {
  margin-left: 20px;
}
/* ================footer=========== */
@media screen and (max-width: 992px) {
  .description__item {
    padding: 30px 0px;
  }
  .about__trekking__col {
    width: 33.3333%;
  }
  .coments__col {
    width: 50%;
  }
  .footer__destination {
    font-size: 20px;
  }
  p {
    font-size: 12px;
  }
}
@media screen and (max-width: 768px) {
  .description__item {
    font-size: 26px;
  }
  .txt__info__p {
    font-size: 28px;
  }
  .about__trekking__col {
    width: 50%;
  }
  .button_btn1 {
    width: 180px;
    height: 60px;
    font-size: 18px;
  }
  .button_btn2 {
    width: 180px;
    height: 60px;
    font-size: 18px;
  }
  .gallery__them {
    font-size: 40px;
  }

  .w-66 {
    width: 100%;
  }
  .w-33 {
    width: 50%;
  }
  .coments__button {
    width: 180px;
    height: 40px;
  }
}
@media screen and (max-width: 576px) {
  .bunner__title__them {
    font-size: 40px;
  }
  .bunner__subtitle {
    font-size: 22px;
  }
  .txt__info__title {
    font-size: 27px;
  }
  .txt__info__p {
    font-size: 24px;
  }
  .about__trekking__title {
    font-size: 34px;
  }
  .gallery__them {
    font-size: 36px;
  }
  .coments__them {
    font-size: 27px;
  }
  .footer__col {
    width: 50%;
  }
}
@media screen and (max-width: 414px) {
  .description__item {
    font-size: 18px;
  }
  .about__trekking__col {
    width: 100%;
  }
  .button_btn1 {
    width: 140px;
    height: 50px;
  }
  .button_btn2 {
    width: 140px;
    height: 50px;
  }
  .coments__col {
    width: 100%;
  }
  .Similar-tours__them {
    font-size: 34px;
  }
}
@media screen and (max-width: 320px) {
  .bunner__title__them {
    font-size: 38px;
  }
  .bunner__subtitle {
    font-size: 18px;
  }
  .description__item {
    font-size: 13px;
  }
  .w-33 {
    width: 100%;
  }
  .txt__info__p {
    font-size: 20px;
  }
  .about__trekking__title {
    font-size: 32px;
  }
  p {
    font-size: 7px;
  }
}
</style>
