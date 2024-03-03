import { Handlers, PageProps } from "$fresh/server.ts";
import { ulid } from "$std/ulid/mod.ts";
import { assertSignedIn, State } from "../../../../plugins/session.ts";
import { redirect } from "../../../../utils/http.ts";
import { createItem, getItem, Item } from "../../../../utils/db.ts";
import Layout from "../../../../components/Layout.tsx";
import Desktop from "../../../../islands/Desktop.tsx";

export const handler: Handlers<undefined, State> = {
  async GET(_req, ctx) {
    assertSignedIn(ctx);

    const draft = await getItem(ctx.params.id);
    if (draft === null) return await ctx.renderNotFound();
    if (draft.userLogin !== ctx.state.sessionUser.login) {
      return await ctx.renderNotFound();
    }

    return ctx.render(draft);
  },
  async POST(req, ctx) {
    assertSignedIn(ctx);

    const form = await req.formData();
    const title = form.get("title");
    const publishDate = form.get("publishDate");
    const paragraph1 = form.get("paragraph1");
    const paragraph2 = form.get("paragraph2");
    const paragraph3 = form.get("paragraph3");
    const paragraph4 = form.get("paragraph4");
    const paragraph5 = form.get("paragraph5");
    const paragraph6 = form.get("paragraph6");

    if (
      typeof title !== "string" ||
      title === "" ||
      typeof publishDate !== "string" ||
      publishDate === ""
    ) {
      return redirect("/new?error");
    }

    const paragraphs = [
      paragraph1?.toString() ?? "",
      paragraph2?.toString() ?? "",
      paragraph3?.toString() ?? "",
      paragraph4?.toString() ?? "",
      paragraph5?.toString() ?? "",
      paragraph6?.toString() ?? "",
    ];

    const id = ulid();

    await createItem({
      id: id,
      userLogin: ctx.state.sessionUser.login,
      title: title,
      publishDate: publishDate,
      paragraphs: paragraphs,
    });

    return redirect(`/daily/draft/${id}`);
  },
};

export default function New(props: PageProps<Item, State>) {
  const PILCROW = "▼";
  const PERIOD = "。";
  const content = props.data.paragraphs.join(PILCROW) + PERIOD;

  return (
    <Layout sessionUser={props.state.sessionUser}>
      <div class="mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <Desktop
          title={props.data.title}
          publishDate={props.data.publishDate}
          paragraph1={props.data.paragraphs[0]}
          paragraph2={props.data.paragraphs[1]}
          paragraph3={props.data.paragraphs[2]}
          paragraph4={props.data.paragraphs[3]}
          paragraph5={props.data.paragraphs[4]}
          paragraph6={props.data.paragraphs[5]}
          type="edit"
        />
      </div>
    </Layout>
  );
}
