
const forecast = [
    {
      0: {
        clouds: { all: 92 },
        dt: "1555038000",
        dt_txt: "2019-04-12 03:00:00",
        main: {
          temp: -0.77,
          temp_min: -0.77,
          temp_max: 4.31,
          pressure: 1015.41,
          sea_level: 1015.41
        },
        rain: "{3h: 0.64}",
        snow: {},
        sys: "{pod: 'n'}",
        weather: [{}],
        wind: { speed: 2.86, deg: 18.5003 }
      }
    }
  ];

export default async (resolve, reject) => {
  return await new Promise(resolve => {
          resolve(forecast);
  });
}