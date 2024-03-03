import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  POST(_req, _ctx) {
    const headers = new Headers();

    headers.set("location", "/");
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function Signup(props: PageProps) {
  const err = props.url.searchParams.get("error");

  return (
    <section class="">
      <div class="mx-auto">
        <h2 class="text-2xl text-center">Create an account</h2>
      </div>
      <div class="w-full">
        {err && (
          <div class="bg-red-400 border-1-4 p-4" role="alert">
            <p class="font-bold">Error</p>
            <p>{err}</p>
          </div>
        )}
        <form class="space-y-4" method="POST">
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              id="email"
              placeholder="Email address"
            />
            <label for="email">
              Email address
            </label>
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              id="password"
              placeholder="Password"
            />
            <label for="password">
              Password
            </label>
          </div>

          <button type="submit">
            Login
          </button>

          <p class="text-sm font-semibold">
            Already have an account?
            <a
              href="/login"
              class=""
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
