import { Request, Response} from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {
    constructor(private userUseCase:UserUseCase){
        // Solución para no recurrir a usar arrow functions
        this.getController = this.getController.bind(this);
        this.insertController = this.insertController.bind(this);
    }

    public async getController({ query }: Request, res: Response) {
        const {uuid = ''} = query;
        const user = await this.userUseCase.getDetailUser(`${uuid}`);
        res.send({ user });
    }

    public async insertController({ body }: Request, res: Response) {
        const user = await this.userUseCase.registerUser(body);
        res.send({ user });
    }
}