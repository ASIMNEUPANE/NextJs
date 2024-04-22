"use server"

import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import client from '@/db'

export async function solve(username:string, password:string) {
 await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  return 'signup'
}
