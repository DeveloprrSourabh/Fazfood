import React from "react";
import Slider from "react-slick";
const Banner = () => {
  // Banner Slider
  var settings = {
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home-banner">
      <Slider {...settings}>
        <div className="home-slider position-relative">
          <div className="row banner-row no-gutters">
            <div className="col-sm-6 position-relative   p-0">
              <div className="main-banner position-relative">
                <div className="layer">
                  {" "}
                  <img
                    width={100}
                    src="./Images/gallery-1.jpg"
                    alt=""
                    className="main-banner-img"
                  />
                </div>
                <div className="rotate-img">
                  <div className="first-img">
                    <img src="./Images/bicon1.png" alt="" />
                  </div>
                  <div className="second-img">
                    <img src="./Images/bicon2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-0">
              <div className="banner-side-img main-banner">
                <img width={100} src="./Images/rev_home1.jpg" alt="" />
              </div>
            </div>
            <div className="banner-caption">
              <h2 className="heading">spicy fried burger</h2>
              <div className="desc mt-3 mb-3">
                secret family recipesare the stuff of legends and stack burger
                blend is no exception
              </div>
              <div class="order-btn hovers w-25">ORDER NOW</div>
            </div>
          </div>
        </div>
        <div className="home-slider position-relative">
          <div className="row banner-row no-gutters">
            <div className="col-sm-6 position-relative   p-0">
              <div className="main-banner position-relative">
                <div className="layer">
                  {" "}
                  <img
                    width={100}
                    src="./Images/gallery-2.jpg"
                    alt=""
                    className="main-banner-img"
                  />
                </div>
                <div className="rotate-img">
                  <div className="first-img">
                    <img src="./Images/bicon1.png" alt="" />
                  </div>
                  <div className="second-img">
                    <img src="./Images/bicon2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-0">
              <div className="banner-side-img main-banner">
                <img width={100} src="./Images/rev_home1.jpg" alt="" />
              </div>
            </div>
            <div className="banner-caption">
              <h2 className="heading">spicy fried burger</h2>
              <div className="desc mt-3 mb-3">
                secret family recipesare the stuff of legends and stack burger
                blend is no exception
              </div>
              <div class="order-btn hovers w-25">ORDER NOW</div>
            </div>
          </div>
        </div>
        <div className="home-slider position-relative">
          <div className="row banner-row no-gutters">
            <div className="col-sm-6 position-relative   p-0">
              <div className="main-banner position-relative">
                <div className="layer">
                  {" "}
                  <img
                    width={100}
                    src="./Images/gallery-3.jpg"
                    alt=""
                    className="main-banner-img"
                  />
                </div>
                <div className="rotate-img">
                  <div className="first-img">
                    <img src="./Images/bicon1.png" alt="" />
                  </div>
                  <div className="second-img">
                    <img src="./Images/bicon2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-0">
              <div className="banner-side-img main-banner">
                <img width={100} src="./Images/rev_home1.jpg" alt="" />
              </div>
            </div>
            <div className="banner-caption">
              <h2 className="heading">spicy fried burger</h2>
              <div className="desc mt-3 mb-3">
                secret family recipesare the stuff of legends and stack burger
                blend is no exception
              </div>
              <div class="order-btn hovers w-25">ORDER NOW</div>
            </div>
          </div>
        </div>
        <div className="home-slider position-relative">
          <div className="row banner-row no-gutters">
            <div className="col-sm-6 position-relative   p-0">
              <div className="main-banner position-relative">
                <div className="layer">
                  {" "}
                  <img
                    width={100}
                    src="./Images/gallery-4.jpg"
                    alt=""
                    className="main-banner-img"
                  />
                </div>
                <div className="rotate-img">
                  <div className="first-img">
                    <img src="./Images/bicon1.png" alt="" />
                  </div>
                  <div className="second-img">
                    <img src="./Images/bicon2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 p-0">
              <div className="banner-side-img main-banner">
                <img width={100} src="./Images/rev_home1.jpg" alt="" />
              </div>
            </div>
            <div className="banner-caption">
              <h2 className="heading">spicy fried burger</h2>
              <div className="desc mt-3 mb-3">
                secret family recipesare the stuff of legends and stack burger
                blend is no exception
              </div>
              <div class="order-btn hovers w-25">ORDER NOW</div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
