import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Leftovers} from "../entity/Leftovers";

export class LeftoversController {

    private userRepository = getRepository(Leftovers);

    async all(request: Request, response: Response, next: NextFunction) {
        const leftovers: Leftovers[] = await this.userRepository.find();
        const status = typeof leftovers === "undefined" ? 400 : 200;
        response.status(status);
        response.json(leftovers);
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const leftovers: Leftovers = await this.userRepository.findOne(request.params.id);
        const status = typeof leftovers === "undefined" ? 400 : 200;
        response.status(status);
        response.json(leftovers);
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const leftovers: Leftovers = await this.userRepository.save(request.body);
            response.status(200);
            response.json(leftovers);
            return this.userRepository.save(request.body);
          } catch (error) {
            response.status(400);
            response.json(error.message);
          }
    }

    async fix(request: Request, response: Response, next: NextFunction) {
        await this.userRepository.update(request.params.id,request.body);
        response.status(200);
        response.json(response);
        return this.userRepository.findOne(request.params.id);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const leftoversToRemove = await this.userRepository.findOne(request.params.id);
        console.log(request.params.id);
        console.log(leftoversToRemove);
        await this.userRepository.remove(leftoversToRemove);
    }

}