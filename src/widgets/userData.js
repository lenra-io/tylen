'use strict'

export default (data, props) => {
    var userData = data[0];

    return {
        type: "text",
        value: JSON.stringify(userData)
    }
}

