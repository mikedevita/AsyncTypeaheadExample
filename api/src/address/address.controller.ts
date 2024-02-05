import { Controller, Get, Query } from '@nestjs/common';

@Controller('address')
export class AddressController {
  @Get()
  getAll(): string {
    return 'All addresses';
  }

  @Get('search')
  search(@Query('term') term: string): string {
    return `You searched for ${term}`;
  }
}
