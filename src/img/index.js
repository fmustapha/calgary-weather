import { faCloudSunRain,
    faCloudShowersHeavy,
    faCloudRain,
    faSun,
    faCloud,
    faSnowflake,
    faWater, 
    } from '@fortawesome/free-solid-svg-icons'
// import { yellow } from 'ansi-colors';

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
    snow: {
        alt: "snow",
        src: faSnowflake,
        color: "#ADD8E6",
        id: "6"
    },
    mist: {
        alt: "mist",
        src: faWater,
        color: "black",
        id: "7"
    }
};
  
export default icons;
