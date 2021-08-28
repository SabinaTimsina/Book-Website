import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    // <nav>
    //   <div classNameName="logo">
    //     <Image src="/logo.png" alt="site logo" width={40} height={40} />
    //   </div>
    //   <Link href="/">
    //     <a>Home</a>
    //   </Link>
    //   <Link href="/about">
    //     <a>About</a>
    //   </Link>
    //   <Link href="/users/">
    //     <a>Users Listing</a>
    //   </Link>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Books</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link href="/users/">
                <a className="nav-link">Books Listing</a>
              </Link>
            </li>
          </ul>
          <div class="d-flex">
            <input
              type="search"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" class="btn btn-outline-primary">
            <Image src="/search.svg" alt="site logo" width={25} height={25} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
