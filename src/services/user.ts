'use strict'

import * as Api from './api';

type User = {
    name: string;
    identifier: string;
    picture?: string;
    description?: string;
};

async function get(api: any) {
    const value = await Api.executeQuery(api, "users", {
        "id": "@me"
    });
    return value.data[0];
}

async function getByIdentifier(api: any, userIdentifier: String) {
    const value = await Api.executeQuery(api, "users", {
        "identifier": userIdentifier
    });
    return value.data[0];
}

function create(api: any, userData: User) {
    return Api.createDoc(api, "users", userData);
}

async function update(api: any, data: User) {
    const user = await get(api);
    return await Api.updateDoc(api, "users", { "_id": user._id, ...data });
}

async function deleteUser(api: any) {
    const user = await get(api);
    return await Api.deleteDoc(api, "users", user);
}



export { User, get, getByIdentifier, create, update, deleteUser };