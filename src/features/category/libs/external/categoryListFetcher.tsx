import axios from 'axios';


export const fetchCategories = async () => {

    const {data} = await axios.get(`http://localhost:8000/blog/categories/`);


    return {
        categories:data.results
    };
}
