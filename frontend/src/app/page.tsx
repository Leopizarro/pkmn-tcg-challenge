import Banner from "./components/banner/Banner";
import PkmnCardSearcher from "./components/pkmn-card-searcher/PkmnCardSearcher";
import bannerImage from '../../public/tcg-banner.jpg';
import { getAllSets } from "./actions";
import SetList from "./components/set-list/SetList";

export default async function Home() {
  const pkmnSets = getAllSets();
  return (
    <>
      <Banner staticImage={bannerImage} bannerTitle="¡VISUALIZA LAS CARTAS DE DIFERENTES SETS!"/>
      <SetList setList={pkmnSets}/>
      <PkmnCardSearcher options={pkmnSets}/>
    </>
  );
}
