import React from "react";
import "./global.css"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Simulado Enem",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    );
}