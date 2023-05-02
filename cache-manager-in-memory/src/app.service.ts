import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";

@Injectable()
export class AppService {

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {
  }

  async getHello() {
    await this.cacheManager.set("cached_item", 32, 10 * 1000);
    // await this.cacheManager.del("cached_item");
    // await this.cacheManager.reset();
    console.log(await this.cacheManager.store.keys());
    const cachedItem = await this.cacheManager.get("cached_item");
    console.log(cachedItem);
    return "Hello World!";
  }


  async getRandom() {
    const randomValue = Math.random();
    console.log("randomValue", randomValue);
    return randomValue;
  }

  async getRandom2() {
    const cachedItem = await this.cacheManager.get("cached_item2");
    if (cachedItem) {
      console.log("cachedItem", cachedItem);
      return cachedItem;
    }

    const randomValue = Math.random() * 10;
    await this.cacheManager.set("cached_item2", randomValue, 10 * 1000);
    console.log("randomValue", randomValue);
    return randomValue;
  }

}
