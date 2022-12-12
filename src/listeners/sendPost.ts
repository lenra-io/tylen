'use strict'

import * as UserServices from '../services/user';
import * as postServices from '../services/post';

export default async (props: any, event: any, api: any) => {
    const user = await UserServices.get(api);

    return await postServices.createPost(api, { creatorId: user.id, ...event.value })
}