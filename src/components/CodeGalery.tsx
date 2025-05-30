import type { Dispatch, SetStateAction } from "react";
import CodeCard from "./CodeCard";
import { setCodesToStorage } from "@/lib/codeStorage";
import type { Code } from "@/types/code";



interface Props {
  Codes: Code[];
  setCode: Dispatch<SetStateAction<Code[]>>;
}

function CodeGalery({ Codes, setCode } : Props) {
    function deleteCode(id: string){
        setCode(Codes.filter(code => code.id !== id))
        setCodesToStorage(Codes.filter((code) => code.id !== id));
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