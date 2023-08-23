import React,{FunctionComponent} from "react";

import { Block } from "@/features/base/components/container/Block";
import { Header } from "@/features/base/components/Header";
import { Main } from "@/features/base/components/container/Main";
import { Sidebar } from "@/features/base/components/Sidebar";
import Head from "next/head";

interface Props {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    
}

export const Layout: FunctionComponent<Props> = ({ className, children,title}) => {
    

    return (
        <>

            <Head>  
            <title>{`ブログ${title ? ` | ${title}` : ""}`}</title>
            </Head>

            <Header />

            <Main className="bg-gray-200/80 min-h-screen w-full">
                <Block className="max-w-[1100px] mx-auto grid grid-cols-[1fr,min-content] gap-8">
                    <Block className={`${className || ""}`}>
                        {children}
                    </Block>

                    <Sidebar className="mt-10" />
                </Block>
            </Main>
        </>
    );
}