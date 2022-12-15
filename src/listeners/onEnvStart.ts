'use strict'

import * as apiServices from "../services/api";

export default async (props: any, event: any, api: any) => {
    await apiServices.createDoc(api, "users", { id: "debug", name: "debug", identifier: "debug", errors: {} });

    for (let i = 0; i < 150; i++) {
        await apiServices.createDoc(api, "posts", { creatorId: "debug", text: "This is a debug message" });
    }

    return {}
}