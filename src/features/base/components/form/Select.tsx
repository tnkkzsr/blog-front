import React, { FunctionComponent } from "react";

interface Props {
  options: { value: string; label: string }[];
  value?: string;
  onSelect: (value: string) => void;
}

export const Select: FunctionComponent<Props> = ({
  value,
  onSelect,
  options,
}) => {
  return (
    <select
      onChange={(e) => {
        const selectedCategoryId = e.target.value;
        onSelect(selectedCategoryId);
      }}
      className="p-2 rounded-md border cursor-pointer w-[200px]"
      value={value}
    >
      <option value={""}></option>
      {options?.map(({ value: valueItem, label }) => (
        <option key={valueItem} value={valueItem} >
          {label}
        </option>
      ))}
    </select>
  );
};