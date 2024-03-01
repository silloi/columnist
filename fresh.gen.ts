// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $new from "./routes/new.tsx";
import * as $Column from "./islands/Column.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Desktop_copy from "./islands/Desktop copy.tsx";
import * as $Desktop from "./islands/Desktop.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/new.tsx": $new,
  },
  islands: {
    "./islands/Column.tsx": $Column,
    "./islands/Counter.tsx": $Counter,
    "./islands/Desktop copy.tsx": $Desktop_copy,
    "./islands/Desktop.tsx": $Desktop,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
