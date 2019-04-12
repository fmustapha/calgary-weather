import icons from '../img/index'

const getIcon = (icon) => {
    if(icon === '01d') {
        return  icons.sun
    } else if(icon === '02d') {
        return icons.rainSunCloud
    } else if(icon === '03d'){
        return icons.rainyL
    } else if(icon === '04d'){
        return icons.clouds
    } else if(icon === '09d'){
        return icons.rainyH
    } else if(icon === '10d'){
        return icons.rainyL
    } else if(icon === '11d'){
        return icons.rainyH
    } else if(icon === '13d'){
        return icons.snow
    } else if(icon === '50d'){
        return icons.mist
    } else {
        return icons.sun
    }
}

export default getIcon;