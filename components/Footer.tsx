import { FooterProps } from "@/types/FooterProps";

const Footer = ({text, spanStyle}:FooterProps) => {
    return(
        <div>
            <p className={spanStyle}>{text}</p>
        </div>
    );
}

export default Footer;