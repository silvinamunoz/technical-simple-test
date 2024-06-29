import { useState } from "react";
import { Item } from "../App";

const useItems = () => {
    const persistedItems: Item[] = JSON.parse(localStorage.getItem('items') as string);
    const [items, setItems] = useState<Item[]>(persistedItems || []);

    const addItem = (value: string) => {
        const newItem: Item = {
            id: crypto.randomUUID(),
            name: value,
            timestamp: Date.now()
        }
        setItems((prevItems: Item[]) => [...prevItems, newItem])
        localStorage.setItem('items', JSON.stringify([...items, newItem]))
    };

    const removeItem = (itemId: string) => {
        return setItems(items.filter((i) => i.id !== itemId));
    }

    return {
        items,
        addItem,
        removeItem
    }
}

export default useItems;