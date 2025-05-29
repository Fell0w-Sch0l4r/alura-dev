import CodeCard from "./CodeCard";

interface Code {
  backGroundColor: string;
  code: string
  description: string;
  language: string;
  title: string;
  id: string;
}

interface Props {
    Codes: Code[];
}

function CodeGalery({ Codes } : Props) {
    return(
        <>
        {Codes.map((code) => (
            <CodeCard key={code.id} {...code}/>
        ))}
        </>
    )
}

export default CodeGalery