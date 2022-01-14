import {GetterTree} from "vuex";
import {IState} from "@/store/types";

export const getters: GetterTree<IState, IState> = {
    getResources(state,) {
        return state.resources;
    },
    getResourcesJoinPersons(state, getters) {
        const resources = getters.getResources;
        resources.forEach(r => {
            const person = getters.getPersons.find(p => p.id === r.resourceId);
            //const personInfo = [person.lastName, person.firstName, person.middleName];
            //r.name = personInfo.filter(Boolean).join(' ');
            r.name = `${person.lastName} ${person.firstName} ${person.middleName}`
        });
        return resources;
    },
    projectsOfUser: (_, getters) => (idProject) => {
        return getters.getResourcesJoinPersons.filter(r => r.projectId === idProject)
    }
};