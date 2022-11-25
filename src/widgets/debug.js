'use strict'

export default (data, counter) => {
    return {
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
}

