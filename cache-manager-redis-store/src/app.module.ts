import { CacheInterceptor, CacheModule, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { redisStore } from "cache-manager-redis-store";
import type { RedisClientOptions } from "redis";


@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      // @ts-ignore
      store: redisStore,
      host: "localhost",
      port: 6379,
      db: 0,
      ttl: 10,
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor
    // }
  ]
})
export class AppModule {
}
