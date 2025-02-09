import Link from "next/link";
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

function Navbar() {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start mx-20 my-5">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Blog
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>おすすめ記事</a>
                </li>
                <li>
                  <a>最新記事</a>
                </li>
              </ul>
            </li>
            <li>
              <a>カテゴリー</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="navbar-start font-bold normal-case text-2xl">
          Fullstack Journey🌈
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">
              <span className="text-xl">About</span>
            </Link>
          </li>
          <li tabIndex={0}>
            <a className="text-xl">
              Blog
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>おすすめ記事</a>
              </li>
              <li>
                <a>最新記事</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="text-xl">Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end md:max-md:flex">
        <div className="flex justify-center mr-8 text-xs">
          <ToggleSwitch />
        </div>
        <span className="btn btn-active btn-accent text-md font-extrabold hidden sm:flex">
          Contact
        </span>
        <span className="btn btn-square visible sm:invisible">📧</span>
      </div>
    </div>
  );
}

export default Navbar;
