import React from "react";
import LargeHomeContainer from "../components/LargeHomeContainer";
import { products } from "../assets/data";

function Home() {
  console.log(products);
  return (
    <div>
      <LargeHomeContainer
        title="iPhone 15 Pro"
        subtitle="Titanium. So Strong. So light. So Pro."
        image={
          "https://www.apple.com/v/home/be/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_largetall_2x.jpg"
        }
        textcolor={"white"}
      />
      <div className="mb-5"></div>
      <LargeHomeContainer
        title="iPhone 15"
        subtitle="New camera. New phone. Newphoria"
        image={
          "https://www.apple.com/v/home/be/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg"
        }
        textcolor={"black"}
      />
      <div className="mb-5"></div>
      <LargeHomeContainer
        title="WATCH"
        subtitle="Smarter. Brighter. Mightier."
        image={
          "https://www.apple.com/uk/home/includes/heroes/apple-watch-series-9/hero_apple_watch_series_9_order__d0fi9mb84dci_largetall_2x.jpg"
        }
        textcolor={"white"}
      />
      <div className="mb-5"></div>
      <div className="grid md:grid-cols-2 mb-5 gap-5">
        <LargeHomeContainer
          title="Save for uni."
          subtitle="Gift card up to £100"
          image={
            "https://www.apple.com/v/home/be/images/promos/back-to-school-2023/promo_bts2023_startframe__exvt2t1iuxme_large_2x.jpg"
          }
          textcolor={"black"}
        />
        <LargeHomeContainer
          title="Airpods Pro"
          subtitle="Adaptive Audio. Now Playing."
          image={
            "https://www.apple.com/v/home/be/images/promos/airpods-pro/promo_airpods_pro_order__d8xv36p4uwae_large_2x.jpg"
          }
          textcolor={"white"}
        />
      </div>
    </div>
  );
}

export default Home;
