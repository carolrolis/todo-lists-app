interface ItemProps {
  children?: React.ReactNode;
  index?: number;
  removeItem(itemToRemove: string): void;
  moveItemUp(itemToMoveUp: number): void;
  moveItemDown(itemToMoveDown: number): void;
}

export default function ListItem({
  children,
  index,
  removeItem,
  moveItemUp,
  moveItemDown,
}: ItemProps) {
  return (
    <div className="flex items-center shadow-md justify-between text-lg text-neutral-600 p-2 border-3 border-neutral-400 rounded-xl">
      <span>{children}</span>

      <div className="flex gap-1">
        <button
          onClick={() => {
            moveItemUp(Number(index));
          }}
          className="group"
          title="Move Item Up"
          type="button"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                className="stroke-neutral-400 group-hover:stroke-neutral-800"
                d="M12 5V19M12 5L6 11M12 5L18 11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={() => {
            moveItemDown(Number(index));
          }}
          className="group"
          title="Move Item Down"
          type="button"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(-1, 0, 0, -1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                className="stroke-neutral-400 group-hover:stroke-neutral-800"
                d="M12 5V19M12 5L6 11M12 5L18 11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={() => {
            removeItem(String(children));
          }}
          className="group border-purple-500 border-2 rounded-full hover:border-purple-700"
          title="Remove Item"
          type="button"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            className="fill-purple-500 group-hover:fill-purple-700"
            xmlns="http://www.w3.org/2000/svg"
            stroke="null"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={() => {
            removeItem(String(children));
          }}
          className="border-purple-500 text-center bg-purple-500 border-2 rounded-full hover:bg-purple-700 hover:border-purple-700"
          title="Check Item"
          type="button"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
