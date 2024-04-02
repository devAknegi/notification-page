"use client";
import { useEffect, useState } from "react";
import { RiNotification2Line } from "react-icons/ri";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  function sendNotification() {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("New Notification", {
        body: "This is a notification from your app!",
        icon: "notification.png",
      });
    } else {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          sendNotification();
        }
      });
    }
  }
  return (
    <main className="mx-20 flex flex-col items-center">
      <div className="my-2 pb-2 flex flex-col items-center justify-between border border-red-500 min-h-screen">
        <div className="mt-8 w-[450px]">
          <h2 className="text-2xl font-semibold text-center">Lorem Ipsum...</h2>
          <p className="mt-5 text-md text-center">
            Elit tempor elit occaecat qui aliquip ut ipsum.
          </p>
        </div>

        <div className="relative border border-red-500 w-[400px] h-[400px] rounded-full custom-animation">
          <div className="absolute inset-10 rounded-full border border-red-500">
            <div className="absolute inset-10 rounded-full border border-yellow-800">
              <div
                className={`absolute inset-10 rounded-full border border-yellow-500`}
              >
                <RiNotification2Line
                  size="80px"
                  className={`absolute inset-10 p-4 rounded-full bg-gradient-to-t to-orange-700 from-orange-950 cursor-pointer ${
                    isAnimating ? "scale" : ""}`}
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-[450px] h-[220px] -m-10 bg-black blur-xl rounded-full"></div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className={`border-gradient ${isAnimating ? "animate-scale" : ""}`}
            onClick={sendNotification}
          >
            Send Notification
          </button>
        </div>
      </div>
    </main>
  );
}
