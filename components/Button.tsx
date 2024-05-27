"use client";

import { ButtonProps } from "../types/ButtonProps";
import Link from "next/link";


const Button = ({ text, route }: ButtonProps) => {
    return (
        <div>
            <Link href={route}>
            <button className="p-[4px] relative font-JetBrains_Mono">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                    {text}
                </div>
            </button>
            </Link>
        </div>
    );
}
export default Button;