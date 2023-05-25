import {$host} from "./index";

export const createList = async(name) => {
    const {data} = await $host.post('api/list/', name);
    return data;
}

export const fetchLists = async() => {
    const {data} = await $host.get('api/list/');
    return data;
}

export const fetchOneList = async(id) => {
    const {data} = await $host.get('api/list/' + id);
    return data;
}

export const createWord = async(word) => {
    const {data} = await $host.post('api/word/', word);
    return data;
}