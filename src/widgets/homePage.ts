'use strict'

export default (data: any, props: any) => {
    return {
        type: "flex",
        direction: "vertical",
        scroll: true,
        spacing: 4,
        crossAxisAlignment: "center",
        children: [
            {
                type: "overlayEntry",
                showOverlay: true,
                child: {
                    type: "flex",
                    fillParent: true,
                    mainAxisAlignment: "end",
                    crossAxisAlignment: "end",
                    padding: {
                        bottom: 32,
                        right: 32
                    },
                    children: [
                        {
                            type: "container",
                            decoration: {
                                color: 0xFF1269ED,
                                borderRadius: {
                                    topLeft: {
                                        x: 10,
                                        y: 10,
                                    },
                                    topRight: {
                                        x: 10,
                                        y: 10,
                                    },
                                    bottomRight: {
                                        x: 10,
                                        y: 10,
                                    },
                                    bottomLeft: {
                                        x: 10,
                                        y: 10,
                                    },
                                },
                            },
                            constraints: {
                                maxWidth: 48,
                                maxHeight: 48,
                            },
                            child: {
                                type: "actionable",
                                onPressed: {
                                    action: "navigator",
                                    props: {
                                        page: "createPostPage"
                                    }
                                },
                                child: {
                                    type: "icon",
                                    color: 0xFFFFFFFF,
                                    size: 48,
                                    value: "add"
                                }
                            }
                        }
                    ]
                },
            },
            {
                type: "widget",
                name: "header",
                props: {
                    children: [
                        {
                            type: "actionable",
                            onPressed: {
                                action: "openProfileMenu"
                            },
                            child: {
                                type: "widget",
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
                            type: "actionable",
                            onPressed: {
                                action: "openSearch"
                            },
                            child: {
                                type: "icon",
                                value: "search",
                                size: 36
                            }
                        },
                    ]
                }
            },
            {
                type: "widget",
                name: "postFeed"
            }
        ]
    }
}

