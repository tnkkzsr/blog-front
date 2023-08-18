import {useEffect, useState} from 'react';
import {Post} from '../types';
import { fetchPosts } from '../libs/external/postFetcher';

export const usePostList = () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch();
    }, []); 


    const fetch = async () => {
        const {posts:newPosts} = await fetchPosts(page);
        setPosts(newPosts);
    };

    return {
        posts,
    };
};