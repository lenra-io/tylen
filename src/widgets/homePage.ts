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
                                type: "stack",
                                alignment: "bottomRight",
                                children: [
                                    // TODO: Change image to profile picture or placeholder
                                    {
                                        type: "image",
                                        src: "logo.png"
                                    },
                                    {
                                        type: "icon",
                                        value: "circle",
                                        size: 8,
                                        color: 0xFFFF0000
                                    }
                                ]
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

