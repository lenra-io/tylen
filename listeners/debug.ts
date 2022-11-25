'use strict'

import * as userServices from "../services/user";
import * as subscriptionServices from "../services/subscription";

export default async (props, event, api) => {
    console.log(await userServices.create(api, { name: "Jonas", identifier: "jonas.martinez" }));
    console.log(await userServices.getByIdentifier(api, "jonas.martinez"));
    console.log(await subscriptionServices.subscribeTo(api, "jonas.martinez"));
    return {};
}