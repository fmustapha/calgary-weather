import {
  faCloudSunRain,
  faCloudShowersHeavy,
  faCloudRain,
  faSun,
  faCloud,
  faSnowflake,
  faWater,
  faCloudSun,
  faCloudMoon,
  faMoon,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  sun: {
    alt: "Sun",
    src: faSun,
    color: "yellow",
    id: "1"
  },
  clouds: {
    alt: "cloudy",
    src: faCloud,
    color: "blue",
    id: "2"
  },
  rainyL: {
    alt: "rainL",
    src: faCloudRain,
    color: "#00BFFF",
    id: "3"
  },
  rainy2: {
    alt: "rainH",
    src: faCloudShowersHeavy,
    color: "#00BFFF",
    id: "4"
  },
  rainSunCloud: {
    alt: "rain-sun-cloud",
    src: faCloudSunRain,
    color: "orange",
    id: "5"
  },
  sunCloud: {
    alt: "few-clouds",
    src: faCloudSun,
    color: "yellow",
    id: "6"
  },
  moonCloud: {
    alt: "scattered-clouds",
    src: faCloudMoon,
    color: "burlywood",
    id: "7"
  },
  moon: {
    alt: "clear-sky-moon",
    src: faMoon,
    color: "saddlebrown",
    id: "8"
  },
  thunderstorm: {
    alt: "thunderstorm",
    src: faBolt,
    color: "black",
    id: "9"
  },
  snow: {
    alt: "snow",
    src: faSnowflake,
    color: "#ADD8E6",
    id: "10"
  },
  mist: {
    alt: "mist",
    src: faWater,
    color: "black",
    id: "11"
  }
};

export default icons;
