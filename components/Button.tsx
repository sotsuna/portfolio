"use client";

import { ButtonProps } from "../types/ButtonProps";
import Link from "next/link";


const Button = ({text, disabled, customClass, route}:ButtonProps) => {
    return (
        <div>
            <Link href={route}>
            <button disabled={disabled} className={customClass}>
                {text}
            </button>
            </Link>
        </div>
    );
}
export default Button;