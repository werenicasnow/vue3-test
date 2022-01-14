export interface IPerson {
    id: number,
    firstName: string,
    lastName: string,
    middleName?: string,
}

export interface IState {
    persons: IPerson[]
}