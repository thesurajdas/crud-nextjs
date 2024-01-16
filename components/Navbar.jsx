import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-sky-400 px-8 py-3 rounded-md">
      <Link className="text-white font-bold" href={"/"}>
        CRUD-NextJS
      </Link>
      <Link className="bg-white p-2 rounded-md" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
