import CodeCard from "./CodeCard";

interface Code {
  backGroundColor: string;
  code: string
  description: string;
  language: string;
  title: string;
}

interface Props {
    Codes: Code[];
}

function CodeGalery({ Codes } : Props) {
    return(
        <>
        {Codes.map((code, idx) => (
            <CodeCard key={code.title + idx} {...code}/>
        ))}
        </>
    )
}

export default CodeGalery