import React from "react";

const CTA = () => {
  return (
    <div className="flex justify-center">
      <div
        className="hero min-h-screen rounded-xl max-w-5xl"
        style={{
          backgroundImage: `url("/1486.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              プログラミングで価値を書く
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* <div className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CTA;
