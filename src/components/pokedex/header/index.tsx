"use client"

import SearchInput from "@/components/pokedex/header/Search";
import Sort from "@/components/pokedex/header/Sort";
import Filter from "@/components/pokedex/header/Filter";
import React from "react";
import {cn} from "@/lib/utils";

const HeaderContainer = ({children, className, ...props}: Readonly<{children: React.ReactNode, [key:string]:any}>) => {
    return (
        <div className={cn("flex justify-between items-center", className)} {...props}>
            {children}
        </div>
    )
}

const RightContainer = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div className={"flex gap-2"}>
            {children}
        </div>
    )
}

const Header = (props:Readonly<{[key:string]:any}>) => {
    return (
        <HeaderContainer {...props}>
            <SearchInput/>
            <RightContainer>
                <Sort/>
                <Filter/>
            </RightContainer>
        </HeaderContainer>
    )
}

Header.Container = HeaderContainer
Header.RightContainer = RightContainer
Header.Search = SearchInput
Header.Sort = Sort
Header.Filter = Filter

export default Header