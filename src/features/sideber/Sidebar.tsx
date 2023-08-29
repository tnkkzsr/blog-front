import React,{FunctionComponent} from 'react'
import { Aside } from '../base/components/container/Aside'
import { ProfilePanel } from "@/features/sideber/ProfilePanel";
import { SearchBox } from '../search/components/SearchBox';
import { CategoryPanel } from '../category/components/CategoryPanel';
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
