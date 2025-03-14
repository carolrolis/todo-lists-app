interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  const name = String(children);
  window.scrollTo(0, 0);

  return (
    <div className="group m-auto max-w-50 p-2 pb-0 rounded-lg bg-purple-500 hover:bg-purple-700 hover:cursor-pointer">
<<<<<<< HEAD
      <img alt={name} src={`../public/assets/card-images/${name.toLowerCase()}.png`}></img>
=======
      <img alt={name} src={`/src/assets/card-images/${name.toLowerCase()}.png`}></img>
>>>>>>> 0e72436c55028d0db9a1d548bf28d6f845aea1f1
      <button className="w-full mt-2 mb-2 text-white text-center font-medium" title="card" >
        {name}
      </button>
    </div>
  )
}
