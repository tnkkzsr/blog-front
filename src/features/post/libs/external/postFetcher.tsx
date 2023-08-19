import axios from 'axios';
import { PAGE_LIMIT } from '../../constants';

export const fetchPosts = async (page:number=1) => {
    const {data}  = await axios.get(`http://localhost:8000/blog/posts/?page=${page}`);
    const {results:posts,count} =data;

    const lastPage = Math.ceil(count / PAGE_LIMIT) ||1;

    return {
        posts,
        lastPage
    };

}