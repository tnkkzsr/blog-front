import React, { FunctionComponent } from "react";
import { Select } from "@/features/base/components/form/Select";
import { Category } from "../types";

interface Props {
  className?: string;
  options: Category[];
  value: string;
  onChange: (newCategory: string) => void;
}

export const CategorySelect: FunctionComponent<Props> = ({ 
  className, 
  options,
  value, 
  onChange 
}) => {
  const tranfromedCategories = options.map((category) => ({
    value: category.id,
    label: category.title,
  }));

  return (
    <div className={className}>
      <Select
        value={value}
        onSelect={(value) => onChange(value)}
        options={tranfromedCategories}
      />
    </div>
  );
};
