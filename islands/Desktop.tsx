import { useMemo, useState } from "preact/hooks";
import Column from "./Column.tsx";

interface DesctopProps {
  title?: string;
  publishDate?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  paragraph6?: string;
}

export default function Desktop(props: DesctopProps) {
  const [paragraph1, setParagraph1] = useState(props.paragraph1 ?? "");
  const [paragraph2, setParagraph2] = useState(props.paragraph2 ?? "");
  const [paragraph3, setParagraph3] = useState(props.paragraph3 ?? "");
  const [paragraph4, setParagraph4] = useState(props.paragraph4 ?? "");
  const [paragraph5, setParagraph5] = useState(props.paragraph5 ?? "");
  const [paragraph6, setParagraph6] = useState(props.paragraph6 ?? "");

  // const onInput = (e: Event) => {
  //   const target = e.currentTarget as HTMLTextAreaElement;
  //   setParagraph(target.value);
  // };

  const PILCROW = "▼";
  const PERIOD = "。";
  const result = useMemo(
    () =>
      paragraph1 + PILCROW + paragraph2 + PILCROW + paragraph3 + PILCROW +
      paragraph4 +
      PILCROW +
      paragraph5 + PILCROW + paragraph6 + PERIOD,
    [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6],
  );

  const totalCount = useMemo(
    () =>
      paragraph1.length + paragraph2.length + paragraph3.length +
      paragraph4.length + paragraph5.length +
      paragraph6.length,
    [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6],
  );

  return (
    <>
      <form class="w-full flex flex-col gap-4 pb-8" method="post">
        <div class="flex flex-col justify-start gap-2">
          <label>
            標題：
            <input
              type="text"
              name="title"
              value="正平正調"
              class="w-16"
            />
          </label>
          <label>
            掲載日：
            <input
              type="date"
              name="publishDate"
              value={new Date().toISOString().slice(0, 10)}
              class="w-28"
            />
          </label>
          <p>文字数：{totalCount} / 596</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-80">
            <textarea
              value={paragraph1}
              name="paragraph1"
              placeholder="第1段落（つかみ）"
              onInput={(e) => setParagraph1(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={paragraph2}
              name="paragraph2"
              placeholder="第2段落"
              onInput={(e) => setParagraph2(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={paragraph3}
              name="paragraph3"
              placeholder="第3段落"
              onInput={(e) => setParagraph3(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={paragraph4}
              name="paragraph4"
              placeholder="第4段落"
              onInput={(e) => setParagraph4(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={paragraph5}
              name="paragraph5"
              placeholder="第5段落"
              onInput={(e) => setParagraph5(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">{PILCROW}</p>
            <textarea
              value={paragraph6}
              name="paragraph6"
              placeholder="第6段落（むすび）"
              onInput={(e) => setParagraph6(e.currentTarget.value.trim())}
              class="w-80 h-40 border-2 border-orange-100"
              style={{ lineBreak: "anywhere" }}
            />
            <p class="text-center mb-2">◾️</p>
          </div>
        </div>
        <button type="submit">
          下書き保存
        </button>
      </form>
      <Column
        title={props.title ?? "無名無題"}
        content={result}
        publishDate="2024•12•31"
      />
    </>
  );
}
