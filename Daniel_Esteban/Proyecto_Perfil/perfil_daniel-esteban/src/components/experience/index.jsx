import React from 'react';
import experience from '../../components/estilos/experience.module.css';


function Experience() {
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
        <>
            <div >
                <h2 className={experience.title_exp} > Experience </h2>
            </div>
            {exp.map((info) => (
                <div className={experience.container}>
                    <p>Date: {info.date}</p>
                    <p>Title: {info.title}</p>
                    <p>Description: {info.description}</p>
                    <p>Languages: {info.languages}</p>
                </div>
            ))}

            <div>
                <button className={experience.btn}>Ver más</button>
            </div>


        </>
    )
}

export default Experience;