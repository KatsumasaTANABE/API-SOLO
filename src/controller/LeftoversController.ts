import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Leftovers} from "../entity/Leftovers";

export class LeftoversController {

    private userRepository = getRepository(Leftovers);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async fix(request: Request, response: Response, next: NextFunction) {
        this.userRepository.update(request.params.id,request.body);
        return this.userRepository.findOne(request.params.id);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        console.log(request.params.id);
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}