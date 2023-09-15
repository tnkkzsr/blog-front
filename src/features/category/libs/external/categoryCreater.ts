import axios from "axios";

export const categoryCreater = async (newCategoryName: string,access:string) => {
    const body = {
        title:newCategoryName
    } as { title: string};
    const token = access;
    if (!token) {
      console.log("token not found");
      throw new Error("token not found");
    }
    console.log("token", token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const {data} = await axios.post(`http://localhost:8000/blog/categories/`,body,config)
    return data;
}
