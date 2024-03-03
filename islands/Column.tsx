import { formatPlainDate } from "../utils/date.ts";

interface TitleBoxProps {
  title: string;
}

interface FooterProps {
  publishDate: Temporal.PlainDate;
}

interface ColumnProps {
  title: string;
  publishDate: Temporal.PlainDate;
  content: string;
}

function TitleBox(props: TitleBoxProps) {
  return (
    <div class="[writing-mode:horizontal-tb] w-32 h-16 mx-2 absolut float-left flex justify-center items-center">
      <span class="border-2 border-black text-2xl px-3 py-2">
        {props.title}
      </span>
    </div>
  );
}

function MetadataBox(props: FooterProps) {
  return (
    <>
      <div class="float-right" style={{ width: "46.5rem" }}></div>
      <div class="[writing-mode:horizontal-tb] font-sans float-right clear-both w-24 h-4 px-1 mb-1">
        {formatPlainDate(props.publishDate)}
      </div>
    </>
  );
}

export default function ColumnArticle(props: ColumnProps) {
  return (
    <article>
      <div
        class="[writing-mode:vertical-rl]"
        style={{
          height: "18.25rem",
          width: "52.5rem",
        }}
      >
        <TitleBox title={props.title} />
        <MetadataBox publishDate={props.publishDate} />
        <div
          style={{
            lineBreak: "anywhere",
          }}
        >
          <p>
            {props.content}
          </p>
        </div>
      </div>
    </article>
  );
}
