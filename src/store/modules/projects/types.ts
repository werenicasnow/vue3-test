export interface IProject {
    projectId: number,
    name: string,
    costObject: string,
}

export interface IState {
    projects: IProject[]
}