import React from "react";
import { Block } from "@/features/base/components/container/Block";
import { useCategories } from "../contexts/CategoryContext";

export const CategoryList = () => {
  const { categories } = useCategories();
  console.log(categories);
  return (
    <Block>
      {categories.map((categoryItem) => (
        <Block key={categoryItem.id} className={`border-b p-1 cursor-pointer hover:font-bold`}>
          {categoryItem.title}
        </Block>
      ))}
    </Block>
  );
};
