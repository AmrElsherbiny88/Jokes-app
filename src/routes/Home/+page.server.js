export const load = async ()=> ({ joke: await fetch('https://v2.jokeapi.dev/joke/Any').then(response=>response.json()).catch(error=>console.log(error))});  

export const actions ={
    getjoke:async() => await load() ,
    getcat:async ({ request }) =>
    {
       
        const {categ }= Object.fromEntries(await request.formData())
        return({ joke: await fetch(`https://v2.jokeapi.dev/joke/${categ}`).then(response=>response.json()).catch(error=>console.log(error))})} ,
}

