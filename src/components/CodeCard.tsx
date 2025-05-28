import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import { useRef } from "react";
import {toPng} from "html-to-image"

interface Props {
  backGroundColor: string;
  code: string;
  description: string;
  language: string;
  title: string;
  key: string;
}

function CodeCard({
  code,
  backGroundColor,
  description,
  language,
  title,
}: Props) {

  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (cardRef.current) {
      const dataUrl = await toPng(cardRef.current);
      const link = document.createElement("a");
      link.download = `${title}.png`;
      link.href = dataUrl;
      link.click();
    }
  };
  return (
    <div className={`bg-slate-950 mb-10 rounded-xl`} ref={cardRef}>
      <div
        className={`${backGroundColor} rounded-xl h-fit flex items-center justify-center mt-5 p-5`}
      >
        <div className="w-full  rounded-xl">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers={true}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className={`p-5`}>
        <h1 className={`text-2xl text-bold mb-5`}>{title}</h1>
        <p className={``}>{description}</p>
      </div>
      <button
        onClick={handleDownload}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download as Image
      </button>
    </div>
  );
}

export default CodeCard;
