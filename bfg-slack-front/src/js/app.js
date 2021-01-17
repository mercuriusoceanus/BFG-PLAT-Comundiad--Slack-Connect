import '../scss/app.scss';
import slackConnect from './slackConnect';
// Your JS Code goes here
const BFG = {
  init: (type) => {
    document.addEventListener('DOMContentLoaded', () => {
      if (type === 'slackConnect') slackConnect().init();
    });
  },
};

BFG.init('slackConnect');
