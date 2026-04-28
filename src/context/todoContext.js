import { createContext, useContext } from "react";

// create context
export const ItemContext = createContext({
    itemName: [],
    setItemName: () => {},
});

// export const ItemContextProvider = ItemContext.Provider

// create custom hook for consumers to get data
export const useItemName = () => {
    const item = useContext(ItemContext);

    if(!item) {
        throw new Error("Item context not found...")
    }
    
    return item;
}