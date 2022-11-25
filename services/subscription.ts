'use strict'

import * as UserServices from './user';
import * as Api from './api';

type Subscription = {
    subscriber_id: string;
    target_user_id: string;
};

async function create(api, subscriptionData: Subscription) {
    return Api.createDoc(api, "subscriptions", subscriptionData);
}

async function subscribeTo(api, targetUserId: String) {
    let user = await UserServices.get(api);
    return Api.createDoc(api, "subscriptions", { subscriber_id: user._id, target_user_id: targetUserId });
}

async function unsubscribeFrom(api, targetUserId: String) {
    const user = await this.get(api);
    const subscription = await Api.executeQuery(api, "subscriptions", {
        "subscriber_id": "@me",
        "target_user_id": targetUserId,
    });
    return await Api.deleteDoc(api, "subscriptions", subscription.data[0]);
}

export { Subscription, create, subscribeTo, unsubscribeFrom };