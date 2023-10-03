import React from "react";
import LargeHomeContainer from "./LargeHomeContainer";

function Recommended() {
  return (
    <div className="w-full bg-slate-200 mt-8">
      <div className="mx-auto max-w-[1400px] pt-8 pb-8">
        <h1 className=" font-semibold text-3xl text-center">Recommended</h1>
        <div className="w-full grid md:grid-cols-3 gap-5 mb-5 mt-5">
          <LargeHomeContainer
            title="iPhone 15"
            image={
              "https://www.apple.com/v/home/be/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg"
            }
            textcolor={"black"}
          />
          <LargeHomeContainer
            title="WATCH"
            image={
              "https://www.apple.com/uk/home/includes/heroes/apple-watch-series-9/hero_apple_watch_series_9_order__d0fi9mb84dci_largetall_2x.jpg"
            }
            textcolor={"white"}
          />
          <LargeHomeContainer
            title="Save for uni."
            image={
              "https://www.apple.com/v/home/be/images/promos/back-to-school-2023/promo_bts2023_startframe__exvt2t1iuxme_large_2x.jpg"
            }
            textcolor={"black"}
          />
        </div>
      </div>
    </div>
  );
}

export default Recommended;
