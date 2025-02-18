import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

const TrainerStore = defineStore('trainer-store', () => {
    const trainerId: Ref<string> = ref('')
    const trainerIdError: Ref<string | null> = ref(null)

    const checkTrainerID = (trainerId: string): void => {
        const trainerIdRegex = /^\d{5}$/

        if ('' !== trainerId && (!trainerIdRegex.test(trainerId) || 65535 <= parseInt(trainerId))) {
            trainerIdError.value = 'malformed'

            return
        }

        trainerIdError.value = null
    }

    const getTrainerId = (): string => {
        return trainerId.value
    }

    const setTrainerId = (newTrainerId: string): void => {
        checkTrainerID(newTrainerId)

        if (trainerIdError.value !== null) {
            return
        }

        trainerId.value = newTrainerId
    }

    const hasTrainerIdError = (): boolean => {
        return trainerIdError.value !== null
    }

    const getTrainerIdError = (): string => {
        return trainerIdError.value !== null ? trainerIdError.value : ''
    }

    return {
        getTrainerId,
        setTrainerId,
        hasTrainerIdError,
        getTrainerIdError
    }
})

export default TrainerStore
