'use strict'

import * as postServices from "../services/post";

export default async (props: any, event: any, api: any) => {
    await postServices.toggleLikePost(api, props.id);
}