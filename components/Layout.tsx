import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";
import Nav from "./Nav.tsx";

interface LayoutProps {
  isLoggedIn: boolean;
  children: ComponentChildren;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Fresh Auth</title>
        <Nav isLoggedIn={props.isLoggedIn} />
      </Head>
      <div class="px-4 py-8 mx-auto max-w-screen-lg bg-[#f8f8f8] font-serif">
        {props.children}
      </div>
    </>
  );
}
