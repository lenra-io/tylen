'use strict'

export default (data: any, props: any) => {
    return {
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
        ]
    }
}

