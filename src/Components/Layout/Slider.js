import React, { Component } from "react";
import image1 from "./images/apple.jpeg";
import image2 from "./images/fresh.jpeg";
import image3 from "./images/tomato.jpeg";

class Silder extends Component {
  render() {
    return (
      <div id="myCarousel" classNameName="carousel slide" data-ride="carousel">
        <ol classNameName="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" classNameName="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>
        <div classNameName="carousel-inner">
          <div classNameName="carousel-item active">
            <img classNameName="carousel-image" src={image1} />
            <div classNameName="container">
              <div classNameName="carousel-caption text-left">
                <h1>
                  Together we form an ethical food hub creating sustainable
                  change.
                </h1>
                <p>
                  “We aim beyond organic to regenerative agriculture. It's good
                  for the soil, the animals, and our health. And I'd rather put
                  my money in my food than my doctor!”.
                </p>
                <p>
                  <a classNameName="btn btn-lg btn-primary" href="#" role="button">
                    Make an order
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div classNameName="carousel-item">
            <img classNameName="carousel-image" src={image3} />
            <div classNameName="container">
              <div classNameName="carousel-caption">
                <h1>GIVE THE GIFT OF FRESH HARVEST.</h1>
                <p>
                  Gift certificates are the perfect solution for introducing
                  friends and family to automated healthy eating. Show them how
                  it's done!
                </p>
                <p>
                  <a classNameName="btn btn-lg btn-primary" href="#" role="button">
                    Ready Markets
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div classNameName="carousel-item">
            <img classNameName="carousel-image" src={image2} />
            <div classNameName="container">
              <div classNameName="carousel-caption text-right">
                <h1>From the garden! Straignt to your Kitchen.</h1>
                <p>
                  Get discounts on monthly baskets, from are naerby ready
                  markets and home deliveries.
                </p>
                <p>
                  <a classNameName="btn btn-lg btn-primary" href="#" role="button">
                    Our Mission
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          classNameName="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span classNameName="carousel-control-prev-icon" aria-hidden="true" />
          <span classNameName="sr-only">Previous</span>
        </a>
        <a
          classNameName="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span classNameName="carousel-control-next-icon" aria-hidden="true" />
          <span classNameName="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Silder;
