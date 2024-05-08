
import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../estilos/experience.module.css';


const Experience = () => {
    const exp = [
        {
            date: "January 2022 - December2022",
            title: "lawyer",
            description: "legal adviser",
            languages: "native Spanish",
        },
        {
            date: "December 2022 - July 2023",
            title: "lawyer",
            description: "legal adviser",
            languages: "native Spanish",
        }
    ]
    return (
        <div className={styles.fondo} >
            <div >
                <h2 className={styles.title_exp} > Experience </h2>
            </div>
            {exp.map((info) => (
                <div className={styles.container}>
                    <p>Date: {info.date}</p>
                    <p>Title: {info.title}</p>
                    <p>Description: {info.description}</p>
                    <p>Languages: {info.languages}</p>
                </div>
            ))}
            <div className={styles.container} >
                <Link to="/" className={styles.container}>Inicio</Link>
            </div>
        </div>
    )
}


export default Experience;