"use client";

import { PropsWithChildren } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
// import { ZuploProvider } from "./zuplo-provider";

export function Providers({ children }: PropsWithChildren) {
    return <UserProvider>{children}</UserProvider>
}