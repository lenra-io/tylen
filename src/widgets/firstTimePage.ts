'use strict'

export default async (data: any, props: any) => {
    return {
        type: "flex",
        fillParent: true,
        direction: "vertical",
        children: [
            {
                type: "text",
                value: "Welcome on Tylen!"
            },
            // {
            //     type: "text",
            //     value: "Please enter your username it is the name that will be shown to other users."
            // },
            // {
            //     type: "text",
            //     value: "And your identifier which can be used by other users to find you on Tylen."
            // },
        ]
    }
}

