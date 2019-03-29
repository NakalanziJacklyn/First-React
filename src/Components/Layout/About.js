import React, { Component, Fragment } from "react";
import image1 from "./images/apple.jpeg";
import image2 from "./images/fresh.jpeg";
import image3 from "./images/tomato.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="move"> about Page Heading</h1>

        <h2>our team</h2>

        <div className="container">
          <div className="row">
            {/* <!-- Team Member 1 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src="https://source.unsplash.com/TMgQMXoglsM/500x350"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 2 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow">
                <img
                  src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 3 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src="https://source.unsplash.com/sNut2MqSmds/500x350"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 4 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src="https://source.unsplash.com/ZI6p3i9SbVU/500x350"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.row --> */}
        </div>

        <h1>Our Gallery</h1>

        {/* <!-- Page Content --> */}
        <div className="container">
          <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
            Thumbnail Gallery
          </h1>

          <hr className="mt-2 mb-5" />

          <div className="row text-center text-lg-left">
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/aob0ukAYfuI/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/EUfxH-pze7s/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/M185_qYH8vg/400x300"
                  alt=""
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/sesveuG_rNo/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/2gYsZUmockw/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/8mUEy0ABdNE/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/G9Rfc1qccH4/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/aJeH0KcFkuc/400x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        {/* <!-- /.container --> */}

        <h3>Our History</h3>
        <h4>Services Offered</h4>

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="carousel-image" src={image1} />
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>
                    Together we form an ethical food hub creating sustainable
                    change.
                  </h1>
                  <p>
                    “We aim beyond organic to regenerative agriculture. It's
                    good for the soil, the animals, and our health. And I'd
                    rather put my money in my food than my doctor!”.
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      Make an order
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel-image" src={image3} />
              <div className="container">
                <div className="carousel-caption">
                  <h1>GIVE THE GIFT OF FRESH HARVEST.</h1>
                  <p>
                    Gift certificates are the perfect solution for introducing
                    friends and family to automated healthy eating. Show them
                    how it's done!
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      Ready Markets
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel-image" src={image2} />
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1>From the garden! Straignt to your Kitchen.</h1>
                  <p>
                    Get discounts on monthly baskets, from are naerby ready
                    markets and home deliveries.
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      Our Mission
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <h5>Our patterns</h5>
        <h5>Find us at</h5>

        <div className="container">
          <div className="row-fluid">
            <div className="span8">
              <iframe
                width="100%"
                height="350"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Fresh Harvests+Bugolobi,+5th street,+Plot 5,+Design Hub,+Kampala,++256kampabits&t=m&z=14&ll=51.077429,1.121722&output=embed"
              />
            </div>

            <div className="span4">
              <h2>Fresh Harvest</h2>
              <address>
                <strong>Bugolobi</strong>
                <br />
                5th Street
                <br />
                Plot 5
                <br />
               Design Hub
                <br />
                Kampala
                <br />
                +256kampabits.
                <br />
                <abbr title="Phone">P:</abbr> +256784582091
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* export default About; */
}
