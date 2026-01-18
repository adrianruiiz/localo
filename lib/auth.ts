import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaPg } from '@prisma/adapter-pg';
import { nextCookies } from "better-auth/next-js";
import { PrismaClient } from "./generated/prisma/client";

const adapter = new PrismaPg({ 
    connectionString: process.env.DATABASE_URL as string
});

const prisma = new PrismaClient({adapter});

export const auth = betterAuth({
    database: prismaAdapter(prisma, { provider: "postgresql"}),
    
    // prod
    secret: process.env.BETTER_AUTH_SECRET as string,
    baseURL: process.env.BETTER_AUTH_URL as string,
    
    emailAndPassword: {
        enabled: true,
    },
    
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    
    plugins: [nextCookies()],
});