'use strict'

export default (data: any, props: any) => {
    return {
        type: "flex",
        direction: "vertical",
        children: [
            {
                type: "view",
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

