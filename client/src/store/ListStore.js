import {makeAutoObservable} from "mobx";


export default class ListStore{
    constructor() {
        this._lists = []
        this._words = []
        this._selectedList = {}

        makeAutoObservable(this)
    }

    setLists(lists){
        this._lists = lists
    }

    get lists(){
        return this._lists
    }

    setWords(words){
        this._words = words
    }

    get words(){
        return this._words
    }

    setSelectedList(list) {
        this._selectedList = list;
    }

    get selectedList() {
        return this._selectedList
    }

}