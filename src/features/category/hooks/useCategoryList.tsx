import {useEffect, useState} from 'react';
import { Category} from '../types';
import { fetchCategories } from '../libs/external/categoryListFetcher';


export const useCategoryList = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const {categories:newCategories} = await fetchCategories();
        setCategories(newCategories);
    };

    return {
        categories,
    };
}

