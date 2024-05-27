import GuitarProduct from "../../Assets/Images/Guitar Products/2019-12-22-00_540.cef335a3cc4d2fe270b9.jpg";
import PianoProduct from "../../Assets/Images/Piano Products/pexels-photo-164743.jpeg";
import DrumProduct from "../../Assets/Images/Drum Products/px1566055-image-kwvxvjxm.jpg";
import UkuleleProduct from "../../Assets/Images/Ukulele Products/pexels-photo-4215460.jpeg";
import OrganProduct from "../../Assets/Images/Organ Products/pexels-photo-164951.jpeg";
import { CgPiano } from "react-icons/cg";
import { PiGuitarBold } from "react-icons/pi";
import { FaDrum } from "react-icons/fa";

const GuitarSliderUrl = [
  { url: GuitarProduct },
  { url: GuitarProduct },
  { url: GuitarProduct },
  { url: GuitarProduct },
  { url: GuitarProduct },
  { url: GuitarProduct },
];

const PianoSliderUrl = [
  { url: PianoProduct },
  { url: PianoProduct },
  { url: PianoProduct },
  { url: PianoProduct },
  { url: PianoProduct },
  { url: PianoProduct },
];

const DrumSliderUrl = [
  { url: DrumProduct },
  { url: DrumProduct },
  { url: DrumProduct },
  { url: DrumProduct },
  { url: DrumProduct },
  { url: DrumProduct },
];

const OrganSliderUrl = [
  { url: OrganProduct },
  { url: OrganProduct },
  { url: OrganProduct },
  { url: OrganProduct },
  { url: OrganProduct },
  { url: OrganProduct },
];

const UkuleleSliderUrl = [
  { url: UkuleleProduct },
  { url: UkuleleProduct },
  { url: UkuleleProduct },
  { url: UkuleleProduct },
  { url: UkuleleProduct },
  { url: UkuleleProduct },
];

const slideUrlsMap = {
  Guitar: {
    slideUrls: GuitarSliderUrl,
    icon: <PiGuitarBold />,
  },
  Ukulele: {
    slideUrls: UkuleleSliderUrl,
    icon: <PiGuitarBold />,
  },
  Piano: {
    slideUrls: PianoSliderUrl,
    icon: <CgPiano />,
  },
  Organ: {
    slideUrls: OrganSliderUrl,
    icon: <CgPiano />,
  },
  Drum: {
    slideUrls: DrumSliderUrl,
    icon: <FaDrum />,
  },
};

// eslint-disable-next-line
export default {
  GuitarSliderUrl,
  PianoSliderUrl,
  DrumSliderUrl,
  OrganSliderUrl,
  UkuleleSliderUrl,
  slideUrlsMap
};
