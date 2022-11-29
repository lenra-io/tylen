'use strict'
// Widgets

import mainWidget from './widgets/main';
import menuWidget from './widgets/menu';
import debugWidget from './widgets/debug';

import onEnvStart from './listeners/onEnvStart';
import onSessionStart from './listeners/onSessionStart';
import onUserFirstJoin from './listeners/onUserFirstJoin';
import debugListener from './listeners/debug';

export default async () => {
  return {
    widgets: {
      main: mainWidget,
      menu: menuWidget,
      debug: debugWidget,
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