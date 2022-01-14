import {ActionTree} from "vuex";
import {IState} from "@/store/modules/projects/types";
import {IRootState} from "@/store/types";

export const actions: ActionTree<IState, IRootState> = {
    setProjects({ commit }, projects) {
        commit('setProjects', projects)
    }
};