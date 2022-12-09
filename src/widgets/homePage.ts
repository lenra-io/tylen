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
                "name": "header",
                props: {
                    children: [
                        {
                            type: "text",
                            value: "Tylen"
                        }
                    ]
                }
            },
            {
                type: "text",
                value: "Home Page",
            }
        ]
    }
}

