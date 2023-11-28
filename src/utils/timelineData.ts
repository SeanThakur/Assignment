const Moon = require('../assets/icons/Moon.png');
const Cloud = require('../assets/icons/Cloud.png');
const Rain = require('../assets/icons/Rain.png');
const Wind = require('../assets/icons/Wind.png');

import {TimelineItem} from '../types/data';

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    time: '00:00',
    text: 'Maldives',
    subText: 'Save the Turtles',
    Icon: Moon,
  },
  {
    id: 2,
    time: '08:00',
    text: 'Golden beach',
    subText: 'Surfing on the sea',
    Icon: Cloud,
  },
  {
    id: 3,
    time: '16:00',
    text: 'Coconut grove',
    subText: 'BBQ party by the sea',
    Icon: Wind,
  },
  {
    id: 4,
    time: '23:59',
    text: 'Maldives Islands',
    subText: 'Sea blowing',
    Icon: Rain,
  },
];
