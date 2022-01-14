import {GetterTree} from "vuex";
import {IState} from "@/store/modules/projects/types";
import {IRootState} from "@/store/types";

export const getters: GetterTree<IState, IRootState> = {
    getProjects(state) {
        return state.projects
    }
};