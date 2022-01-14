import {Ref} from 'vue'
import {IResource} from "@/store/types";
import {useFetch} from "@/use/getFetch";

type UsableResources = Promise<{resources: Ref<IResource[] | undefined>}>

export async function useResources(): UsableResources {
    const {response: resources} = await useFetch<IResource[]>('resources.json');

    return {resources}
}