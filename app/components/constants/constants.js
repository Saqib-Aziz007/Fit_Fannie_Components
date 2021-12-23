export const colors = {
  APP_COLOR_WHITE: '#FFFFFF',
  APP_COLOR_LIGHT1: '#E5FFFB',
  APP_COLOR_LIGHT2: '#D0F4ED',
  APP_COLOR_LIGHT3: '#99D5CA',
  APP_SECONDARY_COLOR: '#104F55',
  APP_PRIMARY_COLOR: '#F16889',
  APP_COLOR_BLACK: '#000000',
};

export const images = {
  facebook: require('../../../assets/icons/facebook.png'),
  google: require('../../../assets/icons/google.png'),
  twitter: require('../../../assets/icons/twitter.png'),
  login1background: require('../../../assets/images/login1background.png'),
  APP_LOGO: require('../../../assets/images/Logo.png'),
};

export const fontColor = {
  titleColor: '#104F55',
  titleBlack: '#000000',
};

export const videos = [
  {
    id: 1,
    step: 'STEP 1',
    title: 'BOAT POSE',
    subtitle: 'it is a stationary posture that improves',
    video: {
      videoUrl: '',
      thumbnail: require('../../../assets/images/image1.png'),
      locked: false,
    },
  },
  {
    id: 2,
    step: 'STEP 2',
    title: 'The standard Lorem Ipsum passage, used since the 1500s',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    video: {
      videoUrl: '',
      thumbnail: require('../../../assets/images/image2.png'),
      locked: true,
    },
  },
];
