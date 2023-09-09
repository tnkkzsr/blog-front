import axios from 'axios';

export const postCreater = async (title:string,content:string,category_id:string) => {

    const body = {
        title,
        content,
    } as {title:string,content:string,category?:string}
    if(category_id !== ""){
        body["category"] = category_id;
    }

    const login = async (username: string, password: string) => {
        const response = await axios.post('http://localhost:8000/auth/jwt/create/', {
            "username": username,
            "password": password,
        });
        return response.data.access;
      };
      


    const token = await login("tanakakazushiro","testadmin");
    const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
    const response = await axios.post("http://localhost:8000/blog/posts/", body,config);


    return response.data;
}
