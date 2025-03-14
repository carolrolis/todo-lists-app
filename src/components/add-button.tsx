import { useState, ChangeEvent } from "react";
import ListItem from "./list-item";

interface AddButtonProps {
  children?: React.ReactNode;
}

export default function AddButton({ children }: AddButtonProps) {
  const [item, setItem] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setItem(event.target.value);
  }

  function addItem(): void {
    if (item.trim() === "") return;
    setList([...list, item]);
    setItem("");
  }

  function removeItem(itemToRemove: string): void {
    setList(
      list.filter((item) => {
        return item != itemToRemove;
      })
    );
  }

  function moveItemUp(itemToMoveUp: number): void {
    if (itemToMoveUp === 0) return;
    const reorderedList = [...list];
    [reorderedList[itemToMoveUp], reorderedList[itemToMoveUp - 1]] = [
      reorderedList[itemToMoveUp - 1],
      reorderedList[itemToMoveUp],
    ];
    setList(reorderedList);
  }

  function moveItemDown(itemToMoveDown: number): void {
    if(itemToMoveDown === list.length - 1) return;
    const reorderedList = [...list];
    [reorderedList[itemToMoveDown], reorderedList[itemToMoveDown + 1]] = [
      reorderedList[itemToMoveDown + 1],
      reorderedList[itemToMoveDown],
    ];
    setList(reorderedList);
  }

  return (
    <>
      <div className="mt-7 mb-12 flex gap-1 justify-center">
        <input
          onChange={handleChange}
          placeholder={`New ${children}`}
          value={item}
          type="text"
          className="border-2 border-solid border-purple-500 rounded-lg p-1 focus:outline-purple-700 transition-discrete delay-75"
        ></input>
        <button
          onClick={addItem}
          className="text-white text-3xl bg-purple-500 px-2 rounded-full hover:bg-purple-700"
          title="submit"
          type="submit"
        >
          <svg
            fill="#ffffff"
            version="1.1"
            id="Capa_1"
            width="20px"
            height="16px"
            viewBox="0 0 45.402 45.402"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>

      <ol className="flex flex-col gap-3 list-decimal marker:text-purple-600 marker:text-xl marker:font-bold">
        {list.map((item, index) => {
          return (
            <li key={index}>
              <ListItem
                index={index}
                removeItem={removeItem}
                moveItemUp={moveItemUp}
                moveItemDown={moveItemDown}
              >
                {item}
              </ListItem>
            </li>
          );
        })}
      </ol>
    </>
  );
}
