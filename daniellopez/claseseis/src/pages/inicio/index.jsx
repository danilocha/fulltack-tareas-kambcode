import Card from "../../components/card"

const Home = () => {
    return (
        <>
         <Card titulo="home" descripcion="esto es una descripcion de mi pagina web" link={
            {
                url: "/work-experience",
                texto: "ver mas"
            }
         } />
        </>
    )
}

export default Home