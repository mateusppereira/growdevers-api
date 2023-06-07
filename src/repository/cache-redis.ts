import Redis from 'ioredis';
import { redisHelper } from '../db/redis';

export class CacheRedisRepository {
  private redisConn: Redis;

  constructor() {
    this.redisConn = redisHelper.client;
  }

  async set(key: string, value: Object | string): Promise<void> {
    const valueToStore = typeof value === 'object'
      ? JSON.stringify(value)
      : value;
    await this.redisConn.set(key, valueToStore);
  }

  async get(key: string): Promise<Object | string | null> {
    const value = await this.redisConn.get(key);
    if (value !== null && (value[0] === '{' || value[0] === '[')) {
      return JSON.parse(value);
    }
    return value;
  }

  async invalidate(key: string): Promise<void> {
    await this.redisConn.del(key);
  }
}
