import BeatMap from '../../beats/beatmap.js';

const cyfEasy0 =
[400, 950, 1950, 2600, 4140];
const cyfEasy1 =
[800, 850, 1100, 1850, 2900, 3290, 3860, 4280, 5480, 5620, 5720, 5820, 5960, 6100];
const cyfEasy2 =
[1200, 1400, 1700, 2230, 3150, 3580, 4000, 4420, 4560, 4700, 4840, 4980, 5120, 5260, 5410, 5550, 5650, 5750, 5890, 6020, 6140];
const cyfEasy3 =
[1550, 2130, 2330, 2430, 3430, 3720, 6210];

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
  easy: cyfEasy,
  hard: cyfHard,
};

export default music;
