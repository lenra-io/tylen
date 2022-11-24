'use strict'

import { get, update } from './user';

export async function create(api, subscriptionData) {
    return createDoc(api, "subscriptions", subscriptionData);
}

export async function subscribeTo(api, userIdentifier) {
    // Get current user and add a subscription
    let user = await get(api);
    user.subscribedTo.push(userIdentifier);


    return await update(api, user);
}

export async function unsubscribeFrom(api, userIdentifier) {
    // Get current user and remove subscription
    let user = await this.get(api);
    const index = user.subscribedTo.indexOf(userIdentifier);
    if (index > -1) {
        user.subscribedTo.splice(index, 1);
    }


    return await update(api, user);
}