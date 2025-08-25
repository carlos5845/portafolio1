export default function Home() {
  return (
    <section className="space-y-5">
      <div className="grid grid-cols-4 grid-rows-5 gap-4 text-white">
        <div className="col-span-2 row-span-5 bg-red-400 flex flex-col justify-between p-4 rounded-2xl bg-[url(src/assets/auto.jpeg)] bg-no-repeat bg-cover">
          <h1 className="font-black text-6xl ">01</h1>
          <div>
            <p className="text-2xl font-bold">BUNISSES COACHING</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              velit doloremque dicta
            </p>
          </div>
        </div>
        <div className="col-span-2 row-span-3 col-start-3 bg-pink-300 flex flex-col justify-between p-4 rounded-2xl">
          <h1 className="font-black text-4xl text-red-400 ">02</h1>
          <div>
            <p className="text-xl font-bold">BUNISSES COACHING</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              velit doloremque dicta
            </p>
          </div>
        </div>
        <div className="row-span-2 col-start-3 row-start-4 bg-gray-800 flex flex-col justify-between p-4 rounded-2xl min-h-64 bg-[url(src/assets/foto3.jpg)]">
          <h1 className="font-black text-4xl  text-red-400 ">03</h1>
          <div>
            <p className="text-xl font-bold">BUNISSES COACHING</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              velit doloremque dicta
            </p>
          </div>
        </div>
        <div className="row-span-2 col-start-4 row-start-4 bg-pink-300 flex flex-col justify-between p-4 rounded-2xl bg-[url(src/assets/foto2.jpeg)] bg-no-repeat bg-cover">
          <h1 className="font-black text-4xl  text-red-400">04</h1>
          <div>
            <p className="text-xl font-bold">BUNISSES COACHING</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
              velit doloremque dicta
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[400px] z-0">
        <img
          src="src/assets/resourdse.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
        />
        <button className="absolute bottom-[10%] left-[50%] -translate-x-1/2 px-6 py-3 bg-red-500">
          Call to Action
        </button>
      </div>
      <div className="relative w-full h-[400px] z-0">
        <img
          src="src/assets/resourdse.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
        />
        <button className="absolute bottom-[10%] left-[50%] -translate-x-1/2 px-6 py-3 bg-red-500">
          Call to Action
        </button>
      </div>
    </section>
  );
}
