'use strict'

export default async (data: any, props: any) => {
    return {
        type: "flex",
        fillParent: true,
        direction: "vertical",
        spacing: 16,
        children: [
            {
                type: "widget",
                name: "header",
                props: {
                    children: [
                        {
                            type: "text",
                            value: "Tylen"
                        },
                    ]
                }
            },
            {
                type: "container",
                constraints: {
                    maxWidth: 600,
                },
                child: {
                    type: "flex",
                    fillParent: true,
                    direction: "vertical",
                    mainAxisAlignment: "center",
                    crossAxisAlignment: "center",
                    spacing: 16,
                    children: [
                        {
                            type: "text",
                            value: "Welcome on Tylen! Please set up your profile."
                        },
                        {
                            type: "form",
                            onSubmit: {
                                action: "submitFirstTimePageForm",
                            },
                            child: {
                                type: "flex",
                                direction: "vertical",
                                children: [
                                    {
                                        type: "text",
                                        value: "Please enter your username."
                                    },
                                    {
                                        type: "textfield",
                                        name: "username",
                                        value: ""
                                    },
                                    {
                                        type: "text",
                                        value: "And your identifier which can be used by other users to find you on Tylen."
                                    },
                                    {
                                        type: "textfield",
                                        name: "identifier",
                                        value: ""
                                    },
                                    {
                                        type: "textfield",
                                        name: "profilePicture",
                                        value: ""
                                    },
                                    {
                                        type: "textfield",
                                        name: "description",
                                        value: ""
                                    },
                                ]
                            }
                        },
                    ]
                },
            },
        ]
    }
}

