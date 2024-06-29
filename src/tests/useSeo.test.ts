import { describe, test } from "vitest"
import useSEO from "../hooks/useSeo";
import { renderHook } from "@testing-library/react";

describe('useSEO hook', () => {
    test('should add title and description to meta', () => {
        const { result } = renderHook(() => useSEO({ title: "New title", description: "New Description" }));
        console.log(result.current);
    })
})