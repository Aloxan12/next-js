import React from 'react';
import cls from './Header.module.scss'
import Link from "next/link";

export const Header = () => {
    return (
        <div className={cls.headerWrap}>
            <div className={cls.title}>Title our site</div>

            <nav className={cls.navWrap}>
                <Link className={cls.link} href='/'>Главная</Link>
                <Link className={cls.link} href='/products'>Продукты</Link>
                <Link className={cls.link} href='/categories'>Категории</Link>
                <Link className={cls.link} href='/users'>Пользователи</Link>
            </nav>
        </div>
    );
}