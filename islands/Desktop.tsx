import { useMemo, useState } from "preact/hooks";
import Column from "./Column.tsx";

const sample = [
  "敗戦後国民の道義頽廃せりというのだが、然らば戦前の「健全」なる道義に復することが望ましきことなりや、賀すべきことなりや、私は最も然らずと思う",
  "私の生れ育った新潟市は石油の産地であり、したがって石油成金の産地でもあるが、私が小学校のころ、中野貫一という成金の一人が産をなして後も大いに倹約であり、停車場から人力車に乗ると値がなにがしか高いので万代橋という橋の袂まで歩いてきてそこで安い車を拾うという話を校長先生の訓辞に於て幾度となくきかされたものであった",
  "ところが先日郷里の人が来ての話に、この話が今日では新津某という新しい石油成金の逸話に変り、現に尚なお新潟市民の日常の教訓となり、生活の規範となっていることを知った",
  "百万長者が五十銭の車代を三十銭にねぎることが美徳なりや。我等の日常お手本とすべき生活であるか",
  "この話一つに就いての問題ではない。問題はかかる話の底をつらぬく精神であり、生活のありかたである",
  "戦争中私は日本映画社というところで嘱託をしていた。そのとき、やっぱり嘱託の一人にＯという新聞聯合の理事だか何かをしている威勢のいい男がいて、談論風発、吉川英治と佐藤紅緑が日本で偉い文学者だとか、そういう大先生であるが、会議の席でこういう映画を作ったらよかろうと言って意見をのべた。その映画というのは老いたる農夫のゴツゴツ節ふしくれた手だとかツギハギの着物だとか、父から子へ子から孫へ伝えられる",
];

export default function Desktop() {
  const [text1, setText1] = useState(sample[0]);
  const [text2, setText2] = useState(sample[1]);
  const [text3, setText3] = useState(sample[2]);
  const [text4, setText4] = useState(sample[3]);
  const [text5, setText5] = useState(sample[4]);
  const [text6, setText6] = useState(sample[5]);

  // const onInput = (e: Event) => {
  //   const target = e.currentTarget as HTMLTextAreaElement;
  //   setText(target.value);
  // };

  const PILCROW = "▼";
  const PERIOD = "。";
  const result = useMemo(
    () =>
      text1 + PILCROW + text2 + PILCROW + text3 + PILCROW + text4 +
      PILCROW +
      text5 + PILCROW + text6 + PERIOD,
    [text1, text2, text3, text4, text5, text6],
  );

  const totalCount = useMemo(
    () =>
      text1.length + text2.length + text3.length + text4.length + text5.length +
      text6.length,
    [text1, text2, text3, text4, text5, text6],
  );

  return (
    <>
      <form class="w-full flex flex-col gap-4 pb-8">
        <div class="flex flex-col justify-start gap-2">
          <label>
            標題：
            <input type="text" value="正平正調" class="w-16" disabled />
          </label>
          <label>
            掲載日：
            <input
              type="date"
              value={new Date().toISOString().slice(0, 10)}
              class="w-28"
            />
          </label>
          <p>文字数：{totalCount} / 596</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-80">
            <textarea
              value={text1}
              onInput={(e) => setText1(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={text2}
              onInput={(e) => setText2(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={text3}
              onInput={(e) => setText3(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={text4}
              onInput={(e) => setText4(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={text5}
              onInput={(e) => setText5(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={text6}
              onInput={(e) => setText6(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">◾️</p>
          </div>
        </div>
      </form>
      <Column title="正平正調" content={result} publishDate="2024•12•31" />
    </>
  );
}
