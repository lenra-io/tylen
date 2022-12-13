'use strict'

export default (data: any, props: any) => {
    let iconColor;
    if (data.length > 0 && data.find((like: any) => like.userId == props.userId) == undefined) {
        iconColor = 0xFFA9B2C4;
    } else {
        iconColor = 0xFFE92236;
    }

    return {
        type: "flex",
        fillParent: true,
        mainAxisAlignment: "end",
        crossAxisAlignment: "center",
        children: [
            {
                type: "text",
                value: `${data.length}`
            },
            {
                type: "actionable",
                onPressed: {
                    action: "likePost",
                    props: {
                        id: props.postId
                    }
                },
                child: {
                    type: "icon",
                    color: iconColor,
                    value: "favorite"
                }
            }
        ]
    }
}

