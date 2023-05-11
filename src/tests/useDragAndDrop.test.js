import { renderHook, act } from "@testing-library/react";

import useDragAndDrop from "../hooks/useDragAndDrop";
import { mockData } from "../data";

describe("useDragAndDrop", () => {
  const initialData = mockData;

  test("should move item within the same parent folder", () => {
    const { result } = renderHook(() => useDragAndDrop(initialData));

    // Simulate dragging an item
    act(() => {
      result.current.handleDragStart(
        {
          stopPropagation: jest.fn(),
          dataTransfer: { effectAllowed: "", setData: jest.fn() },
        },
        { id: 2, name: "File 1", type: "file", upperIndexesArray: [1] } // Dragging File 1
      );
    });

    // Simulate dropping the item within the same parent folder
    act(() => {
      result.current.handleDrop(
        { preventDefault: jest.fn(), stopPropagation: jest.fn() },
        { id: 3, name: "File 2", type: "file", upperIndexesArray: [1] } // Dropping on File 2
      );
    });

    // Verify that the item has been moved within the same parent folder
    expect(result.current.data[0].innerContent[1].id).toBe(2);
  });

  test("should not move item to a different parent folder", () => {
    const { result } = renderHook(() => useDragAndDrop(initialData));

    // Simulate dragging an item
    act(() => {
      result.current.handleDragStart(
        {
          stopPropagation: jest.fn(),
          dataTransfer: { effectAllowed: "", setData: jest.fn() },
        },
        { id: 4, name: "File 3", type: "file", upperIndexesArray: [1] } // Dragging File 3
      );
    });

    // Simulate dropping the item on a different parent folder
    act(() => {
      result.current.handleDrop(
        { preventDefault: jest.fn(), stopPropagation: jest.fn() },
        {
          id: 11,
          name: "File 2 of Folder 2",
          type: "file",
          upperIndexesArray: [2],
        } // Dropping on Folder 2
      );
    });

    // Verify that the item has not been moved to a different parent folder
    expect(result.current.data[0].innerContent[2].id).toBe(4);
  });

  test("should not move item to a different level of parent folder", () => {
    const { result } = renderHook(() => useDragAndDrop(initialData));

    // Simulate dragging an item
    act(() => {
      result.current.handleDragStart(
        {
          stopPropagation: jest.fn(),
          dataTransfer: { effectAllowed: "", setData: jest.fn() },
        },
        { id: 4, name: "File 3", type: "file", upperIndexesArray: [1] } // Dragging File 3
      );
    });

    // Simulate dropping the item on a different parent folder
    act(() => {
      result.current.handleDrop(
        { preventDefault: jest.fn(), stopPropagation: jest.fn() },
        {
          id: 6,
          name: "Inner Folder File 12",
          type: "file",
          upperIndexesArray: [1, 4],
        } // Dropping on Inner folder of Folder 1
      );
    });

    // Verify that the item has not been moved to a different parent folder
    expect(result.current.data[0].innerContent[2].id).toBe(4);
  });
});
