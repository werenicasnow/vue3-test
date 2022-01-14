import {ActionTree} from "vuex";
import {IState} from "@/store/modules/persons/types";
import {IRootState} from "@/store/types";

export const actions: ActionTree<IState, IRootState> = {
    setPersons({ commit }, persons) {
        commit('setPersons', persons)
    }
};