interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  const name = String(children);
  window.scrollTo(0, 0);

  return (
    <div className="group m-auto max-w-50 p-2 pb-0 rounded-lg bg-purple-500 hover:bg-purple-700 hover:cursor-pointer">
      <img alt={name} src={`/src/assets/card-images/${name.toLowerCase()}.png`}></img>
      <button className="w-full mt-2 mb-2 text-white text-center font-medium" title="card" >
        {name}
      </button>
    </div>
  )
}
