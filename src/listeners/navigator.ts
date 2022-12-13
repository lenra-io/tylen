'use strict'


import * as userService from "../services/user";


export default async (props: any, event: any, api: any) => {
    var userData = await userService.get(api);

    switch (props.page) {
        case "firstTimePage":
            return navigateTo(api, userData, "firstTimePage");
        case "homePage":
            return navigateTo(api, userData, "homePage");
        case "createPostPage":
            return navigateTo(api, userData, "createPostPage")
        case "debug":
            return navigateTo(api, userData, "debug");
    }
}

function navigateTo(api: any, userData: userService.User, page: string, data = {}) {
    return userService.update(api, {
        ...userData,
        nav: page,
        navData: data
    });
}