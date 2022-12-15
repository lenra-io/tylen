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
                        type: "widget",
                        name: "header",
                        props: {
                            children: [
                                {
                                    type: "actionable",
                                    onPressed: {
                                        action: "navigator",
                                        props: {
                                            page: "homePage"
                                        }
                                    },
                                    child: {
                                        type: "icon",
                                        size: 36,
                                        value: "home"
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
                                    type: "actionable",
                                    onPressed: {
                                        action: "openSearch"
                                    },
                                    child: {
                                        type: "icon",
                                        size: 36,
                                        value: "search",
                                    }
                                },
                            ]
                        }
                    },
                    {
                        type: "button",
                        onPressed: {
                            action: "navigator",
                            props: {
                                page: "messagesPage"
                            }
                        },
                        text: "Messages"
                    },
                    {
                        type: "button",
                        onPressed: {
                            action: "navigator",
                            props: {
                                page: "subscribersPage"
                            }
                        },
                        text: "Subscribers"
                    },
                    {
                        type: "button",
                        onPressed: {
                            action: "navigator",
                            props: {
                                page: "subscribedToPage"
                            }
                        },
                        text: "Subscribed to"
                    },
                    {
                        type: "button",
                        onPressed: {
                            action: "navigator",
                            props: {
                                page: "editProfilePage"
                            }
                        },
                        text: "Edit profile"
                    }
                ]
            },
        ]
    }
}

