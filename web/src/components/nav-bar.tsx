import {Link, useSearchParams} from "react-router-dom";

export default function NavBar() {
  const [searchParams] = useSearchParams();
  const todoFilter = searchParams.get("todo");

  return (
    <nav className="w-full flex justify-between items-center border-b-2">
      <Link to="/" className={`link ${todoFilter === null ? "active" : ""}`}>
        All
      </Link>
      <Link
        to="/?todo=active"
        className={`link ${todoFilter === "active" ? "active" : ""}`}
      >
        Active
      </Link>
      <Link
        to="/?todo=completed"
        className={`link ${todoFilter === "completed" ? "active" : ""}`}
      >
        Completed
      </Link>
    </nav>
  );
}
