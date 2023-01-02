'use strict'

import * as userServices from "../services/user";

export default async (props: any, event: any, api: any) => {
    await userServices.update(api, { searchValue: "" });
    return {};
}