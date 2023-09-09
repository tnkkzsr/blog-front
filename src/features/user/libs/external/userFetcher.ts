import axios from 'axios';

export const fetchCreateToken = async (username:string, password:string) => {

    const response = await axios.post("http://localhost:8000/auth/jwt/create", {
        username,
        password
    });
    console.log(response.data)
    return response.data;

}
