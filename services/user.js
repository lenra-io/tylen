'use strict'

import { executeQuery, createDoc, updateDoc, deleteDoc } from './api';

export async function get(api) {
    const value = await executeQuery(api, "users", {
        "id": "@me"
    });
    return value.data[0];
}

export async function getByIdentifier(api, userIdentifier) {
    const value = await executeQuery(api, "users", {
        "identifier": userIdentifier
    });
    return value.data[0];
}

export function create(api, userData) {
    return createDoc(api, "users", userData);
}

export async function update(api, data) {
    const user = await this.get(api);
    return await updateDoc(api, "users", { "_id": user._id, ...data });
}

export async function deleteUser(api) {
    const user = await this.get(api);
    return await deleteDoc(api, "users", user);
}

export async function subscribeTo(api, userIdentifier) {
    // Get current user and add a subscription
    let user = await this.get(api);
    user.subscribedTo.push(userIdentifier);

    // Get target user and add a subscriber


    return await update(api, user);
}

export async function unsubscribeFrom(api, userIdentifier) {
    let user = await this.get(api);
    const index = user.subscribedTo.indexOf(userIdentifier);
    if (index > -1) {
        user.subscribedTo.splice(index, 1);
    }
    return await update(api, user);
}