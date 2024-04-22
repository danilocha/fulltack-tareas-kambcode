import style from './style.module.css'

function WorkExperience() {
    const experience = [
        {
            date: "04-2023 | 10-2023 Lima, Peru",
            title: "Wordpress Developler",
            description: "E-commerce Platform Developer using the Divi plugin. Editor and builder of web pages. Configuration and code improvements resulting in a 90% reduction in website crashes.",
            languages: "N/A",
        },
        {
            date: "12-2021 | 12-2023 Florida, EE.UU",
            title: "Junior Agricultural Data Analyst",
            description: "Automation of data loading and analysis. Tickets management. Help Desk. Technical Support. Creation of statistics to enhance crop tracking. Identify and resolve issues. 30% reduction in data leakage.",
            languages: "N/A",
        },
        {
            date: "07-2022 | 07-2023 Florida, EE.UU",
            title: "CRM Lead Data Cleaning (B2B)",
            description: "Creation of an automated system for lead qualification. Team management. Expansion of potential client base by 20%. Identifying and resolving issues related to lead duplication in Odoo. Creation/modification/deletion of leads in Odoo.",
            languages: "N/A",
            
        }
    ]
    return (
        <>
            <div className={style.workexperience}>
                <h2>Work Experience</h2>
            </div>
            {experience.map((key, i) => (
                <div className={style.container}>
                    <p>Date: {key.date}</p>
                    <p>Title: {key.title}</p>
                    <p>Description: {key.description}</p>
                    <p>Languages: {key.languages}</p>
                </div>
            ))}

            <div>
                <button className={style.btn}>Ver más</button>
            </div>


        </>
    )
}

export default WorkExperience;