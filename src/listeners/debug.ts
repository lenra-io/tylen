'use strict'

import * as userServices from "../services/user";
import * as subscriptionServices from "../services/subscription";

export default async (props: any, event: any, api: any) => {
    console.log((await userServices.create(api, { name: "Jonas", identifier: "jonas.martinez" })).data);
    console.log(await userServices.getByIdentifier(api, "jonas.martinez"));
    console.log((await subscriptionServices.subscribeTo(api, "jonas.martinez")).data);
    return {};
}