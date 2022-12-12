'use strict'

import * as Api from './api';

type User = {
    _id?: string;
    id?: string;
    name: string;
    identifier: string;
    picture?: string;
    description?: string;
    nav?: string;
    navData?: any;
};

async function get(api: any): Promise<User> {
    const value = await Api.executeQuery(api, "users", {
        "id": "@me"
    });
    return value.data[0];
}

async function getById(api: any, id: String): Promise<User> {
    const value = await Api.executeQuery(api, "users", {
        "id": id
    });
    return value.data[0];
}

async function getByIdentifier(api: any, userIdentifier: String): Promise<User> {
    const value = await Api.executeQuery(api, "users", {
        "identifier": userIdentifier
    });
    return value.data[0];
}

function initializeUser(api: any) {
    return Api.createDoc(api, "users", { id: "@me" });
}

async function update(api: any, data: any) {
    const user = await get(api);
    return await Api.updateDoc(api, "users", { ...user, ...data });
}

async function deleteUser(api: any) {
    const user = await get(api);
    return await Api.deleteDoc(api, "users", user);
}



export { User, get, getById, getByIdentifier, initializeUser, update, deleteUser };