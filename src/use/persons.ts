import {Ref} from 'vue'

interface Person {
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
}

type UsablePersons = Promise<{persons: Ref<Person[] | undefined>}>

export async function usePersons(): UsablePersons {
    const response = await fetch('data/persons.json');
    const persons = await response.json();

    return {persons}
}