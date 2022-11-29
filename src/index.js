'use strict'
// Widgets

import debugWidget from './widgets/debug';
import firstTimePage from './widgets/firstTimePage';
import mainWidget from './widgets/main';
import menuWidget from './widgets/menu';
import navigator from './widgets/navigator';

import debugListener from './listeners/debug';
import onEnvStart from './listeners/onEnvStart';
import onSessionStart from './listeners/onSessionStart';
import onUserFirstJoin from './listeners/onUserFirstJoin';

export default async () => {
  return {
    widgets: {
      debug: debugWidget,
      firstTimePage: firstTimePage,
      main: mainWidget,
      menu: menuWidget,
      navigator: navigator
    },
    listeners: {
      onEnvStart: onEnvStart,
      onSessionStart: onSessionStart,
      onUserFirstJoin: onUserFirstJoin,
      debug: debugListener,
    },
    rootWidget: 'main'
  }
}