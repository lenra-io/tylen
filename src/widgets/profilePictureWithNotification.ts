'use strict'

export default (data: any, props: any) => {
    const user = data[0];

    let profilePicture;
    // TODO: This is commented out because of CORS problems when calling an image from any website
    // if (user.profilePicture) {
    //     profilePicture = {
    //         type: "image",
    //         width: 36,
    //         height: 36,
    //         src: user.profilePicture,
    //     }
    // } else {
    profilePicture = {
        type: "icon",
        size: 36,
        value: "account_circle"
    }
    // }

    return {
        type: "stack",
        alignment: "bottomRight",
        children: [
            profilePicture,
            // TODO: Disabling this icon as long as we do not handle notifications properly.
            // {
            //     type: "icon",
            //     value: "circle",
            //     size: 8,
            //     color: 0xFFFF0000
            // }
        ]
    }
}

