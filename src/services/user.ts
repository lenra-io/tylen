'use strict'

import * as Api from './api';

type User = {
    id?: string;
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

function initializeUser(api: any) {
    return Api.createDoc(api, "users", { id: "@me" });
}

async function update(api: any, data: User) {
    const user = await get(api);
    return await Api.updateDoc(api, "users", { ...user, ...data });
}

async function deleteUser(api: any) {
    const user = await get(api);
    return await Api.deleteDoc(api, "users", user);
}



export { User, get, getByIdentifier, initializeUser, update, deleteUser };