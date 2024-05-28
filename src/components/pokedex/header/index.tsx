"use client"

import SearchInput from "@/components/pokedex/header/Search";
import Sort from "@/components/pokedex/header/Sort";
import Filter from "@/components/pokedex/header/Filter";
import React from "react";

const HeaderContainer = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div className={"flex justify-between items-center"}>
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

const Header = () => {
    return (
        <HeaderContainer>
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