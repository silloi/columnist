import { defineRoute } from "$fresh/server.ts";
import { collectValues, listItemsByUser } from "../../../utils/db.ts";
import { assertSignedIn, State } from "../../../plugins/session.ts";
import Layout from "../../../components/Layout.tsx";
import { getCursor } from "../../../utils/http.ts";

export default defineRoute<State>(async (req, ctx) => {
  assertSignedIn(ctx);

  const url = new URL(req.url);
  const draftIterable = await listItemsByUser(ctx.state.sessionUser.login, {
    cursor: getCursor(url),
    limit: 10,
    reverse: true,
  });
  const draftList = await collectValues(draftIterable);

  return (
    <Layout sessionUser={ctx.state?.sessionUser}>
      <ul>
        {draftList.map((draft) => (
          <li key={draft.id} class="text-ellipsis">
            <a href={`/daily/draft/${draft.id}/edit`}>
              {draft.paragraph1 ?? draft.title}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
});
