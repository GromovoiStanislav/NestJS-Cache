import { CacheInterceptor, CacheKey, CacheTTL, Controller, Get, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";

// @UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  @CacheKey("some_route")
  @CacheTTL(10 * 1000)
  async getHello() {
    console.log("Hello");
    return this.appService.getHello();
  }


  @UseInterceptors(CacheInterceptor)
  @Get("random")
  @CacheKey("some_random")
  @CacheTTL(10 * 1000)
  async getRandom() {
    console.log("random");
    return this.appService.getRandom();
  }


  @Get("random2")
  async getRandom2() {
    console.log("random2");
    return this.appService.getRandom2();
  }

}
