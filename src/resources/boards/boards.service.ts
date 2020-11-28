import { CreateBoardDto } from '@app/dto/create-board.dto';
import { Board, BoardDocument } from '@app/persistent';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board.name) private readonly boardModel: Model<BoardDocument>) {}

  create(createBoardDto: CreateBoardDto) {
    const createdBoard = new this.boardModel(createBoardDto);
    return createdBoard.save();
  }

  findAll() {
    return this.boardModel.find().exec();
  }
}
