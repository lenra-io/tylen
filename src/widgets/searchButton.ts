'use strict'

export default (data: any, props: any) => {
    return {
        type: "flex",
        children: [
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
            ...(data[0]?.searchValue && {
                type: "textfield",
                value: "",
                onSubmitted: {
                    action: "navigator",
                    props: {
                        page: "searchPage",
                    }
                }
            })

        ]
    }
}

