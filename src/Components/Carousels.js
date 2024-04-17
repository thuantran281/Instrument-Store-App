import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../Assets/Carousel Images/music-guitar-acoustic-guitar-band-black-acoustic-829783-pxhere.com.jpg";
import Carousel2 from "../Assets/Carousel Images/pexels-photo-1246437.jpeg";
import Carousel3 from "../Assets/Carousel Images/50981482131_dd59887f02_b.jpg";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_image"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_image"
          src={Carousel2}
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_image"
          src={Carousel3}
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
