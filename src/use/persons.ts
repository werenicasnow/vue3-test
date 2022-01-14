import {Ref} from 'vue'
import {IPerson} from "@/store/modules/persons/types";

type UsablePersons = Promise<{persons: Ref<IPerson[] | undefined>}>

export async function usePersons(): UsablePersons {
    const response = await fetch('data/persons.json');
    const persons = await response.json();

    return {persons}
}