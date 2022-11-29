'use strict'

export default (data, props) => {
  return {
    "type": "flex",
    "direction": "vertical",
    "scroll": true,
    "spacing": 4,
    "crossAxisAlignment": "center",
    "children": [
      {
        "type": "widget",
        "name": "menu",
      },
      {
        "type": "widget",
        "name": "debug"
      }
    ]
  }
}

