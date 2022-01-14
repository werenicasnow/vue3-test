import {MutationTree} from 'vuex'
import {IState} from "@/store/types";

export const mutations: MutationTree<IState> =  {
    setResources(state, payload) {
        state.resources = payload
    }
};