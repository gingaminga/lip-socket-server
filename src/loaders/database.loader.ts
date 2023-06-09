// DB 관련 유틸들을 관리하는 로더

import RelationDatabaseClient from "@/databases/rdb/client";
import RedisClient from "@/databases/redis/client";

export const redisClient = new RedisClient();
export const relationDatabaseClient = new RelationDatabaseClient();
