import { Request, Response } from "express";
import { Music } from "../protocols";
import musicService from "../services/music-service";

function getMusics(req: Request, res: Response) {
  const musics = musicService.getMusics();
  res.send(musics);
}

function createMusic(req: Request, res: Response) {
  const music = req.body as Music
  musicService.createMusic(music);
  res.sendStatus(201);
}

const musicController = {
  getMusics,
  createMusic
}

export default musicController;