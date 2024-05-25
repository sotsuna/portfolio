import { ParagraphProps } from "@/types/ParagraphProps";

const Paragraph = ({text, spanStyle}:ParagraphProps) => {
    return(
        <div>
            <p className={spanStyle}>{text}</p>
            <br />
        </div>
    );
}

export default Paragraph;