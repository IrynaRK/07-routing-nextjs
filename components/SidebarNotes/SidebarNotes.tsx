  import css from "./SidebarNotes.module.css"
  import Link from "next/link"

import { getTags } from "@/lib/api";


  
 
  const SidebarNotes = async () =>   {
   const Tag = await getTags();
   
   return ( 
     <ul className={css.menuList}>
        <li>
        <Link  href={`../../app/notes/filter/all`} className={css.menuLink}>
          All NotesClient
        </Link> </li>
       {Tag.map(tags => (
          <li  key={tags.id} className={css.menuItem}>
            <Link href={`/app/notes/filter/${tags.id}`}>
            {tags.id}
            </Link></li>
        ))}
        
       </ul>
       )
       }
      
       export default SidebarNotes;
