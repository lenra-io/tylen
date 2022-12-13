'use strict'

export default (data: any, props: any) => {
    let userData = data[0];

    switch (userData.nav) {
        case "firstTimePage":
            return {
                type: "widget",
                name: "firstTimePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        case "homePage":
            return {
                type: "widget",
                name: "homePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        case "createPostPage":
            return {
                type: "widget",
                name: "createPostPage",
            }
        case "debug":
            return {
                type: "widget",
                name: "debug"
            }
        default:
            return {
                type: "widget",
                name: "firstTimePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
    }

}
