import React from 'react';
import experience from '../../components/estilos/experience.module.css';


function Experience() {
    const exp = [
        [
            { 
                date: "2022 - present",
                title: "Senior Frontend Eingennier -IYK",
                description: "Building the Whole Wide World﹡",
                languages: "Remix • Prisma • Tailwind • Shadcn",
            },
            { 
                date: "2014 - 2016",
                title: "Front End Engineer Neverbland",
                description: "Part of a tight-knit team of designers...",
                languages: "React • Redux • CSSModules • Three.js",
            }
        ]
    ]
    return (
            <>
                <div >
                    <h2 className={experience.title_exp} > Experience </h2>
                </div>
                {exp.map((key, i) => (
                    <div className={experience.container}>
                        <p>Date: {key.date}</p>
                        <p>Title: {key.title}</p>
                        <p>Description: {key.description}</p>
                        <p>Languages: {key.languages}</p>
                    </div>
                ))}
    
                <div>
                    <button className={experience.btn}>Ver más</button>
                </div>
    
    
            </>
        )
    }

export default Experience;