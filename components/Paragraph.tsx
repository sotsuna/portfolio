import { ParagraphProps } from "@/types/ParagraphProps";

const Paragraph = ({text}:ParagraphProps) => {
    return(
    <div>
            <p className="font-JetBrains_Mono text-sm text-justify text-gray-500">{text}</p>
            <br />
        </div>
        
    );
}

export default Paragraph;