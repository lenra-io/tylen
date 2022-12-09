'use strict'

import * as Api from './api';

type Post = {
    _id?: string;
    creatorId?: string;
    text: string;
    parentPost?: string;
};

async function getPosts(api: any): Promise<Array<Post>> {
    const value = await Api.executeQuery(api, "posts", {});
    return value.data;
}

async function getPost(api: any, id: string): Promise<Post> {
    const value = await Api.executeQuery(api, "posts", {
        "id": id
    });
    return value.data[0];
}

// async function update(api: any, data: any) {
//     const user = await get(api);
//     return await Api.updateDoc(api, "users", { ...user, ...data });
// }

async function deletePost(api: any, id: string) {
    const post = await getPost(api, id);
    return await Api.deleteDoc(api, "posts", post);
}



export { Post, getPost, getPosts, deletePost };