import { Link } from "react-router-dom";
import BackButton from "../components/back-button";
import AddButton from "../components/add-button";

export default function Books () {
  return (
    <>
      <h1 className="text-2xl text-purple-600 text-center mt-5 font-black tracking-[3px]">BOOKS!</h1>
      <Link to="/">
        <BackButton></BackButton>
      </Link>
      <AddButton>Book</AddButton>
    </>
  )
}