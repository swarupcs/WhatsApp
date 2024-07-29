import { SidebarHeader } from "./header";
import { Notifications } from "./notifications";
import {Search }from "./search";
import { useState } from 'react';


export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
      {/*Sidebar Header*/}
      <SidebarHeader />
      {/*Notifications */}
      <Notifications />
      {/* Sidebar */}
      <Search searchLength={searchResults.length} />
    </div>
  );
}