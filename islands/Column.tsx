interface ColumnProps {
  title: string;
  content: string;
  publishDate: string;
}

// Divide text into rows of 14 and 18 character
const divideTextIntoRows = (text: string) => {
  const [head, tail] = [text.slice(0, 14 * 6), text.slice(14 * 6)];
  const headRows = head.match(/.{1,14}/g) || [];
  const tailRows = tail.match(/.{1,18}/g) || [];
  return [...headRows, ...tailRows];
};

export default function Counter(props: ColumnProps) {
  return (
    <div class="pt-2 px-2 bg-white">
      <div class="[writing-mode:vertical-rl] font-serif">
        <div class="[writing-mode:horizontal-tb] w-36 h-16 float-left flex justify-center items-center">
          <span class="p-2 border-2 border-black text-2xl">
            {props.title}
          </span>
        </div>
        <div style={{ height: "18.25rem", width: "52.5rem" }}>
          {divideTextIntoRows(props.content + "。").map((row) => (
            <p>
              {row}
            </p>
          ))}
        </div>
      </div>
      <div class="w-full h-6">
        <span class="text-left">
          {props.publishDate}
        </span>
      </div>
    </div>
  );
}
