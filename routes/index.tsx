import { PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import { State } from "../plugins/session.ts";
import Layout from "../components/Layout.tsx";
import { HR } from "../components/HR.tsx";
import Counter from "../islands/Counter.tsx";
import Column from "../islands/Column.tsx";

export default function Home(props: PageProps<undefined, State>) {
  const count = useSignal(3);

  const zokuDarakuron = [
    "敗戦後国民の道義頽廃せりというのだが、然らば戦前の「健全」なる道義に復することが望ましきことなりや、賀すべきことなりや、私は最も然らずと思う",
    "私の生れ育った新潟市は石油の産地であり、したがって石油成金の産地でもあるが、私が小学校のころ、中野貫一という成金の一人が産をなして後も大いに倹約であり、停車場から人力車に乗ると値がなにがしか高いので万代橋という橋の袂まで歩いてきてそこで安い車を拾うという話を校長先生の訓辞に於て幾度となくきかされたものであった",
    "ところが先日郷里の人が来ての話に、この話が今日では新津某という新しい石油成金の逸話に変り、現に尚なお新潟市民の日常の教訓となり、生活の規範となっていることを知った",
    "百万長者が五十銭の車代を三十銭にねぎることが美徳なりや。我等の日常お手本とすべき生活であるか",
    "この話一つに就いての問題ではない。問題はかかる話の底をつらぬく精神であり、生活のありかたである",
    "戦争中私は日本映画社というところで嘱託をしていた。そのとき、やっぱり嘱託の一人にＯという新聞聯合の理事だか何かをしている威勢のいい男がいて、談論風発、吉川英治と佐藤紅緑が日本で偉い文学者だとか、そういう大先生であるが、会議の席でこういう映画を作ったらよかろうと言って意見をのべた。その映画というのは老いたる農夫のゴツゴツ節ふしくれた手だとかツギハギの着物だとか、父から子へ子から孫へ伝えられる",
  ];

  const PILCROW = "▼";

  return (
    <Layout sessionUser={props.state?.sessionUser}>
      <div class="mx-auto flex max-w-screen-lg flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
        <Column
          title="正平正調"
          publishDate={Temporal.PlainDate.from("2024-12-31")}
          content={zokuDarakuron.join(PILCROW) + "。"}
        />
        <HR />
      </div>
    </Layout>
  );
}
