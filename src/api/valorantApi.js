import { axiosClient } from "./axiosClient";
import apiConfig from "./apiConfig";


export const endpoints = {
   agents: "agents",
   weapons: "weapons",
   events: "events",
   maps: "maps",
   gamemodes: "gamemodes"
}

export const valorantApi = {
   getAgentList: () => {
      const url = "/agents"
      return axiosClient.get(url)
   },

   getWeaponsList: () => {
      const url = "/weapons/"
      return axiosClient.get(url)
   },

   getEventsList: () => {
      const url = "/events/"
      return axiosClient.get(url)
   },

   getMapsList: () => {
      const url = "/maps/"
      return axiosClient.get(url)
   },

   getGameModesList: () => {
      const url = "/gamemodes/"
      return axiosClient.get(url)
   },
   getSpraysList: () => {
      const url = "/sprays/"
      return axiosClient.get(url)
   }
}