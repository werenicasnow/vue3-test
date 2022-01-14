import {MutationTree} from "vuex";
import {IState} from "@/store/modules/persons/types";

export const mutations: MutationTree<IState> = {
    setPersons(state, persons) {
        state.persons = persons
    }
};