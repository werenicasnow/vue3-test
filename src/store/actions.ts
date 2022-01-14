import { ActionTree } from 'vuex';
import {IState} from "@/store/types";

export const actions: ActionTree<IState, IState> = {
    setResources({ commit }, payload) {
        commit('setResources', payload)
    }
};