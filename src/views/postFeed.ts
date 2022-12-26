'use strict'

import { Post } from "../services/post";

export default (data: any, props: any) => {
    const sortedPosts = data.sort(
        (objA: Post, objB: Post) => Number(objB.date) - Number(objA.date),
    );

    return {
        type: "flex",
        direction: "vertical",
        spacing: 16,
        children: data.map((post: Post) => {
            return {
                type: "view",
                name: "postCard",
                props: post,
                coll: "users",
                query: {
                    id: post.creatorId
                }
            }
        })
    }
}

