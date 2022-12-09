'use strict'

export default (data: any, props: any) => {
    return {
        type: "flex",
        direction: "vertical",
        children: [
            {
                type: "widget",
                name: "header",
                props: {
                    children: [
                        {
                            type: "text",
                            value: "Tylen"
                        }
                    ]
                }
            }
        ]
    }
}

