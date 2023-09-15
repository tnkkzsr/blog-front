import axios from "axios";

export const postDeleteFetcher = async (id:string,access:string) => {

    const token = access;
    if (!token) {
      console.log("token not found");
      throw new Error("token not found");
    }
    console.log("token", token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const {data} = await axios.delete(`http://localhost:8000/blog/post/${id}/`,config)
    return data;
}