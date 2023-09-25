import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { db } from "../db";

export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  return {
    req,
    res,
    db,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
