'use strict'
// Views

import createPostPage from './views/createPostPage';
import debugView from './views/debug';
import editProfilePage from './views/editProfilePage';
import firstTimePage from './views/firstTimePage';
import header from './views/header';
import homePage from './views/homePage';
import mainView from './views/main';
import menuView from './views/menu';
import navigator from './views/navigator';
import postCard from './views/postCard';
import postCommentButton from './views/postCommentButton';
import postFeed from './views/postFeed';
import postLikeButton from './views/postLikeButton';
import profilePage from './views/profilePage';
import profilePictureWithNotification from './views/profilePictureWithNotification';
import searchButton from './views/searchButton';

import debugListener from './listeners/debug';
import likePost from './listeners/likePost';
import navigatorListener from './listeners/navigator';
import onEnvStart from './listeners/onEnvStart';
import onSessionStart from './listeners/onSessionStart';
import onUserFirstJoin from './listeners/onUserFirstJoin';
import openSearch from './listeners/openSearch';
import resetDatabase from './listeners/resetDatabase';
import sendPost from './listeners/sendPost';
import submitFirstTimePageForm from './listeners/submitFirstTimePageForm';
import validateEntry from './listeners/validateEntry';

export default async () => {
  return {
    views: {
      createPostPage: createPostPage,
      debug: debugView,
      editProfilePage: editProfilePage,
      firstTimePage: firstTimePage,
      header: header,
      homePage: homePage,
      main: mainView,
      menu: menuView,
      navigator: navigator,
      postCard: postCard,
      postCommentButton: postCommentButton,
      postFeed: postFeed,
      postLikeButton: postLikeButton,
      profilePage: profilePage,
      profilePictureWithNotification: profilePictureWithNotification,
      searchButton: searchButton
    },
    listeners: {
      debug: debugListener,
      likePost: likePost,
      navigator: navigatorListener,
      onEnvStart: onEnvStart,
      onSessionStart: onSessionStart,
      onUserFirstJoin: onUserFirstJoin,
      openSearch: openSearch,
      resetDatabase: resetDatabase,
      sendPost: sendPost,
      submitFirstTimePageForm: submitFirstTimePageForm,
      validateEntry: validateEntry,
    },
    rootView: 'main'
  }
}