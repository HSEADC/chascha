import React, {useState, useEffect} from 'react'
import {getPostTeasers} from "../search-data.js"
import M_PostTeaser from './M_PostTeaser.jsx'
import O_SearchBar from "./O_SearchBar.jsx"
import A_MainMenu from './A_MainMenu.jsx'

export default function S_MenuBar({
    searchInputValue: initialSearchValue,
    prerender,
    menu,
    homeURL
}) {
    return (
        <>
        <A_MainMenu></A_MainMenu>
        </>
    )
}