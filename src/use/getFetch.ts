import {ref, Ref} from 'vue'

type FetchRequest = () => Promise<void>

interface UsableFetch<T> {
    request?: FetchRequest
    response: Ref<T | undefined>
}

export async function useFetch<T>(url: RequestInfo, init?: RequestInit): Promise<UsableFetch<T>> {
    const response = ref<T>();
    const res = await fetch(`data/${url}`, init);
    response.value = await res.json();

    return {response}
}