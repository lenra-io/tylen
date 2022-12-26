'use strict'

export default (data: any, props: any) => {
    let iconColor;
    if (data.length > 0 && data.find((like: any) => like.userId == props.userId) == undefined) {
        iconColor = 0xFFE92236;
    } else {
        iconColor = 0xFFA9B2C4;
    }

    return {
        type: "flex",
        crossAxisAlignment: "center",
        mainAxisAlignment: "end",
        children: [
            {
                type: "text",
                style: {
                    fontSize: 12,
                },
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

