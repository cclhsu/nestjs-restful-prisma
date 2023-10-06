// Path: src/hello/factory/restful/hello.module.ts
// DESC: hello controller
'use strict';
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from '../../hello.service';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  exports: [HelloService],
})
export class HelloModule {}
