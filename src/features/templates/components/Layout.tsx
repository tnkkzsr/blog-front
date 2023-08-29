import React,{FunctionComponent} from "react";

import { Block } from "@/features/base/components/container/Block";
import { Header } from "@/features/templates/components/Header";
import { Main } from "@/features/base/components/container/Main";
import { Sidebar } from "@/features/sideber/Sidebar";
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

                    <Sidebar className="my-10 mr-6" />
                </Block>
            </Main>
        </>
    );
}