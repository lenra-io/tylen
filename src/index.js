'use strict'
// Widgets

import mainWidget from './widgets/main';
import userDataWidget from './widgets/userData';
import counterWidget from './widgets/counter';
import homeWidget from './widgets/home';
import menuWidget from './widgets/menu';
import debugWidget from './widgets/debug';

import onEnvStart from './listeners/onEnvStart';
import onSessionStart from './listeners/onSessionStart';
import onUserFirstJoin from './listeners/onUserFirstJoin';
import incrementListener from './listeners/increment';
import debugListener from './listeners/debug';

export default async () => {
  return {
    widgets: {
      main: mainWidget,
      userData: userDataWidget,
      counter: counterWidget,
      home: homeWidget,
      menu: menuWidget,
      debug: debugWidget,
    },
    listeners: {
      onEnvStart: onEnvStart,
      onSessionStart: onSessionStart,
      onUserFirstJoin: onUserFirstJoin,
      increment: incrementListener,
      debug: debugListener,
    },
    rootWidget: 'main'
  }
}