import css from './Header.module.css';
import Link from "next/link";
import { getTags } from '@/lib/api';
import TagsMenu from '../TagsMenu/TagsMenu';

const Header = async () => {
  const tags = await getTags();
  
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
         <TagsMenu tags={tags}></TagsMenu></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
