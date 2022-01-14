import {createStore, createLogger, Store, useStore as baseUseStore, ModuleTree, Module} from 'vuex'
import {InjectionKey} from 'vue'
import {persons} from './modules/persons'
import {projects} from './modules/projects'
import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";
import {IRootState, IState} from "@/store/types";

export const key: InjectionKey<Store<IState>> = Symbol();

export const state: IState = {
    resources: []
};

export const modules: ModuleTree<IRootState> = {
    persons,
    projects
};

export const store = createStore<IState>({
    plugins: [createLogger()],
    modules,
    state,
    mutations,
    actions,
    getters
});

export function useStore() {
    return baseUseStore(key)
}