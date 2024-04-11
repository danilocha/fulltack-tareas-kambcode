import InfoCard from '../infoCard'
const info = [0]
function App() {
  return (
    <>
     {info.map(() => (<InfoCard />))}
    </>
  );
}

export default App;
