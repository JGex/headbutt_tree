import Version from '@/globals/version'
import Encounter from '@/globals/encounter'
import Pokemon from '@/globals/pokemon'

const MAP: {
    [key: string]: {
        encounter: {
            [key: string]: number
        }
    }
} = {
    azalea_town: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 0 }
    },
    ilex_forest: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 1 }
    },
    lake_of_rage: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 2 }
    },
    route_26: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 3 }
    },
    route_27: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 3 }
    },
    route_29: {
        encounter: { [Version.GOLD]: 1, [Version.SILVER]: 1, [Version.CRYSTAL]: 4 }
    },
    route_30: {
        encounter: { [Version.GOLD]: 1, [Version.SILVER]: 1, [Version.CRYSTAL]: 4 }
    },
    route_31: {
        encounter: { [Version.GOLD]: 1, [Version.SILVER]: 1, [Version.CRYSTAL]: 4 }
    },
    route_32: {
        encounter: { [Version.GOLD]: 1, [Version.SILVER]: 1, [Version.CRYSTAL]: 3 }
    },
    route_33: {
        encounter: { [Version.GOLD]: 1, [Version.SILVER]: 1, [Version.CRYSTAL]: 0 }
    },
    route_34: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 4 }
    },
    route_35: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 4 }
    },
    route_36: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 4 }
    },
    route_37: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 4 }
    },
    route_38: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 4 }
    },
    route_39: {
        encounter: { [Version.GOLD]: 0, [Version.SILVER]: 0, [Version.CRYSTAL]: 4 }
    },
    route_42: {
        encounter: { [Version.GOLD]: 1, [Version.SILVER]: 1, [Version.CRYSTAL]: 0 }
    },
    route_43: {
        encounter: { [Version.GOLD]: 1, [Version.SILVER]: 1, [Version.CRYSTAL]: 2 }
    },
    route_44: {
        encounter: { [Version.GOLD]: 1, [Version.SILVER]: 1, [Version.CRYSTAL]: 5 }
    }
}

export interface PokemonEncounterGroup {
    [key: string]: Array<PokemonEncounter>
}

export interface PokemonEncounter {
    poke: string
    rate: number
}

const ENCOUNTER_GROUP: {
    [key: string]: Array<PokemonEncounterGroup>
} = {
    [Version.GOLD]: [
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.CATERPIE, rate: 65 },
                { poke: Pokemon.METAPOD, rate: 15 },
                { poke: Pokemon.BUTTERFREE, rate: 5 },
                { poke: Pokemon.EXEGGCUTE, rate: 15 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.CATERPIE, rate: 50 },
                { poke: Pokemon.BUTTERFREE, rate: 5 },
                { poke: Pokemon.EXEGGCUTE, rate: 15 },
                { poke: Pokemon.PINECO, rate: 30 }
            ]
        },
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.SPEAROW, rate: 80 },
                { poke: Pokemon.AIPOM, rate: 20 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.SPEAROW, rate: 50 },
                { poke: Pokemon.AIPOM, rate: 20 },
                { poke: Pokemon.HERACROSS, rate: 30 }
            ]
        }
    ],
    [Version.SILVER]: [
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.WEEDLE, rate: 65 },
                { poke: Pokemon.KAKUNA, rate: 15 },
                { poke: Pokemon.BEEDRILL, rate: 5 },
                { poke: Pokemon.EXEGGCUTE, rate: 15 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.WEEDLE, rate: 50 },
                { poke: Pokemon.BEEDRILL, rate: 5 },
                { poke: Pokemon.EXEGGCUTE, rate: 15 },
                { poke: Pokemon.PINECO, rate: 30 }
            ]
        },
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.SPEAROW, rate: 80 },
                { poke: Pokemon.AIPOM, rate: 20 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.SPEAROW, rate: 50 },
                { poke: Pokemon.AIPOM, rate: 20 },
                { poke: Pokemon.HERACROSS, rate: 30 }
            ]
        }
    ],
    [Version.CRYSTAL]: [
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.SPEAROW, rate: 65 },
                { poke: Pokemon.EKANS, rate: 15 },
                { poke: Pokemon.AIPOM, rate: 20 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.SPEAROW, rate: 50 },
                { poke: Pokemon.AIPOM, rate: 20 },
                { poke: Pokemon.HERACROSS, rate: 30 }
            ]
        },
        {
            [Encounter.RARE]: [
                { poke: Pokemon.CATERPIE, rate: 15 },
                { poke: Pokemon.METAPOD, rate: 5 },
                { poke: Pokemon.WEEDLE, rate: 15 },
                { poke: Pokemon.KAKUNA, rate: 5 },
                { poke: Pokemon.HOOTHOOT, rate: 60 }
            ],
            [Encounter.NORMAL]: [
                { poke: Pokemon.BUTTERFREE, rate: 5 },
                { poke: Pokemon.BEEDRILL, rate: 5 },
                { poke: Pokemon.HOOTHOOT, rate: 50 },
                { poke: Pokemon.NOCTOWL, rate: 10 },
                { poke: Pokemon.PINECO, rate: 30 }
            ]
        },
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.VENONAT, rate: 15 },
                { poke: Pokemon.EXEGGCUTE, rate: 20 },
                { poke: Pokemon.HOOTHOOT, rate: 65 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.EXEGGCUTE, rate: 20 },
                { poke: Pokemon.HOOTHOOT, rate: 50 },
                { poke: Pokemon.PINECO, rate: 30 }
            ]
        },
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.EKANS, rate: 15 },
                { poke: Pokemon.EXEGGCUTE, rate: 20 },
                { poke: Pokemon.HOOTHOOT, rate: 65 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.EXEGGCUTE, rate: 20 },
                { poke: Pokemon.HOOTHOOT, rate: 50 },
                { poke: Pokemon.PINECO, rate: 30 }
            ]
        },
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.EXEGGCUTE, rate: 20 },
                { poke: Pokemon.HOOTHOOT, rate: 50 },
                { poke: Pokemon.LEDYBA, rate: 15 },
                { poke: Pokemon.SPINARAK, rate: 15 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.EXEGGCUTE, rate: 20 },
                { poke: Pokemon.HOOTHOOT, rate: 50 },
                { poke: Pokemon.PINECO, rate: 30 }
            ]
        },
        {
            [Encounter.NORMAL]: [
                { poke: Pokemon.SPEAROW, rate: 80 },
                { poke: Pokemon.AIPOM, rate: 20 }
            ],
            [Encounter.RARE]: [
                { poke: Pokemon.SPEAROW, rate: 50 },
                { poke: Pokemon.AIPOM, rate: 20 },
                { poke: Pokemon.HERACROSS, rate: 30 }
            ]
        }
    ]
}

export default {
    MAP: MAP,
    ENCOUNTER_GROUP: ENCOUNTER_GROUP
}
