import { useEffect,useState } from "react";
import { Post } from "../types";
import { fetchPostDetail } from "../libs/external/postDetailFetcher";

export const usePostDetail = (id:string) => {

    const [post,setPost] = useState<Post|null>(null);

    useEffect(() => {
        if (id) {
            fetch(id);
        }
    },[id]);

    const fetch = async (id :string) => {
        const {post} = await fetchPostDetail(id);
        setPost(post);
    }

   

    return {
        post,
    };

}

