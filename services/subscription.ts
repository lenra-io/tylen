'use strict'

import * as UserServices from './user';
import * as Api from './api';

type Subscription = {
    subscriber_id: String;
    target_user_id: String;
};

module.exports = {
    async create(api, subscriptionData: Subscription) {
        return Api.createDoc(api, "subscriptions", subscriptionData);
    },

    async subscribeTo(api, targetUserIdentifier: String) {
        const user = await UserServices.get(api);
        const targetUser = await UserServices.getByIdentifier(api, targetUserIdentifier);
        return this.create(api, { subscriber_id: user._id, target_user_id: targetUser._id });
    },

    async unsubscribeFrom(api, targetUserIdentifier: String) {
        const user = await UserServices.get(api);
        const targetUser = await UserServices.getByIdentifier(api, targetUserIdentifier);
        const subscription = await Api.executeQuery(api, "subscriptions", {
            "subscriber_id": user._id,
            "target_user_id": targetUser._id,
        });
        return await Api.deleteDoc(api, "subscriptions", subscription.data[0]);
    }
}
