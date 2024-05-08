import style from './style.module.css'

const Networks = () => {
    return (
        <>
            <div>
                <div className={style.networks}>
                    Aquí puedes ver varios enlaces donde puedes encontrar información sobre mis trabajos como Freelancer y mi repositorio de GitHub:
                </div>
            </div>
            <div>
                <div>
                    <nav className={style.links}>
                        <ul>
                            <li>
                                <a href="https://www.upwork.com/freelancers/~01940e33fa24525ccb">
                                    Perfil de Upwork
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/david-echenagucia-335724160/">
                                    Perfil de Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/davidleon220">
                                    Perfil de GitHub
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Networks;