'use strict'

import * as userServices from "../services/user";
import * as subscriptionServices from "../services/subscription";
import * as apiServices from "../services/api";

export default async (props: any, event: any, api: any) => {
    switch (props.entry) {
        case "userIdentifier":
            const existingUserCount = (await apiServices.executeQuery(api, "users", {
                identifier: event.value
            })).data.length;

            let user = await userServices.get(api);

            if (existingUserCount > 0) {
                user.errors.identifierAlreadyTaken = true;
                await userServices.update(api, user);
            } else {
                if (user.errors?.identifierAlreadyTaken != undefined) {
                    delete user.errors.identifierAlreadyTaken;
                    await userServices.update(api, user);
                }
            }
            break;
        default:
            break;
    }
    return {};
}