import {Ref} from 'vue'
import {IProject} from "@/store/modules/projects/types";
import {useFetch} from "@/use/getFetch";

type UsableProjects = Promise<{projects: Ref<IProject[] | undefined>}>

export async function useProjects(): UsableProjects {
    const {response: projects} = await useFetch<IProject[]>('projects.json');
    return {projects}
}