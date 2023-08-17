import axios from 'axios';

export const fetchPosts =  async () => {
    const {data} = await axios.get('http://localhost:8000/posts-list/');
    console.log(data);

}