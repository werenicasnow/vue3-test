export interface IRootState {}

export interface IResource {
    resourceId: number,
    projectId: string,
    position: string,
    rateType: string,
    currentValue: number,
}

export interface IState {
    resources: IResource[]
}