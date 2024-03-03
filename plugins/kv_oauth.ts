// plugins/kv_oauth.ts
import { createGitHubOAuthConfig, createHelpers } from "kv_oauth/mod.ts";
import type { Plugin } from "$fresh/server.ts";
import { getGitHubUser } from "../utils/github.ts";
import { createUser, getUser, updateUserSession, User } from "../utils/db.ts";
import { redirect } from "../utils/http.ts";

const { signIn, handleCallback, signOut, getSessionId } = createHelpers(
  createGitHubOAuthConfig(),
);

export default {
  name: "kv-oauth",
  routes: [
    {
      path: "/signin",
      async handler(req) {
        return await signIn(req);
      },
    },
    {
      path: "/callback",
      async handler(req) {
        // Return object also includes `accessToken` and `sessionId` properties.
        const { response, tokens, sessionId } = await handleCallback(req);

        const githubUser = await getGitHubUser(tokens.accessToken);
        const user = await getUser(githubUser.login);

        if (user === null) {
          const user: User = {
            login: githubUser.login,
            sessionId,
          };
          await createUser(user);
        } else {
          await updateUserSession(user, sessionId);
          redirect("/");
        }

        return response;
      },
    },
    {
      path: "/signout",
      async handler(req) {
        return await signOut(req);
      },
    },
    // {
    //   path: "/my",
    //   async handler(req) {
    //     return await getSessionId(req) === undefined
    //       ? new Response("Unauthorized", { status: 401 })
    //       : new Response("You are allowed");
    //   },
    // },
  ],
} as Plugin;
