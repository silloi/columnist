import { Handlers, PageProps } from "$fresh/server.ts";
import { getSessionId } from "kv_oauth/mod.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const headers = new Headers();

    const sessionId = await getSessionId(req);
    if (sessionId) {
      headers.set("location", "/");
      return new Response(null, {
        status: 303,
        headers,
      });
    }
    return ctx.render();
  },
};

export default function Login(props: PageProps) {
  return (
    <section class="">
      <h2 class="text-2xl text-center">Login</h2>
      <a href="/signin">Sign in / Sign up with GitHub</a>
    </section>
  );
}
