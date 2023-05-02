import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { APP_INTERCEPTOR } from "@nestjs/core";

@Module({
  imports: [
    CacheModule.register({
      ttl: 10 * 1000, // The default expiration time of the cache is 5 seconds
      max: 3, // maximum number of items in cache
      isGlobal: true, // to use CacheModule in other modules
    })
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule {
}
