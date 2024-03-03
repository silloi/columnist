import { PageProps } from "$fresh/server.ts";
import { State } from "../../plugins/session.ts";
import Layout from "../../components/Layout.tsx";
import Desktop from "../../islands/Desktop.tsx";

export default function New(props: PageProps<any, State>) {
  return (
    <Layout>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Desktop />
      </div>
    </Layout>
  );
}
