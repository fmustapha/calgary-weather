import getIcon from '../../services/weatherIcons';
import icons from '../../img/index'

describe('getIcon Function ', () => {
    it('should return the the right icon for the weather', () => {
        expect(getIcon('01d'|| '01n')).toEqual(icons.sun);
        expect(getIcon('02d' || '02n')).toEqual(icons.rainSunCloud);
        expect(getIcon('03d' || '03n')).toEqual(icons.rainyL);
        expect(getIcon('04d' || '04n')).toEqual(icons.clouds);
        expect(getIcon('09d' || '09n')).toEqual(icons.rainyH);
        expect(getIcon('10d' || '10n')).toEqual(icons.rainyL);
        expect(getIcon('11d' || '11d')).toEqual(icons.rainyH);
        expect(getIcon('13d' || '13n')).toEqual(icons.snow);
        expect(getIcon('50d' || '50n')).toEqual(icons.mist);
    })
})
