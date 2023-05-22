import { DataSource } from 'typeorm';
import { config } from './config/typeorm.config';

export class DatabaseConnection {
  private _client: any;

  public get client(): DataSource {
    return this._client;
  }

  async connect(): Promise<void> {
    this._client = new DataSource(config);
    await this._client.initialize();
  }

  async disconnect(): Promise<void> {
    await this._client.destroy();
    this._client = null as any;
  }
};
