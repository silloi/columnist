// Copyright 2023-2024 the Deno authors. All rights reserved. MIT license.
import { defineRoute } from "$fresh/server.ts";
import { getItem } from "../../../../utils/db.ts";
import { assertSignedIn, State } from "../../../../plugins/session.ts";
import Layout from "../../../../components/Layout.tsx";
import Column from "../../../../islands/Column.tsx";

export default defineRoute<State>(async (_req, ctx) => {
  assertSignedIn(ctx);

  const draft = await getItem(ctx.params.id);
  if (draft === null) return await ctx.renderNotFound();
  if (draft.userLogin !== ctx.state.sessionUser.login) {
    return await ctx.renderNotFound();
  }

  const PILCROW = "▼";
  const PERIOD = "。";
  const content = draft.paragraphs.join(PILCROW) + PERIOD;

  return (
    <Layout sessionUser={ctx.state?.sessionUser}>
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <Column
          title={draft.title}
          publishDate={Temporal.PlainDate.from(draft.publishDate)}
          content={content}
        />
        <div>
          <a href={`/daily/draft/${draft.id}/edit`}>下書き編集</a>
          <p class="text-center">または</p>
        </div>
        <form action="/daily/publish" method="post">
          <input type="hidden" name="id" value={draft.id} />
          <input type="hidden" name="userLogin" value={draft.userLogin} />
          <input type="hidden" name="title" value={draft.title} />
          <input type="hidden" name="publishDate" value={draft.publishDate} />
          <input type="hidden" name="content" value={content} />

          <button type="submit">入稿</button>
        </form>
      </div>
    </Layout>
  );
});
