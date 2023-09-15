import { FunctionComponent, createContext, use, useContext } from 'react';
import { useCategoryList } from '../hooks/useCategoryList';
import { Category } from '../types';


interface CategoryContextProps {
    categories: Category[];
}
const CategoryContext = createContext<CategoryContextProps|undefined>(undefined);


interface CategoryProviderProps {
    children: React.ReactNode;
}

export const CategoryProvider:FunctionComponent<CategoryProviderProps> = ({ children }) => {
    const {categories} = useCategoryList();
    return (
        <CategoryContext.Provider value={{categories}}>
            {children}
        </CategoryContext.Provider>
    )
}


export const useCategories = () => {
    const context = useContext(CategoryContext);
    if(!context) throw new Error("useCategories must be used within a CategoryProvider");
    return context;
}