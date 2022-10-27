import { Connection, IDatabaseDriver, EntityManager } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Session } from "express-session";
import Redis from "ioredis";

interface SessionData extends Session {
  userId?: number;
}

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: Omit<Request, "session"> & { session: SessionData };
  res: Response;
  redis: Redis;
};
