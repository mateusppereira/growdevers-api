import Redis from 'ioredis'

export const redisHelper = {
  client: null as unknown as Redis,

  async connect(): Promise<void> {
    this.client = new Redis({
      port: 11231,
      host: '',
      username: 'default',
      password: '',
    });
  },

  async disconnect(): Promise<void> {
    await this.client.disconnect()
    this.client = null as any;
  },
};
