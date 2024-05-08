import style from './style.module.css'

const WorkExperience = (props) => {
    const experience = props.experience
    return (
        <>
            <div className={style.workExperience}>
                <h2> Work Experience</h2>
            </div>

            {experience.map((key) => (
                <div>
                    <div className={style.containerArryAndObjects}>
                        <p> Date: {key.date} </p>
                        <p> Title:{key.title} </p>
                        <p> Description: {key.description} </p>
                        <p> Languages:{key.languages} </p>
                    </div>
                </div>
            ))}
            <div className={style.btnContainer}>
                <button className={style.btn}> Volver a Home</button>
            </div>

        </>
    )
}

export default WorkExperience;

// {/* tenia esto aqui experience.map((key, i) pero al quitar el index igualmente funciona */ }