import Head from 'next/head';
import React from 'react';
import {ISocials} from "../index";
import styles from '../../styles/Socials.module.scss'

interface ISocialsProps{
    socials: ISocials[]
}

const Socials = ({socials}: ISocialsProps) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            </Head>
            <ul className={styles.socialList}>
                {socials && socials.map(({id, icons})=>{
                    return <li key={id}>
                        <a href={'#'} target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${icons}`} aria-hidden="true" />
                        </a>
                    </li>
                })}
            </ul>
        </>
    );
};

export default Socials;