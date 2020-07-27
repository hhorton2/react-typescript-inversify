import { IHttpService } from "./IHttpService";
import * as faker from "faker";
import { injectable } from "inversify";
@injectable()
export class FakeHttpService implements IHttpService{
    get(): Promise<any> {
        return new Promise<any>((resolve) => {
            setTimeout(() => {
                resolve(arrayOf(faker.random.words))
            }, 1000)
        })
    }

}

function arrayOf<T>(generator: () => T): T[]{
    const numberToGenerate = faker.random.number({min: 2, max: 10});
    const returnValue = [];
    for (let i = 0; i< numberToGenerate; i++){
        returnValue.push(generator());
    }
    return returnValue;
}
