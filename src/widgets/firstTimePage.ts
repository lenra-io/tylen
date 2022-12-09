'use strict'

export default async (data: any, props: any) => {
    return {
        type: "flex",
        fillParent: true,
        direction: "vertical",
        spacing: 32,
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
                type: "flex",
                fillParent: true,
                mainAxisAlignment: "center",
                crossAxisAlignment: "center",
                children: [
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
                                        spacing: 16,
                                        children: [
                                            {
                                                type: "flex",
                                                direction: "vertical",
                                                children: [
                                                    {
                                                        type: "text",
                                                        value: "Username"
                                                    },
                                                    {
                                                        type: "textfield",
                                                        name: "username",
                                                        value: ""
                                                    },
                                                ]
                                            },
                                            {
                                                type: "flex",
                                                direction: "vertical",
                                                children: [
                                                    {
                                                        type: "text",
                                                        value: "Identifier"
                                                    },
                                                    {
                                                        type: "textfield",
                                                        name: "identifier",
                                                        value: ""
                                                    },
                                                ]
                                            },
                                            {
                                                type: "flex",
                                                direction: "vertical",
                                                children: [
                                                    {
                                                        type: "text",
                                                        value: "Profile picture (enter url of your image) - Facultative"
                                                    },
                                                    {
                                                        type: "textfield",
                                                        name: "profilePicture",
                                                        value: ""
                                                    },
                                                ]
                                            },
                                            {
                                                type: "flex",
                                                direction: "vertical",
                                                children: [
                                                    {
                                                        type: "text",
                                                        value: "Bio - Facultative"
                                                    },
                                                    {
                                                        type: "textfield",
                                                        name: "description",
                                                        value: ""
                                                    },
                                                ]
                                            },
                                            {
                                                type: "button",
                                                text: "Submit",
                                                submit: true,
                                            }
                                        ]
                                    }
                                },
                            ]
                        },
                    },
                ]
            },

        ]
    }
}

