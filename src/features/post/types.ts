import {Category} from '../category/types';

export interface Post {
    id: string;
    title: string;
    content: string;
    category?: Category;
    pubulishedAt?: string;
    updated_at?: string;
}