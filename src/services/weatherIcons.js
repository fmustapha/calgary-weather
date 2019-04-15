import icons from '../img/index'

const getIcon = (icon) => {
    if(icon === '01d' || icon === '01n') {
        return  icons.sun
    } else if(icon === '02d' || icon === '02n') {
        return icons.rainSunCloud
    } else if(icon === '03d' || icon === '03n'){
        return icons.rainyL
    } else if(icon === '04d' || icon === '04n'){
        return icons.clouds
    } else if(icon === '09d' || icon === '09n'){
        return icons.rainyH
    } else if(icon === '10d' || icon === '10n'){
        return icons.rainyL
    } else if(icon === '11d' || icon === '11n'){
        return icons.rainyH
    } else if(icon === '13d' || icon === '13n'){
        return icons.snow
    } else if(icon === '50d' || icon === '50n'){
        return icons.mist
    } else {
        return icons.sun
    }
}

export default getIcon;