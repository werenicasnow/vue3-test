import {Module} from "vuex";
import {IState} from "@/store/modules/projects/types";
import {IRootState} from "@/store/types";
import {state} from './state'
import {getters} from './getters'
import {mutations} from './mutations'
import {actions} from './actions'

export const projects: Module<IState, IRootState> = {
    state,
    getters,
    mutations,
    actions,
};