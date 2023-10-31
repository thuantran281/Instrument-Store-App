import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import GuitarCarousel1 from "../Assets/Carousel Images/music-guitar-acoustic-guitar-band-black-acoustic-829783-pxhere.com.jpg";
import GuitarCarousel2 from "../Assets/Carousel Images/free-photo-of-guitarist-playing-acoustic-guitar-with-capo-on-the-fretboard.jpg";
import GuitarCarousel3 from "../Assets/Carousel Images/pexels-rebecca-swafford-625788.jpg";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100 carousel_image"
          src={GuitarCarousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 carousel_image"
          src={GuitarCarousel2}
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 carousel_image"
          src={GuitarCarousel3}
          alt="third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
