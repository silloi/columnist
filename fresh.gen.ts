// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $daily_draft_id_edit from "./routes/daily/draft/[id]/edit.tsx";
import * as $daily_draft_id_index from "./routes/daily/draft/[id]/index.tsx";
import * as $daily_draft_index from "./routes/daily/draft/index.tsx";
import * as $daily_index from "./routes/daily/index.tsx";
import * as $daily_new from "./routes/daily/new.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $my from "./routes/my.tsx";
import * as $Column from "./islands/Column.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Desktop from "./islands/Desktop.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/daily/draft/[id]/edit.tsx": $daily_draft_id_edit,
    "./routes/daily/draft/[id]/index.tsx": $daily_draft_id_index,
    "./routes/daily/draft/index.tsx": $daily_draft_index,
    "./routes/daily/index.tsx": $daily_index,
    "./routes/daily/new.tsx": $daily_new,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/my.tsx": $my,
  },
  islands: {
    "./islands/Column.tsx": $Column,
    "./islands/Counter.tsx": $Counter,
    "./islands/Desktop.tsx": $Desktop,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
