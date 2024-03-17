import { defineStore } from 'pinia'

export const HeadbuttConfiguration = defineStore('configuration', {
  state: () => {
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
