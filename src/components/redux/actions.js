import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = ()=> {// este es el action creator 
    // return {type:GET_USERS, payload: []}  // type es la accion que va a hacer y payload lo que quiero   
    return async function(){// el action creator retorna una funcion 
        const apiData = await axios.get("https://jsonplaceholder.typicode.com/users");// que hace la peticion 
        const users = apiData.data;//esto es lo que traer el array
        dispatch({type: GET_USERS, payload: users}) // y despacha la action 
    };
};