import { IToDoService } from "./IToDoService";
import { inject, injectable } from "inversify";
import { TYPES } from "../../ioc/TYPES";
import { IHttpService } from "../http/IHttpService";
@injectable()
export class ToDoService implements IToDoService {
    // @ts-ignore
    @inject(TYPES.IHttpService) private _httpService: IHttpService;

    async getToDos(): Promise<string[]> {
        return await this._httpService.get();
    }
}
