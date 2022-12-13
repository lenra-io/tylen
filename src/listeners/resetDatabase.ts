'use strict'

import * as apiServices from "../services/api";
import * as userServices from "../services/user";

export default async (props: any, event: any, api: any) => {
    const colls = ["users", "posts", "subscriptions", "postLikes"];
    colls.forEach(async (coll) => {
        await (await apiServices.executeQuery(api, coll, {})).data.forEach((doc: any) => {
            apiServices.deleteDoc(api, coll, doc)
        });
    });

    await userServices.initializeUser(api);
    return {};
}