import { CacheInterceptor } from "@nestjs/cache-manager";
import { CacheKey, CacheTTL, Controller, Get, UseInterceptors } from "@nestjs/common";
import { HttpCacheInterceptor } from "./common/http-cache.interceptor";

@Controller()
export class AppController {

  @Get()
  //@UseInterceptors(CacheInterceptor)
  @UseInterceptors(HttpCacheInterceptor)
  // @CacheKey("custom_key")
  // @CacheTTL(20 * 1000)
  findAll() {
    console.log("findAll");
    return [
      { id: Date.now(), value: Math.random() * 100 }
    ];
  }

}