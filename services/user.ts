'use strict'

import * as Api from './api';

type User = {
    name: string;
    identifier: string;
    picture?: string;
    description?: string;
};

async function get(api) {
    const value = await Api.executeQuery(api, "users", {
        "id": "@me"
    });
    return value.data[0];
}

async function getByIdentifier(api, userIdentifier) {
    const value = await Api.executeQuery(api, "users", {
        "identifier": userIdentifier
    });
    return value.data[0];
}

function create(api, userData: User) {
    return Api.createDoc(api, "users", userData);
}

async function update(api, data: User) {
    const user = await this.get(api);
    return await Api.updateDoc(api, "users", { "_id": user._id, ...data });
}

async function deleteUser(api) {
    const user = await this.get(api);
    return await Api.deleteDoc(api, "users", user);
}



export { User, get, getByIdentifier, create, update, deleteUser };