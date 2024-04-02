import { RiNotification2Line } from "react-icons/ri";

export default function Home() {
  return (
    <main className="mx-20 my-3 py-5 flex flex-col items-center">
      <div className="my-3 py-5  flex min-h-screen flex-col items-center justify-between border border-red-500">
        <div className="mt-8 w-[450px]">
          <h2 className="text-2xl font-semibold text-center">Lorem Ipsum...</h2>
          <p className="mt-5 text-md text-center">
            Elit tempor elit occaecat qui aliquip ut ipsum.
          </p>
        </div>
        <div className="relative border border-red-500 w-[400px] h-[400px] rounded-full">
          <div className="absolute inset-10 border border-red-500 rounded-full">
            <div className="absolute inset-10 border border-red-500 rounded-full">
              <div className="absolute inset-10 border border-red-500 rounded-full">
                <RiNotification2Line
                  size="80px"
                  className="absolute inset-10 p-4 rounded-full bg-gradient-to-t to-yellow-600 from-orange-950"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-[450px] h-[220px] -m-10 bg-black blur-xl rounded-full"></div>
        </div>

        <div className="mt-10">
          <button type="submit" className="border-gradient">
            Send Notification
          </button>
        </div>
      </div>
    </main>
  );
}
