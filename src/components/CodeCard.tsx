import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

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
  return (
    <div className={`bg-slate-950 mb-10 rounded-xl`}>
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
    </div>
   
  );
}

export default CodeCard;
