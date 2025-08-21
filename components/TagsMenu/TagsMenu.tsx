'use client';

import { useState } from "react";
import css from "./TagsMenu.module.css";
import Link from "next/link";
import { Tags } from "../../types/note";

type Props = {
  tags: Tags[];
};

const TagsMenu = ({ tags }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
< div  className = {css.menuContainer} > 
  < button onClick={toggle} className = {css.menuButton} >
    Notes ▾
  </button>
  {isOpen && (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href='../../app/notes/filter/all' onClick={toggle} className={css.menuLink}>
          All notes
        </ Link > 
      </ li > 
      {tags.map((tag) => (
        <li key={tag.id} className={css.menuItem}>
          <Link href={`../../app/notes/filter/${tag.id}`} onClick={toggle} className={css.menuLink}>
         {tag.id}
         </ Link>
         </li>
      ))}
    </ ul > 
    )}
</ div >
);
};

export default TagsMenu;

