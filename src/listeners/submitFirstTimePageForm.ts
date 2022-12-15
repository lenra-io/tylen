'use strict'

import * as userServices from "../services/user";

export default async (props: any, event: any, api: any) => {
    const entries = Object.entries(event.value);
    const nonEmptyOrNull = entries.filter(([key, val]) => val !== '' && val !== null)
    const output = Object.fromEntries(nonEmptyOrNull);

    if (output.hasOwnProperty('name') && output.hasOwnProperty('identifier')) {
        await userServices.update(api, output);

        const user = await userServices.get(api);
        return await userServices.update(api, {
            ...user,
            nav: "homePage",
            navData: {}
        });
    }
}