export interface IToDoService {
    getToDos(): Promise<string[]>;
}
