import BeatMap from '../../beats/beatmap.js';

const baEasy0 =
[400, 950];
const baEasy1 =
[800, 850, 1100];
const baEasy2 =
[1200];
const baEasy3 =
[];

const baHard0 =
[400, 950, 1760, 2000, 2220];
const baHard1 =
[800, 850, 950, 1100, 1625, 1745, 1910, 1970, 2120, 2350, 2430];
const baHard2 =
[800, 850, 1100, 1200, 1400, 1460, 1600, 1720, 1880, 2220];
const baHard3 =
[400, 1200, 1430, 1575, 1850, 1940, 2120, 2350, 2430];


const baEasy = new BeatMap(baEasy0, baEasy1, baEasy2, baEasy3);
const baHard = new BeatMap(baHard0, baHard1, baHard2, baHard3);

const music = {
  title: "Bach Alive",
  songTag: "ba",
  songOffset: 1000,
  easyBM: baEasy,
  hardBM: baHard,
};

export default music;
