import { renderHook, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useItems from "../hooks/useItems";

describe('useItems hook', () => {
    test('should add and remove items', () => {
        const { result } = renderHook(() => useItems());
        expect(result.current.items.length).toBe(0);
        //add items
        act(() => {
            result.current.addItem("cocinar ")
            result.current.addItem("ir a correr ")
        });
        // console.log(result.current.items);
        expect(result.current.items.length).toBe(2);

        //remove item
        act(() => {
            result.current.removeItem(result.current.items[0].id);
        });
        expect(result.current.items.length).toBe(1);
    })
})