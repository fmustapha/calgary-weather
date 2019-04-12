import getIcon from '../../services/weatherIcons';
import icons from '../../img/index'

describe('getIcon Function ', () => {
    it('should return the the right icon for the weather', () => {
        expect(getIcon('01d')).toEqual(icons.sun);
        expect(getIcon('02d')).toEqual(icons.rainSunCloud);
        expect(getIcon('03d')).toEqual(icons.rainyL);
        expect(getIcon('04d')).toEqual(icons.clouds);
        expect(getIcon('09d')).toEqual(icons.rainyH);
        expect(getIcon('10d')).toEqual(icons.rainyL);
        expect(getIcon('11d')).toEqual(icons.rainyH);
        expect(getIcon('13d')).toEqual(icons.snow);
        expect(getIcon('50d')).toEqual(icons.mist);
    })
})
