import SearchInput from "@/components/pokedex/header/Search";
import Sort from "@/components/pokedex/header/Sort";
import Filter from "@/components/pokedex/header/Filter";

const Header = () => {
    return (
        <div className={"flex justify-between items-center"}>
            <SearchInput/>
            <div className={"flex gap-2"}>
                <Sort/>
                <Filter/>
            </div>
        </div>
    )
}

Header.Search = SearchInput
Header.Sort = Sort
Header.Filter = Filter

export default Header