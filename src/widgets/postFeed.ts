'use strict'

import { Post } from "../services/post";

export default (data: any, props: any) => {
    // TODO get posts from database and show them from newest to oldest
    return {
        type: "flex",
        direction: "vertical",
        spacing: 16,
        children: data.map((post: Post) => {
            return {
                type: "widget",
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

