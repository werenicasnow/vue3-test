import {MutationTree} from "vuex";
import {IState} from "@/store/modules/projects/types";

export const mutations: MutationTree<IState> = {
    setProjects(state, projects) {
        state.projects = projects
    }
};