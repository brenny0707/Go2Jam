import BeatMap from '../../beats/beatmap.js';

const cyfEasy0 =
[400, 950];
const cyfEasy1 =
[800, 850, 1100];
const cyfEasy2 =
[1200];
const cyfEasy3 =
[];

const cyfHard0 =
[400, 950, 1760, 2000, 2220];
const cyfHard1 =
[800, 850, 950, 1100, 1625, 1745, 1910, 1970, 2120, 2350, 2430];
const cyfHard2 =
[800, 850, 1100, 1200, 1400, 1460, 1600, 1720, 1880, 2220];
const cyfHard3 =
[400, 1200, 1430, 1575, 1850, 1940, 2120, 2350, 2430];


const cyfEasy = new BeatMap(cyfEasy0, cyfEasy1, cyfEasy2, cyfEasy3);
const cyfHard = new BeatMap(cyfHard0, cyfHard1, cyfHard2, cyfHard3);

const music = {
  title: "Can You Feel",
  songTag: "cyf",
  songOffset: 1000,
  easyBM: cyfEasy,
  hardBM: cyfHard,
};

export default music;
