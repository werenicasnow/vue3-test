import {GetterTree} from "vuex";
import {IState} from "@/store/modules/persons/types";
import {IRootState} from "@/store/types";

export const getters: GetterTree<IState, IRootState> = {
    getPersons(state) {
        return state.persons
    }
};