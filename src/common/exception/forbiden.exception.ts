import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbidenException extends HttpException {
   constructor(){
    super('Forbidden custome by me', HttpStatus.FORBIDDEN);
   } 
}