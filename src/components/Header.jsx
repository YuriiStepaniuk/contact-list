import { Link } from "react-router-dom";

export default function Header() {
  const linkStyle =
    "px-4 py-2 mr-2 hover:text-red-200 hover:bg-stone-700 ease-in duration-300 text-lg font-bold rounded-md";

  return (
    <div className=" bg-stone-200 w-full flex justify-center items-center">
      <h2 className="text-3xl text-red-600 hover:text-red-700 ml-8 text-center cursor-pointer">
        Category
      </h2>
      <div className="ml-10 w-60 h-8 flex items-center justify-between bg-white p-2 rounded-md">
        <input className="rounded-md bg-white" placeholder="Search..." />
        <i className="bx bx-search text-2xl hover:text-red-500 cursor-pointer"></i>
      </div>
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="navbar flex p-4 border-black ">
          <Link className={linkStyle} to="/">
            Contact List
          </Link>
          <Link className={linkStyle} to="/new-contact">
            Add new
          </Link>
        </div>
      </nav>
      <div className="text-3xl mr-8">
        <i className="bx bx-list-ul bg-stone-100 mr-1 hover:text-red-500 cursor-pointer"></i>
        <i className="bx bx-menu bg-stone-100 hover:text-red-500 cursor-pointer"></i>
      </div>
    </div>
  );
}
