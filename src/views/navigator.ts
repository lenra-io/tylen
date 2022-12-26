'use strict'

export default (data: any, props: any) => {
    let userData = data[0];

    switch (userData?.nav) {
        case "firstTimePage":
            return {
                type: "view",
                name: "firstTimePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        case "homePage":
            return {
                type: "view",
                name: "homePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
        case "createPostPage":
            return {
                type: "view",
                name: "createPostPage",
            }
        case "profilePage":
            return {
                type: "view",
                name: "profilePage"
            }
        case "debug":
            return {
                type: "view",
                name: "debug"
            }
        case "editProfilePage":
            return {
                type: "view",
                name: "editProfilePage"
            }
        default:
            return {
                type: "view",
                name: "firstTimePage",
                coll: "users",
                query: {
                    "id": "@me"
                }
            }
    }

}
