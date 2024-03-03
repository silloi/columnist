import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";
import { User } from "../utils/db.ts";
import Nav from "./Nav.tsx";

interface LayoutProps {
  sessionUser?: User;
  children: ComponentChildren;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Fresh Auth</title>
        <Nav sessionUser={props.sessionUser} />
      </Head>
      <div class="px-4 py-8 mx-auto max-w-screen-lg bg-[#f8f8f8] font-serif">
        {props.children}
      </div>
    </>
  );
}
