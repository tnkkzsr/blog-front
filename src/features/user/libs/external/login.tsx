import axios from 'axios';

export const login = async (username: string, password: string) => {
    try{
    const response = await axios.post('http://localhost:8000/auth/jwt/create/', {
        "username": username,
        "password": password,
    });
    return response.data.access;
    }catch(error){
        console.log("error",error);
    }
};
  