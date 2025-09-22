import { Body, Controller, Get, Header, HttpCode, Post, Query, Req, Res } from '@nestjs/common';
import { CreatDogtDto } from 'src/dogs/dto/create-dog.dto';
@Controller('dogs')
export class DogsController {

    @Get('find-dog-using-with-nested-object-and-arrray')
    async findDogUsingWithNestedObjectAndArray(@Query() query: any): Promise<String> {
        console.log(query);

        return `This action return a dog with name: ${query.filter?.where?.name} and age: ${query?.filter?.where?.age}`;
    }
    // ==> GET /dogs/find-dog-using-with-nested-object-and-arrray?filter[where][name]=lamoacac&filter[where][age]=20
    
    
    @Get('find-dog')
    async findDog(@Query('name') name: string): Promise<String> {
        return `This action return a dog with name: ${name}`;
    }
    // ==> GET /dogs/find-dog?name=lamoccac

    @Post('create-dog-with-dto')
    async createDog(@Body() { name, age, breed }: CreatDogtDto): Promise<String> {
        return `This action crate a dog with name: ${name}, age: ${age}, breed: ${breed}`;
    }
    // ==> POST /dogs/create-dog-with-dto with body {name: string, age: number, breed: string}


    @Post('custom-status-code')
    @HttpCode(202)
    @Header('Cache-Control', 'none')
    createWithCustomStatusCode(): string {
        return 'this act create a dog with custom status code'
    }
    // ==> POST /dogs/custom-status-code with status code 202 and set header 

    @Post()
    create(): string {
        return 'this act create a dog'
    }
    // ==> POST /dogs

    @Get()
    findAll(): string {
        return 'this action return all dogs';
    }
    // ==> ex: GET /dogs

    @Get('request-object')
    findAllWithRequestObject(@Req() req: Request): string {
        return 'this action return all dogs with request object';
    }

    // ==> ex: GET /dogs but with request object meaning u can acces to all of reqest object properties

}

