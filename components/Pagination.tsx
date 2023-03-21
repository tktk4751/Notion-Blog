import { useRouter } from "next/router";
import React from "react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

const Pagination = ({ pageCount }) => {
  const router = useRouter();

  const pageNumbers = Array.from(Array(pageCount), (_, i) => i + 1);

  return (
    <div className="flex justify-center mb-20">
      <div className="btn-group">
        <button className="btn text-xl">
          <BiSkipPrevious />
        </button>
        {pageNumbers.map((number) => (
          <input
            key={number}
            type="radio"
            name="options"
            data-title={number}
            onClick={() => router.push(`/posts/page/${number}`)}
            className={`btn${
              router.query.page === String(number) ? " checked" : ""
            }`}
          />
        ))}
        <button className="btn text-xl">
          <BiSkipNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
