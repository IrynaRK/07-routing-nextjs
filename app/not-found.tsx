'use client';

import css from "./page.module.css";
import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => router.push('/'), 3000);
        return () => clearTimeout(timer);
    }, [router]);
    
    return (
        <div>
< h1  className = {css.title} > 404 - Сторінку не знайдено </ h1 > 
< p  className = {css.description} > На жаль, сторінка, яку ви шукаєте, не існує. </ p >
<Link href="../components/Home/Home.tsx">Go back home</Link>
</div>
);
};

export default NotFound;