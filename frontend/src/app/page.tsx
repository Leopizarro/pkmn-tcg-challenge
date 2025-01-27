import Banner from "./components/banner/Banner";
import PkmnCardSearcher from "./components/pkmn-card-searcher/PkmnCardSearcher";
import bannerImage from '../../public/tcg-banner.jpg';

export default async function Home() {
  const data = await fetch('http://backend:5000/sets');
  const response = await data.json();
  const pkmnSets = response.allSets
  return (
    <>
      <Banner staticImage={bannerImage} bannerTitle="¡VISUALIZA LAS CARTAS DE DIFERENTES SETS!"/>
      <PkmnCardSearcher options={pkmnSets}/>
    </>
  );
}
