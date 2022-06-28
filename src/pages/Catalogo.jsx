import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { valorantApi } from "../api/valorantApi";
import GridItems from "../components/grid-list/GridItems";

function Catalogo() {
   const category = useParams()
   const [categoryType, setCategoryType] = useState()

   useEffect(() => {
      switch (category.category) {
         case "agents":
            const getAgents = async () => {
               const response = await valorantApi.getAgentList();
               setCategoryType(response.data)
            }
            getAgents()
            break
         case "weapons":
            const getListWeapons = async () => {
               const response = await valorantApi.getWeaponsList()
               setCategoryType(response.data)
            }
            getListWeapons()
            break
         case "maps":
            const getMaps = async () => {
               const response = await valorantApi.getMapsList()
               setCategoryType(response.data)
            }
            getMaps()
            break
         default:
            alert("ERRO")
      }
   }, [category])

   console.log(category)

   return <div className="container" style={{ marginTop: "5rem" }}>
      <h2 className="category">{category.category}</h2>
      <GridItems list={categoryType && categoryType} className={`${category.category}`} />
   </div>;
}

export default Catalogo;
