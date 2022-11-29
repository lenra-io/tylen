'use strict'

export default async (data: any, props: any) => {
  return {
    type: "widget",
    name: "navigator",
    coll: "users",
    query: {
      "id": "@me"
    }
  }
}

