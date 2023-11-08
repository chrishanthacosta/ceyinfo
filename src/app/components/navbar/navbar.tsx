"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UiOJuHYWmXY
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-6 bg-blue-500">
            <Link className="text-white text-xl lg:text-2xl font-bold" href="#">
                CeyInfo Solutions
            </Link>
            <nav className="hidden lg:flex gap-6">
                <Link className="text-white text-lg hover:text-blue-300" href="#">
                   About
                </Link>
                <Link className="text-white text-lg hover:text-blue-300" href="#">
                   Services
                </Link>
                <Link className="text-white text-lg hover:text-blue-300" href="#">
                   Contact
                </Link>
            </nav>
            <div className="flex lg:hidden">
                <Button className="text-white" size="icon" variant="outline">
                    <svg
                        className=" h-6 w-6"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </Button>
            </div>
        </div>
    )
}
