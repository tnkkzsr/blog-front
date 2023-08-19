import {useEffect, useState} from 'react';
import {Post} from '../types';
import { fetchPosts } from '../libs/external/postFetcher';

export const usePostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);


    useEffect(() => {
        fetch(currentPage);
        }, [currentPage]);
    


    const fetch = async (page:number) => {
        const {posts:newPosts,lastPage} = await fetchPosts(page);
        setPosts(newPosts);
        setCurrentPage(page);
        setLastPage(lastPage);

    };

    const nextPosts = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPosts = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };



    return {
        posts,
        nextPosts,
        prevPosts,
        currentPage,
        lastPage,
    };
};