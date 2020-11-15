import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Genres} from "../entity/Genres";

export class GenresController {

    private userRepository = getRepository(Genres);

    async all(request: Request, response: Response, next: NextFunction) {
        const genres: Genres[] = await this.userRepository.find();
        const status = typeof genres === "undefined" ? 400 : 200;
        response.status(status);
        response.json(genres);
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const genres: Genres = await this.userRepository.findOne(request.params.id);
        const status = typeof genres === "undefined" ? 400 : 200;
        response.status(status);
        response.json(genres);
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const genres: Genres = await this.userRepository.save(request.body);
            response.status(200);
            response.json(genres);
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
        const genresToRemove = await this.userRepository.findOne(request.params.id);
        console.log(request.params.id);
        console.log(genresToRemove);
        await this.userRepository.remove(genresToRemove);
    }

}