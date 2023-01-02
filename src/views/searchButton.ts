'use strict'

export default (data: any, props: any) => {
    console.log(data[0]);

    return {
        type: "form",
        onSubmit: {
            action: "navigator",
            props: {
                page: "searchPage",
            }
        },
        child: {
            type: "flex",
            crossAxisAlignment: "center",
            children: [
                {
                    type: "actionable",
                    // Change action if the textfield is shown
                    // onPressed -> submit
                    onPressed: {
                        action: "openSearch"
                    },
                    child: {
                        type: "icon",
                        size: 36,
                        value: "search",
                    }
                },
                (typeof data[0]?.searchValue !== 'undefined' ? {
                    type: "container",
                    constraints: {
                        maxWidth: 200
                    },
                    child:
                    {
                        type: "textfield",
                        value: "",
                        name: "searchValue",
                        style: {
                            decoration: {
                                hintText: "Search"
                            },

                        }
                    }
                } : undefined)
            ].filter(x => x !== undefined)
        }
    }
}