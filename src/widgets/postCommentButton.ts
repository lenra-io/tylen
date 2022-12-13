
'use strict'

export default (data: any, props: any) => {
    return {
        type: "flex",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        children: [
            {
                type: "text",
                style: {
                    fontSize: 12
                },
                value: `${data.length}`
            },
            // TODO: Find a nice way to open the comment section
            // {
            //     type: "actionable",
            //     onPressed: {
            //         action: "openPostComments",
            //     },
            //     child: 
            // },
            {
                type: "icon",
                color: 0xFF1269ED,
                value: "chat"
            }

        ]
    }
}


