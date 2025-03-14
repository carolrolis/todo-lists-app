import { Link } from "react-router-dom";
import Card from "../components/card";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-purple-600 text-center mt-5 font-black tracking-[3px]">WELCOME!</h1>
      <h1 className="text-lg mt-7 text-neutral-600 text-center font-semibold">Choose your list 👇</h1>
      <div className="flex flex-col gap-8 mt-1 mb-7">
        <Link to="/movies" className="max-w-fit m-auto">
          <Card>Movies</Card>
        </Link >
        <Link to="/books" className="max-w-fit m-auto">
          <Card>Books</Card>
        </Link>
        <Link to="/games" className="max-w-fit m-auto">
          <Card>Games</Card>
        </Link>
        
      </div>

      <p className="max-w-fit text-center m-auto mb-5 text-sm text-purple-500">by <a className="font-medium hover:text-purple-700" href="https://www.github.com/carolrolis" target="_blank" rel="noopener">@carolrolis</a> &lt;3</p>
    </>
  )
}