'use client';

import css from './Header.module.css';
import Link from "next/link";
import TagsMenu from '../TagsMenu/TagsMenu';


const tags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

  const Header = () => {

  const handleClick = () => {
    return tags;
  }

  return (
    <header className={css.header}>
      <h2>
        <Link href="/" aria-label="Home">
    NoteHub
  </Link>
  </h2>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li><Link href="/">Home</Link></li>
          <li><button onClick={handleClick}>Open menu</button></li>
          <li className={css.menuItem}>
         <TagsMenu tags={tags}/>
         </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
