import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';

@Module({
  imports: [],
  controllers: [AddressController],
  providers: [],
})
export class AddressModule {}
