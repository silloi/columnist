import { PageProps } from "$fresh/server.ts";
import { State } from "../plugins/session.ts";
import Layout from "../components/Layout.tsx";

export default function MyPage(props: PageProps<any, State>) {
  <Layout sessionUser={props.state.sessionUser}>
    <div>
      <h1>My Page</h1>
      <p>Don't have an account yet? Signup</p>
    </div>
  </Layout>;
}
