import { defineStore } from 'pinia'

interface Map {
  name: string
  scale: number
}

interface Configuration {
  trainerId: string
  map: Map
}

export const HeadbuttConfiguration = defineStore('configuration', {
  state: (): Configuration => {
    return {
      trainerId: '',
      map: {
        name: '',
        scale: 1
      }
    }
  },
  actions: {
    setTrainerId(trainerId: string) {
      this.trainerId = trainerId
    },
    setMapName(mapName: string) {
      this.map.name = mapName
    },
    setMapScale(scale: number) {
      this.map.scale = scale
    }
  }
})
