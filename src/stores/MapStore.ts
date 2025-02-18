import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

const MapStore = defineStore('map-store', () => {
    const tileSize: Ref<number> = ref(32)
    const getTileSize = (): number => {
        return tileSize.value
    }

    const mapImageLoaded: Ref<boolean> = ref(false)
    const isMapLoaded = (): boolean => {
        return mapImageLoaded.value
    }

    const mapScale: Ref<number> = ref(2)
    const getMapScale = (): number => {
        return mapScale.value
    }
    const changeMapScale = (newMapScale: number): void => {
        mapScale.value = newMapScale
        tileSize.value = 16 * newMapScale
        loadMapImage()
    }

    const mapName: Ref<string> = ref('')
    const getMapName = (): string => {
        return mapName.value
    }
    const changeMapName = (newMapName: string): void => {
        mapName.value = newMapName
        loadMapImage()
    }

    const mapImage: Ref<HTMLImageElement | null> = ref(null)
    const loadMapImage = (): void => {
        mapImageLoaded.value = false

        if (mapImage.value === null) {
            mapImage.value = new Image()

            mapImage.value.onload = () => {
                if (mapImage.value === null) {
                    return
                }

                mapImage.value.width = mapImage.value.naturalWidth * mapScale.value
                mapImage.value.height = mapImage.value.naturalHeight * mapScale.value

                mapImageLoaded.value = true
            }
        }

        if (mapName.value === '') {
            return
        }

        mapImage.value.src = `./maps/${mapName.value}.png`
        mapImage.value.alt = mapName.value
    }

    const getMapImage = (): HTMLImageElement | null => {
        return mapImageLoaded.value ? mapImage.value : null
    }

    const hasStarAtPosition = (trainingId: string, w: number, h: number): boolean => {
        const pivot = trainingIdToInt(trainingId)
        const index = treeIndex(w, h)

        return pivot == index
    }

    const hasCircleAtPosition = (trainingId: string, w: number, h: number): boolean => {
        const pivot = trainingIdToInt(trainingId)
        let index = treeIndex(w, h)

        if (pivot > index) {
            index += 10
        }

        return index - pivot < 5
    }

    const treeIndex = (w: number, h: number): number => {
        const x = w + 3
        const y = h + 3

        return Math.floor((x * y + x + y) / 5) % 10
    }

    const trainingIdToInt = (trainingId: string): number => {
        return parseInt(trainingId) % 10
    }

    return {
        isMapLoaded,
        getMapScale,
        changeMapScale,
        getMapName,
        changeMapName,
        getTileSize,
        getMapImage,
        hasStarAtPosition,
        hasCircleAtPosition
    }
})

export default MapStore
