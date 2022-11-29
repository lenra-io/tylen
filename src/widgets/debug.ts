'use strict'

export default (data: any, props: any) => {
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
        "type": "flex",
        "direction": "vertical",
        "spacing": 4,
        "mainAxisAlignment": "spaceEvenly",
        "crossAxisAlignment": "center",
        "children": [
          {
            "type": "button",
            "text": "DEBUG",
            "onPressed": {
              "action": "debug",
            }
          }
        ]
      }
    ]
  }
}

