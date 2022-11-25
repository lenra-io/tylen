'use strict'

import * as UserServices from './user';
import * as Api from './api';

type Subscription = {
    subscriber_id: String;
    target_user_id: String;
};

async function create(api, subscriptionData: Subscription) {
    return Api.createDoc(api, "subscriptions", subscriptionData);
}

async function subscribeTo(api, targetUserId: String) {
    const user = await UserServices.get(api);
    return create(api, { subscriber_id: user._id, target_user_id: targetUserId });
}

async function unsubscribeFrom(api, targetUserId: String) {
    const user = await UserServices.get(api);
    const subscription = await Api.executeQuery(api, "subscriptions", {
        "subscriber_id": "@me",
        "target_user_id": targetUserId,
    });
    return await Api.deleteDoc(api, "subscriptions", subscription.data[0]);
}

export { Subscription, create, subscribeTo, unsubscribeFrom };