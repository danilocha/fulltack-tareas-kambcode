import style from './style.module.css'

function About() {
    return (
        <>
            <div className={style.container}>
                <h3>About</h3>
                <p className={style.description}>I am a graduate in International Business from Alejandro de Humboldt University, with over 4 years of experience as a freelancer.
                    My ability to efficiently manage time allows me to adapt to various work environments. Currently, I am venturing into a
                    promising career as a JavaScript Front-End Developer, with strong knowledge in Python, SQL, ORMs, and Mongoose.
                </p>
            </div>
        </>
    );
}

export default About;

