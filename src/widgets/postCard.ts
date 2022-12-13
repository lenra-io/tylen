'use strict'

import { Post } from "../services/post";
import { User } from "../services/user";

export default (data: any, props: any) => {
    const user: User = data[0];
    const post: Post = props;

    // Time in milliseconds
    const timeSinceCreation: number = Date.now() - post.date!;

    const testData = new Date(timeSinceCreation);

    let timeSinceCreationIndicator;

    if (timeSinceCreation / 1000 / 60 / 60 / 24 / 365 >= 1) {
        timeSinceCreationIndicator = `${Math.floor(timeSinceCreation / 1000 / 60 / 60 / 24 / 365)} years`;
    } else if (timeSinceCreation / 1000 / 60 / 60 / 24 >= 1) {
        timeSinceCreationIndicator = `${Math.floor(timeSinceCreation / 1000 / 60 / 60 / 24)} days`;
    } else if (timeSinceCreation / 1000 / 60 / 60 >= 1) {
        timeSinceCreationIndicator = `${Math.floor(timeSinceCreation / 1000 / 60 / 60)} hours`;
    } else if (timeSinceCreation / 1000 / 60 >= 1) {
        timeSinceCreationIndicator = `${Math.floor(timeSinceCreation / 1000 / 60)} minutes`;
    } else {
        timeSinceCreationIndicator = `${Math.floor(timeSinceCreation / 1000)} seconds`;
    }

    return {
        type: "container",
        constraints: {
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
                            value: `${user.name}`,
                            children: [
                                {
                                    type: "text",
                                    value: ` - ${timeSinceCreationIndicator}`
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "text",
                    value: `${post.text}`,
                },
                {
                    type: "widget",
                    name: "postLikeButton",
                    props: {
                        postId: post._id,
                        userId: user.id
                    },
                    coll: "postLikes",
                    query: {
                        postId: post._id
                    }
                },

            ]
        }
    }
}

