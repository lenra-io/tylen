'use strict'

export default async (data: any, props: any) => {
  return {
    type: "stack",
    children: [
      {
        type: "widget",
        name: "navigator",
        coll: "users",
        query: {
          "id": "@me"
        }
      },
      
      {
        type: "actionable",
        onPressed: {
          action: "resetDatabase"
        },
        child: {
          type: "container",
          decoration: {
            color: 0xFFFF0000,
          },
          constraints: {
            minWidth: 5,
            minHeight: 5,
          },
          child: {
            type: "text",
            value: ""
          }
        }
      }
    ]
  }
}

