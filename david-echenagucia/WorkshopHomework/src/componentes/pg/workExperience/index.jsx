import style from './style.module.css'

function WorkExperience(props) {

    const experience = props.experience
    //llamar a los arreglos con los props
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