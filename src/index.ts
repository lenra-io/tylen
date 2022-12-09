'use strict'
// Widgets

import createPostPage from './widgets/createPostPage';
import debugWidget from './widgets/debug';
import firstTimePage from './widgets/firstTimePage';
import header from './widgets/header';
import homePage from './widgets/homePage';
import mainWidget from './widgets/main';
import menuWidget from './widgets/menu';
import navigator from './widgets/navigator';
import postFeed from './widgets/postFeed';
import profilePictureWithNotification from './widgets/profilePictureWithNotification';

import debugListener from './listeners/debug';
import navigatorListener from './listeners/navigator';
import onEnvStart from './listeners/onEnvStart';
import onSessionStart from './listeners/onSessionStart';
import onUserFirstJoin from './listeners/onUserFirstJoin';
import submitFirstTimePageForm from './listeners/submitFirstTimePageForm';

export default async () => {
  return {
    widgets: {
      createPostPage: createPostPage,
      debug: debugWidget,
      firstTimePage: firstTimePage,
      header: header,
      homePage: homePage,
      main: mainWidget,
      menu: menuWidget,
      navigator: navigator,
      postFeed: postFeed,
      profilePictureWithNotification: profilePictureWithNotification,
    },
    listeners: {
      debug: debugListener,
      navigator: navigatorListener,
      onEnvStart: onEnvStart,
      onSessionStart: onSessionStart,
      onUserFirstJoin: onUserFirstJoin,
      submitFirstTimePageForm: submitFirstTimePageForm,
    },
    rootWidget: 'main'
  }
}