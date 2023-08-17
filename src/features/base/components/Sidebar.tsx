import React,{FunctionComponent} from 'react'
import { Aside } from './Aside'
import { ProfilePanel } from "@/features/base/components/ProfilePanel";
import { SearchBox } from './SearchBox';
import { CategoryPanel } from './CategoryPanel';
import { ManagePanel } from './ManagePanel';

interface Props {
  className?: string;
}

export const Sidebar: FunctionComponent<Props> = ({className=""}) => {
  return (
    <Aside className={`w-[300px] flex flex-col space-y-12 ${className}`}>
      <ProfilePanel />
      <SearchBox />
      <CategoryPanel />
      <ManagePanel />
    </Aside>

  )
}
