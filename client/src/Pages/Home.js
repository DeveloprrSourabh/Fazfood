import React from "react";
import Banner from "../components/Banner";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Home = () => {
  // Category Slider
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  // Best Selling Slider
  var bestselling = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  // Client Slider
  var clientSlide = {
    arrows: false,
    infinite: true,
    speed: 500,
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // Gallery Slider
  var gallerySlide = {
    arrows: false,
    infinite: true,
    speed: 500,
    dots: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  //  Linear Slider
  var linearSlide = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    dots: false,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    waitForAnimate: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <Layout>
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
                    50 years of experience in the culinary industry between
                    them, they set out on a journey to discover the ultimate
                    burger.
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

          {/* Offer Section Start */}
          <section id="offer" className="position-relative">
            <div className="today-offer w-50 mx-auto text-center">
              <div className="offer-heading mb-5">
                <h2>TODAY'S A</h2>
                <h2>STACKIN' DAY</h2>
              </div>
              <div className="offer-sub-heading">
                <h4>MEDIUM 4-TOPPING* BURGER</h4>
                <h5 className="mx-auto">
                  *Additional charge for premium toppings. Minimum of 2
                  required.
                </h5>
              </div>
              <div class="mx-auto order-btn hovers w-25">SHOP NOW</div>
            </div>
          </section>
          {/* Offer Section End */}

          {/* Best Selling Section Start */}
          <section id="best-selling" className="position-relative">
            <div className="bestselling">
              <div className="linear-slider pb-5">
                <Slider {...linearSlide}>
                  <div className="continuous-slide">
                    <h2>POPULAR DISHES • POPULAR DISHES •</h2>
                  </div>
                  <div className="continuous-slide">
                    <h2>POPULAR DISHES • POPULAR DISHES •</h2>
                  </div>
                </Slider>
              </div>
              <div className="bestselling-heading">
                <h2 className="text-center mt-2 mb-5">BEST SELLING DISHES</h2>
              </div>
              <Slider {...bestselling}>
                <div className="bestselling-product px-3">
                  <div className="product">
                    <div className="bestselling-img">
                      <Link>
                        <img
                          className="w-100"
                          src="./Images/product_26.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-title mb-2">
                      <Link to={""}>Whopper Burger King</Link>
                    </div>
                    <div className="product-desc mb-4">
                      Voluptatem dolores eaque omnis modi qui repellat. Vero
                      aperiam ill...
                    </div>
                    <div className="price-cart d-flex justify-content-between align-items-center">
                      <div className="product-price">12.39</div>
                      <div class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bestselling-product px-3">
                  <div className="product">
                    <div className="bestselling-img">
                      <Link>
                        <img
                          className="w-100"
                          src="./Images/product_27.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-title mb-2">
                      <Link to={""}>Whopper Burger King</Link>
                    </div>
                    <div className="product-desc mb-4">
                      Voluptatem dolores eaque omnis modi qui repellat. Vero
                      aperiam ill...
                    </div>
                    <div className="price-cart d-flex justify-content-between align-items-center">
                      <div className="product-price">19.90</div>
                      <div class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bestselling-product px-3">
                  <div className="product">
                    <div className="bestselling-img">
                      <Link>
                        <img
                          className="w-100"
                          src="./Images/product_22.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-title mb-2">
                      <Link to={""}>Whopper Burger King</Link>
                    </div>
                    <div className="product-desc mb-4">
                      Voluptatem dolores eaque omnis modi qui repellat. Vero
                      aperiam ill...
                    </div>
                    <div className="price-cart d-flex justify-content-between align-items-center">
                      <div className="product-price">78.98</div>
                      <div class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bestselling-product px-3">
                  <div className="product">
                    <div className="bestselling-img">
                      <Link>
                        <img
                          className="w-100"
                          src="./Images/product_23.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-title mb-2">
                      <Link to={""}>Whopper Burger King</Link>
                    </div>
                    <div className="product-desc mb-4">
                      Voluptatem dolores eaque omnis modi qui repellat. Vero
                      aperiam ill...
                    </div>
                    <div className="price-cart d-flex justify-content-between align-items-center">
                      <div className="product-price">12.39</div>
                      <div class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bestselling-product px-3">
                  <div className="product">
                    <div className="bestselling-img">
                      <Link>
                        <img
                          className="w-100"
                          src="./Images/product_25.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-title mb-2">
                      <Link to={""}>Whopper Burger King</Link>
                    </div>
                    <div className="product-desc mb-4">
                      Voluptatem dolores eaque omnis modi qui repellat. Vero
                      aperiam ill...
                    </div>
                    <div className="price-cart d-flex justify-content-between align-items-center">
                      <div className="product-price">18.00</div>
                      <div class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="bestselling-main-desc text-center py-5 w-75 mx-auto">
              Fazfood is a unique and independent quick service brand. Fazfood
              burgers and shakes are made pretty hot and tasty. The ultimate
              “melt in your mouth” experience. We are a fast-casual operation
              with dine in and take-away elements.
            </div>
            <div
              style={{ width: "13%" }}
              class="mx-auto order-btn hovers  mx-auto text-center"
            >
              VIEW ALL
            </div>
          </section>
          {/* Best Selling Section End */}

          {/* Three Main Food Start */}
          <section id="threefood" className="position-relative">
            <div className="three-main-food">
              <div className="row">
                <div className="col-sm-4 p-0">
                  <div className="three-food">
                    <div className="img">
                      <img
                        id="compl-img"
                        width={"100%"}
                        src="./Images/h2_img-2.png"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      {" "}
                      <div className="heading">
                        <h2>Fash Food </h2>
                        <h2>MEALS</h2>
                      </div>
                      <div className="three-food-desc py-3">
                        <p className="m-0">NEW PHENOMENON</p>
                        <p className="m-0">BURGER TASTE</p>
                      </div>
                      <div className="price">$59,00</div>
                      <div class=" my-4 order-btn hovers w-50   text-center">
                        Order
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 ">
                  <div className="three-food">
                    <div className="img">
                      <img
                        id="compl-img"
                        width={"100%"}
                        src="./Images/h2_img-3.png"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      {" "}
                      <div className="heading">
                        <h2>Fash Food </h2>
                        <h2>MEALS</h2>
                      </div>
                      <div className="three-food-desc py-3">
                        <p className="m-0">NEW PHENOMENON</p>
                        <p className="m-0">BURGER TASTE</p>
                      </div>
                      <div className="price">$59,00</div>
                      <div class=" my-4 order-btn hovers w-50   text-center">
                        Order
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 p-0">
                  <div className="three-food">
                    <div className="img">
                      <img
                        id="compl-img"
                        width={"100%"}
                        src="./Images/h2_img-2.png"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      {" "}
                      <div className="heading">
                        <h2>Fash Food </h2>
                        <h2>MEALS</h2>
                      </div>
                      <div className="three-food-desc py-3">
                        <p className="m-0">NEW PHENOMENON</p>
                        <p className="m-0">BURGER TASTE</p>
                      </div>
                      <div className="price">$59,00</div>
                      <div class=" my-4 order-btn hovers w-50   text-center">
                        Order
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Three Main Food End */}
          {/* Testimonials Section Start */}
          <section id="best-selling" className="position-relative">
            <div className="bestselling">
              <div className="linear-slider pb-5">
                <Slider {...linearSlide}>
                  <div className="continuous-slide">
                    <h2>TESTIMONIALS • TESTIMONIALS • </h2>
                  </div>
                  <div className="continuous-slide">
                    <h2>TESTIMONIALS • TESTIMONIALS •</h2>
                  </div>
                </Slider>
              </div>
              <div className="bestselling-heading">
                <h2 className="text-center mt-2 mb-3">WHAT OUR CLIENT SAYS</h2>
                <div class="bestselling-main-desc text-center  w-25 mx-auto">
                  A team of dreamers and doers building unique interactive music
                  and art festivals.
                </div>
              </div>
              <div className="clientslider py-5">
                <Slider {...clientSlide}>
                  <div className="main-client px-2">
                    <div className="client-card">
                      <div className="client-content pb-4">
                        “ Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites”
                      </div>
                      <div className="client-deails d-flex align-items-center">
                        <div className="client-img pe-4">
                          <img src="./Images/avarta2.png" alt="" />
                        </div>
                        <div className="client-name">Jennifer G</div>
                      </div>
                    </div>
                  </div>
                  <div className="main-client px-2">
                    <div className="client-card">
                      <div className="client-content pb-4">
                        “ Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites”
                      </div>
                      <div className="client-deails d-flex align-items-center">
                        <div className="client-img pe-4">
                          <img src="./Images/avarta2.png" alt="" />
                        </div>
                        <div className="client-name">Jennifer G</div>
                      </div>
                    </div>
                  </div>
                  <div className="main-client px-2">
                    <div className="client-card">
                      <div className="client-content pb-4">
                        “ Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites”
                      </div>
                      <div className="client-deails d-flex align-items-center">
                        <div className="client-img pe-4">
                          <img src="./Images/avarta2.png" alt="" />
                        </div>
                        <div className="client-name">Jennifer G</div>
                      </div>
                    </div>
                  </div>
                  <div className="main-client px-2">
                    <div className="client-card">
                      <div className="client-content pb-4">
                        “ Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites”
                      </div>
                      <div className="client-deails d-flex align-items-center">
                        <div className="client-img pe-4">
                          <img src="./Images/avarta2.png" alt="" />
                        </div>
                        <div className="client-name">Jennifer G</div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
          {/* Testimonials Section Start */}

          {/* Blog Sectioin Start */}
          <section id="best-selling" className="position-relative">
            <div className="bestselling">
              <div className="bestselling-heading">
                <div class="blog-heading">WHAT'S UP BLOG</div>
                <h2 className="text-center mt-2 mb-3">WHAT OUR CLIENT SAYS</h2>
              </div>
              <div className="clientslider py-5">
                <Slider {...clientSlide}>
                  <div className="blog-card px-3">
                    <div className="blog-img">
                      <Link to={""}>
                        <img src="./Images/blog_8-820x620.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="blog-details mt-2">
                      <Link to={""}>
                        <span className="date">october 19,2023 </span>
                      </Link>
                      <Link to={""}>
                        <span className="comment">. comments(3)</span>
                      </Link>
                    </div>
                    <div className="blog-title my-2">
                      <Link to={""}>
                        Fast Food Frenzy: A Taste of Convenience
                      </Link>
                    </div>
                    <div className="blog-description mb-4 mt-3">
                      <p className="m-0">
                        Ac haca ullamcorper donec ante habi tasse donec
                        imperdiet eturpis varius per a augue magna hac. Nec hac
                        et vestibulu...
                      </p>
                    </div>
                    <div className="read-more">
                      <Link to={""}>READ MORE </Link>
                    </div>
                  </div>
                  <div className="blog-card px-3">
                    <div className="blog-img">
                      <Link to={""}>
                        <img src="./Images/blog_9-820x620.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="blog-details mt-2">
                      <Link to={""}>
                        <span className="date">october 19,2023 </span>
                      </Link>
                      <Link to={""}>
                        <span className="comment">. comments(3)</span>
                      </Link>
                    </div>
                    <div className="blog-title my-2">
                      <Link to={""}>
                        Fast Food Frenzy: A Taste of Convenience
                      </Link>
                    </div>
                    <div className="blog-description mb-4 mt-3">
                      <p className="m-0">
                        Ac haca ullamcorper donec ante habi tasse donec
                        imperdiet eturpis varius per a augue magna hac. Nec hac
                        et vestibulu...
                      </p>
                    </div>
                    <div className="read-more">
                      <Link to={""}>READ MORE </Link>
                    </div>
                  </div>
                  <div className="blog-card px-3">
                    <div className="blog-img">
                      <Link to={""}>
                        <img src="./Images/blog_10-820x620.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="blog-details mt-2">
                      <Link to={""}>
                        <span className="date">october 19,2023 </span>
                      </Link>
                      <Link to={""}>
                        <span className="comment">. comments(3)</span>
                      </Link>
                    </div>
                    <div className="blog-title my-2">
                      <Link to={""}>
                        Fast Food Frenzy: A Taste of Convenience
                      </Link>
                    </div>
                    <div className="blog-description mb-4 mt-3">
                      <p className="m-0">
                        Ac haca ullamcorper donec ante habi tasse donec
                        imperdiet eturpis varius per a augue magna hac. Nec hac
                        et vestibulu...
                      </p>
                    </div>
                    <div className="read-more">
                      <Link to={""}>READ MORE </Link>
                    </div>
                  </div>
                  <div className="blog-card px-3">
                    <div className="blog-img">
                      <Link to={""}>
                        <img src="./Images/blog_11-820x620.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="blog-details mt-2">
                      <Link to={""}>
                        <span className="date">october 19,2023 </span>
                      </Link>
                      <Link to={""}>
                        <span className="comment">. comments(3)</span>
                      </Link>
                    </div>
                    <div className="blog-title my-2">
                      <Link to={""}>
                        Fast Food Frenzy: A Taste of Convenience
                      </Link>
                    </div>
                    <div className="blog-description mb-4 mt-3">
                      <p className="m-0">
                        Ac haca ullamcorper donec ante habi tasse donec
                        imperdiet eturpis varius per a augue magna hac. Nec hac
                        et vestibulu...
                      </p>
                    </div>
                    <div className="read-more">
                      <Link to={""}>READ MORE </Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
          {/* Blog Sectioin End */}

          {/* Gallery Section Start */}
          <section id="gallery-section">
            <div className="home-gallery">
              <Slider {...gallerySlide}>
                <div className="gallery-img">
                  <img src="./Images/gallery5.jpg" alt="" />
                </div>
                <div className="gallery-img">
                  <img src="./Images/gallery1.jpg" alt="" />
                </div>
                <div className="gallery-img">
                  <img src="./Images/gallery2.jpg" alt="" />
                </div>
                <div className="gallery-img">
                  <img src="./Images/gallery3.jpg" alt="" />
                </div>
                <div className="gallery-img">
                  <img src="./Images/gallery4.jpg" alt="" />
                </div>
                <div className="gallery-img">
                  <img src="./Images/gallery1.jpg" alt="" />
                </div>
              </Slider>
            </div>
          </section>
          {/* Gallery Section End */}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
