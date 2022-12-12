'use strict'

import { Post } from "../services/post";
import { User } from "../services/user";

export default (data: any, props: any) => {
    const user: User = data[0];
    const post: Post = props;

    console.log(post.date);

    return {
        type: "container",
        constraints: {
            minWidth: 600,
            maxWidth: 600,
        },
        border: {
            top: { width: 1, color: 0xFFDCE0E7 },
            left: { width: 1, color: 0xFFDCE0E7 },
            bottom: { width: 1, color: 0xFFDCE0E7 },
            right: { width: 1, color: 0xFFDCE0E7 },
        },
        padding: {
            top: 8,
            left: 8,
            bottom: 8,
            right: 8
        },
        decoration: {
            color: 0xFFFFFFFF,
            borderRadius: {
                topLeft: {
                    x: 10,
                    y: 10,
                },
                bottomRight: {
                    x: 10,
                    y: 10,
                },
                topRight: {
                    x: 10,
                    y: 10,
                },
                bottomLeft: {
                    x: 10,
                    y: 10,
                },
            },
            boxShadow: {
                color: 0x11000000,
                blurRadius: 8,
                spreadRadius: 0,
                offset: { dx: 0, dy: 1 }
            }
        },
        child: {
            type: "flex",
            direction: "vertical",
            spacing: 8,
            children: [
                {
                    type: "flex",
                    children: [
                        {
                            type: "text",
                            style: {
                                fontWeight: "w600"
                            },
                            value: `${user.name}`
                        }
                    ]
                },
                {
                    type: "text",
                    value: `${post.text}`,
                },
                {
                    type: "flex",
                    fillParent: true,
                    mainAxisAlignment: "end",
                    children: [
                        {
                            type: "actionable",
                            onPressed: {
                                // TODO: Implement likePost listener + database elements
                                action: "likePost",
                                props: {
                                    id: post._id
                                }
                            },
                            child: {
                                type: "icon",
                                color: 0xFFE92236,
                                value: "favorite"
                            }
                        }
                    ]
                }
            ]
        }
    }
}

