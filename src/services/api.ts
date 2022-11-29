'use strict'

import axios from "axios";


function getDoc(api: any, coll: string, id: string) {
    return axios.get(`${api.url}/app/colls/${coll}/docs/${id}`, options(api));
}

function createDoc(api: any, coll: string, doc: any) {
    return axios.post(`${api.url}/app/colls/${coll}/docs`, doc, options(api));
}

function updateDoc(api: any, coll: string, doc: any) {
    return axios.put(`${api.url}/app/colls/${coll}/docs/${doc._id}`, doc, options(api));
}

function deleteDoc(api: any, coll: string, doc: any) {
    return axios.delete(`${api.url}/app/colls/${coll}/docs/${doc._id}`, options(api));
}

function executeQuery(api: any, coll: string, query: any) {
    return axios.post(`${api.url}/app/colls/${coll}/docs/find`, query, options(api));
}


function options(api: any) {
    return { headers: headers(api) }
}

function headers(api: any) {
    return { Authorization: `Bearer ${api.token}` }
}

export { getDoc, createDoc, updateDoc, deleteDoc, executeQuery }