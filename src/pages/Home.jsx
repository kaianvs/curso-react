import { Pokemon } from "../components/Pokemon";


export const Home = ()=> {
  return (

    <div>
     
      <h1>
         Meu site React
      </h1>
      <Pokemon  />
      <Pokemon name = "Charmander" />
      <Pokemon name = "Charizard" />

    </div>
  );
}

export default Home;
