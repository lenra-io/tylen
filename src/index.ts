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
import postCard from './widgets/postCard';
import postFeed from './widgets/postFeed';
import postLikeButton from './widgets/postLikeButton';
import profilePictureWithNotification from './widgets/profilePictureWithNotification';

import debugListener from './listeners/debug';
import likePost from './listeners/likePost';
import navigatorListener from './listeners/navigator';
import onEnvStart from './listeners/onEnvStart';
import onSessionStart from './listeners/onSessionStart';
import onUserFirstJoin from './listeners/onUserFirstJoin';
import resetDatabase from './listeners/resetDatabase';
import sendPost from './listeners/sendPost';
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
      postCard: postCard,
      postFeed: postFeed,
      postLikeButton: postLikeButton,
      profilePictureWithNotification: profilePictureWithNotification,
    },
    listeners: {
      debug: debugListener,
      likePost: likePost,
      navigator: navigatorListener,
      onEnvStart: onEnvStart,
      onSessionStart: onSessionStart,
      onUserFirstJoin: onUserFirstJoin,
      resetDatabase: resetDatabase,
      sendPost: sendPost,
      submitFirstTimePageForm: submitFirstTimePageForm,
    },
    rootWidget: 'main'
  }
}