import axios from 'axios';

export const postCreater = async (title:string,content:string,category_id:string) => {
    const body = {
        title,
        content,
        category:category_id ||null,
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MTUzOTc3LCJpYXQiOjE2OTQxNTIxNzcsImp0aSI6ImJlNzg0ZDc2M2RhMjRmYWViNWNlNDExN2UzMmI5OTljIiwidXNlcl9pZCI6MX0.eEiR3XgOGGCeg4fGfeG9W5x-JqFKq80eFSczzLpVQDg"
    const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
    const response = await axios.post("http://localhost:8000/blog/posts/", body,config);

    return response.data;
}
