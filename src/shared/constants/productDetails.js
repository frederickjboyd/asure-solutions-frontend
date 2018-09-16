import clockIcon from '../../assets/icons/clock-line.svg';
import lightbulbIcon from '../../assets/icons/lightbulb-line.svg';
import portableIcon from '../../assets/icons/shopping-bag-line.svg';
import resistantIcon from '../../assets/icons/firewall-line.svg';

const LTD_DETAILS = [
  {
    img: clockIcon,
    title: 'Accurate',
    description: 'Measure your throw times to an accuracy of just 0.01s.'
  },
  {
    img: lightbulbIcon,
    title: 'Visible',
    description:
      'A clear and vibrant display ensures you’ll be able to throw in any conditions.',
    alignRight: true
  },
  {
    img: portableIcon,
    title: 'Portable',
    description:
      'Take it wherever you go, whether it’s a competition or casual throwing.'
  },
  {
    img: resistantIcon,
    title: 'Impact Resistant',
    description: 'Accidentally miss? No worries.',
    alignRight: true
  }
];

const LTD_TECHNICAL_DETAILS = [
  {
    metric: 'Dimensions',
    value: '12 x 5 x 7 inches'
  },
  {
    metric: 'Weight',
    value: '1.2 kg'
  },
  {
    metric: 'Battery Life',
    value: '5 hours'
  }
];

export { LTD_DETAILS, LTD_TECHNICAL_DETAILS };
