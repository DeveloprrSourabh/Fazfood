import React from "react";
import Banner from "../components/Banner";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Home = () => {
  // Category Slider
  var settings = {
    arrow: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <main id="home-id">
      <div className="home-page">
        <Banner />
        {/* About Section Start */}
        <section id="about" className="position-relative">
          <div className="row">
            <div className="col-sm-3 mt-auto">
              <div className="about-side-img1">
                <img className="w-100" src="./Images/h1_img3.png" alt="" />
              </div>
            </div>
            <div className="col-sm-6">
              {" "}
              <div className="about-section text-center ">
                <h2 className="about-heading pb-2">ABOUT OUR FOOD</h2>
                <h1 className="about-desc ">
                  BEST BURGER IDEAS & TRADITIONS FROM THE WHOLE WORLD
                </h1>
                <div className="detail-desc py-4">
                  The mouth-watering aroma of sizzling burgers now fills the
                  streets of Birmingham thanks to the passionate pursuit of
                  three brothers, the British founders of Faz food. After over
                  50 years of experience in the culinary industry between them,
                  they set out on a journey to discover the ultimate burger.
                </div>
                <div class="order-btn hovers  w-25 m-auto">ABOUT FOOD</div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="about-side-img2">
                <div className="rotate-imgs">
                  <div className="first-img">
                    <img src="./Images/bicon1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}

        {/* Category Section Start  */}
        <section id="category" className="position-relative">
          <div className="cat-section">
            <Slider {...settings}>
              <div className="cat-card">
                <div className="card-img">
                  <Link>
                    <img src="./Images/h1_cat1.png" alt="" />
                  </Link>
                </div>
                <div className="cat-name">
                  <h1 className="name">Burger</h1>
                  <h2 className="catdesc">Your Slogan Here</h2>
                </div>
              </div>
              <div className="cat-card">
                <div className="card-img">
                  <Link>
                    <img src="./Images/h1_cat2.png" alt="" />
                  </Link>
                </div>
                <div className="cat-name">
                  <h1 className="name">Burger</h1>
                  <h2 className="catdesc">Your Slogan Here</h2>
                </div>
              </div>
              <div className="cat-card">
                <div className="card-img">
                  <Link>
                    <img src="./Images/h1_cat3.png" alt="" />
                  </Link>
                </div>
                <div className="cat-name">
                  <h1 className="name">Burger</h1>
                  <h2 className="catdesc">Your Slogan Here</h2>
                </div>
              </div>
              <div className="cat-card">
                <div className="card-img">
                  <Link>
                    <img src="./Images/h1_cat4.png" alt="" />
                  </Link>
                </div>
                <div className="cat-name">
                  <h1 className="name">Burger</h1>
                  <h2 className="catdesc">Your Slogan Here</h2>
                </div>
              </div>
              <div className="cat-card">
                <div className="card-img">
                  <Link>
                    <img src="./Images/h1_cat5.png" alt="" />
                  </Link>
                </div>
                <div className="cat-name">
                  <h1 className="name">Burger</h1>
                  <h2 className="catdesc">Your Slogan Here</h2>
                </div>
              </div>
              <div className="cat-card">
                <div className="card-img">
                  <Link>
                    <img src="./Images/h1_cat6.png" alt="" />
                  </Link>
                </div>
                <div className="cat-name">
                  <h1 className="name">Burger</h1>
                  <h2 className="catdesc">Your Slogan Here</h2>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* Category Section End  */}
      </div>
    </main>
  );
};

export default Home;
