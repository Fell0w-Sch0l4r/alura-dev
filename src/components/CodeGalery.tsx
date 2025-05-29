import type { Dispatch, SetStateAction } from "react";
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
  setCode: Dispatch<SetStateAction<Code[]>>;
}

function CodeGalery({ Codes, setCode } : Props) {
    function deleteCode(id: string){
        setCode(Codes.filter(code => code.id !== id))
    }
    return(
        <>
        {Codes.map((code) => (
            <CodeCard key={code.id} {...code} handleDelete={deleteCode}/>
        ))}
        </>
    )
}

export default CodeGalery