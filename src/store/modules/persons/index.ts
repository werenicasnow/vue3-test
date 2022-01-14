import {Module} from "vuex";
import {IState} from "@/store/modules/persons/types";
import {IRootState} from "@/store/types";
import {state} from './state'
import {getters} from './getters'
import {mutations} from './mutations'
import {actions} from './actions'

export const persons: Module<IState, IRootState> = {
    state,
    getters,
    mutations,
    actions,
};