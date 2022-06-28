import React, { useEffect, useState } from "react";
import { valorantApi } from "../../api/valorantApi";
import { Link } from "react-router-dom";

import "./home.scss"
import bg from "../../assets/bg.png"
import bg2 from "../../assets/bg2.jpg"

import Button from "../../components/button/Button";
import GridItems from "../../components/grid-list/GridItems";
import ListItems from "../../components/list-items/ListItems";

function Home() {
   const [weapons, setWeapons] = useState()
   const [gamemodes, setGameModes] = useState()
   const [maps, setMaps] = useState()
   const [sprays, setSprays] = useState()

   useEffect(() => {
      const getListWeapons = async () => {
         const response = await valorantApi.getWeaponsList()
         setWeapons(response.data)
      }

      const getMaps = async () => {
         const response = await valorantApi.getMapsList()
         setMaps(response.data)
      }

      const getListGameModes = async () => {
         const response = await valorantApi.getGameModesList()
         setGameModes(response.data)
      }

      const getSprays = async () => {
         const response = await valorantApi.getSpraysList()
         setSprays(response.data)
      }
      getListWeapons()
      getListGameModes()
      getMaps()
      getSprays()
   }, [])

   return (
      <main>
         <header className="header container" style={{
            backgroundImage: `url(${bg})`,
            backgroundAttachment: "fixed",
         }}>

            <div className="header_game">
               <h2 className="mgb-3 a">A 5v5 charracter based <br /> tactical shooter</h2>
               <Button>
                  Play Now
               </Button>
            </div>

            <div className="header_valorant">
               <h1>Valorant</h1>
            </div>

            <div className="header_agent">
               <img src="https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportraitv2.png" alt="" />
            </div>
         </header>

         <section className="home_section container">
            <div className="width__large">
               <div className="home_weapons">
                  <ListItems list={weapons && weapons} className={'weapons'} delay={1000} perPage={3} />
               </div>
            </div>
         </section>

         <section className="home_section mgb-3" style={{
            backgroundImage: `url(${bg2})`,
            backgroundAttachment: "fixed",
         }}>
            <div className="home__agents">
               <div className="home__agents__imgs">
                  <img src="https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportraitv2.png" alt="" />
                  <img src="https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportraitv2.png" />
               </div>

               <div className="home__agents__info">
                  <h2 className="home__agents__info__about mgb-3">Seus <br /> Agents</h2>
                  <h3 className="mgb-3">A CRIATIVIDADE É SUA MELHOR ARMA.</h3>
                  <p className="home__agents__info__desc mgb-3">Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!</p>

                  <Button>
                     <Link to={"/catalogo/agents"}>
                        Ver todos os Agents
                     </Link>
                  </Button>
               </div>
            </div>
         </section>

         <section className="bg_change mgb-3 container">
            <div className="agent__bg">
               <img src="https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportraitv2.png" alt="" />
            </div>

            <div className="home_section_center">
               <div className="home__category-flex mgb-2">
                  <h1 className="home__category-title">Game Modes</h1>

                  <Button>
                     ver Todos os Game Modes
                  </Button>
               </div>

               <GridItems list={gamemodes && gamemodes.slice(0, 8)} className={"cards"} typeImg={"displayIcon"} />
            </div>
         </section>

         <section>
            <div className="home_section mgb-3">
               <div className="header_agents" style={{ width: "100%" }}>
                  <div className="home__category-flex container mgb-2">
                     <h1 className="home__category-title">Maps</h1>
                     <Button>
                        <Link to={"/catalogo/maps"}>
                           Ver todos os maps
                        </Link>
                     </Button>
                  </div>

                  <ListItems list={maps && maps.slice(0, 7)} className={'maps'} delay={5000} perPage={3} />
               </div>
            </div>
         </section>

         <section>
            <div className="home_section container">
               <div className="home__sprays">
                  <div className="home__category-flex mgb-2">
                     <h1 className="home__category-title">Sprays</h1>
                     <Button>
                        <Link to={"/catalogo/sprays"}>
                           Ver todos os Sprays
                        </Link>
                     </Button>
                  </div>

                  <GridItems list={sprays && sprays.slice(0, 8)} className={"sprays"} />
               </div>
            </div>
         </section>
      </main >
   );
}
export default Home;
