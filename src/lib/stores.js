import { browser } from "$app/environment";
import {writable} from "svelte/store";

const storedTheme = browser ?  window.localStorage.getItem('theme') ??  "gold-nouveau" : "skeleton" ;
const theme = writable (storedTheme);

theme.subscribe ((value)=>{
    if (browser) {
        window.localStorage.setItem('theme' , value) ;
    }
});

export default theme;