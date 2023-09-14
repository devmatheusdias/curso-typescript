import joi from "joi";
import { Music } from "../protocols";

export const musicSchema = joi.object<Music>({
    artist: joi.string().required(),
    title: joi.string().required()
})