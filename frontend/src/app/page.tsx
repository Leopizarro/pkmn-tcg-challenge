import Banner from "./components/banner/Banner";
import PkmnCardSearcher from "./components/pkmn-card-searcher/PkmnCardSearcher";
import bannerImage from '../../public/tcg-banner.jpg';
import { SetInterface } from "./interfaces/set.interface";

export default async function Home() {
  let pkmnSets: SetInterface[] = [];
  try {
    const data = await fetch(`${process.env.SERVER_BACKEND_URL}/sets`);
    const response = await data.json();
    pkmnSets = response.allSets
  } catch (error) {
    console.log(error);
    throw new Error('Error obteniendo sets de cartas')
  }
  return (
    <>
      <Banner staticImage={bannerImage} bannerTitle="¡VISUALIZA LAS CARTAS DE DIFERENTES SETS!"/>
      <PkmnCardSearcher options={pkmnSets}/>
    </>
  );
}
