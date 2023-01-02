'use strict'

export default (data: any, props: any) => {
    return {
        type: "stack",
        children: [
            {
                type: "flex",
                direction: "vertical",
                scroll: true,
                spacing: 16,
                crossAxisAlignment: "center",
                children: [
                    {
                        type: "view",
                        name: "header",
                        props: {
                            children: [
                                {
                                    type: "actionable",
                                    onPressed: {
                                        action: "navigator",
                                        props: {
                                            page: "profilePage"
                                        }
                                    },
                                    child: {
                                        type: "view",
                                        name: "profilePictureWithNotification",
                                        coll: "users",
                                        query: {
                                            "id": "@me"
                                        }
                                    }
                                },
                                {
                                    type: "text",
                                    style: {
                                        fontWeight: "bold",
                                        fontSize: 24,
                                    },
                                    value: "Tylen"
                                },
                                {
                                    type: "widget",
                                    name: "searchButton",
                                    coll: "users",
                                    query: {
                                        "id": "@me"
                                    }
                                },

                            ]
                        }
                    },
                    {
                        type: "form",
                        onSubmit: {
                            action: "sendPost"
                        },
                        child: {
                            type: "flex",
                            spacing: 16,
                            mainAxisAlignment: "spaceEvenly",
                            crossAxisAlignment: "center",
                            children: [
                                {
                                    type: "container",
                                    constraints: {
                                        maxWidth: 420,
                                    },
                                    child: {
                                        type: "textfield",
                                        name: "text",
                                        value: "",
                                        style: {
                                            decoration: {
                                                label: {
                                                    type: "text",
                                                    value: "Write a new post"
                                                }
                                            }
                                        }
                                    },
                                },
                                {
                                    type: "button",
                                    submit: true,
                                    text: "Send"
                                },
                            ]
                        },
                    },
                    {
                        type: "view",
                        name: "postFeed",
                        coll: "posts"
                    }
                ]
            },
            // TODO: Use this code for the + button to write posts.
            // {
            //     type: "flex",
            //     direction: "vertical",
            //     crossAxisAlignment: "end",
            //     mainAxisAlignment: "end",
            //     fillParent: true,
            //     children: [
            //         {
            //             type: "flex",
            //             fillParent: true,
            //             crossAxisAlignment: "end",
            //             mainAxisAlignment: "end",
            //             children: [
            //                 {
            //                     type: "button",
            //                     text: "+",
            //                 }
            //             ]
            //         }
            //     ]
            // }
        ]
    }
}

