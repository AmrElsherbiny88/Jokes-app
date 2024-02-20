import { browser } from "$app/environment";
import {writable} from "svelte/store";

const storedTheme = browser ?  window.localStorage.getItem('theme') ??null : "skeleton" || "gold-nouveau" || "modern" || "crimson" ;
const theme = writable (storedTheme);

theme.subscribe ((value)=>{
    if (browser) {
        window.localStorage.setItem('theme' , value) ;
    }
});

export default theme;