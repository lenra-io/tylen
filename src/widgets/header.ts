'use strict'

export default async (data: any, props: any) => {
    return {
        type: "container",
        decoration: {
            color: 0xFFFFFFFF,
            boxShadow: {
                blurRadius: 8,
                color: 0x1A000000,
                offset: {
                    dx: 0,
                    dy: 1
                }
            },
        },
        child: {
            type: "flex",
            fillParent: true,
            mainAxisAlignment: "spaceBetween",
            crossAxisAlignment: "center",
            padding: {
                top: 16,
                bottom: 16,
                left: 32,
                right: 32
            },
            children: props.children
        }
    }
}

