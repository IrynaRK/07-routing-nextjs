  import css from "./SidebarNotes.module.css"
  import Link from "next/link";



const Tags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];
  
 
  const SidebarNotes = async () =>   {
   
   
   return ( 
     <ul className={css.menuList}>
       {Tags.map((tag) => {

        const href = tag === 'All' ? '/notes/filter' : '/notes/filter/${tag}';
        const label = tag === 'All' ? 'All notes' : tag;
return(
          <li  key={tag} className={css.menuItem}>
            <Link href={href} className={css.menuLink}>
            {label}
            </Link></li>
            );
  })}
        
       </ul>
       )
       }
      
       export default SidebarNotes;
