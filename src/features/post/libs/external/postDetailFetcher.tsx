import axios from 'axios';
import { Post } from '../../types';

export const fetchPostDetail = async (id:string) => {

    const {data} = await axios.get<Post>(`http://localhost:8000/blog/post/${id}/`);
    console.log(data)

    return {
        post:data
    };
}
