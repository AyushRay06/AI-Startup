import { Button } from "@/components/button"
import starsBg from "@/assets/stars.png"

export const Hero = () => {
  return (
    <section
      className="h-[800px] flex items-center overflow-hidden relative"
      //USING IN LINE CSS FOR THE BACKGROIUND STAR IMAGE
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      {/* THE HERO SECTION PALNET THINGY */}
      {/* THE BIG PURPLE PLANET */}
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,250,255,.5),-20px_-20px_80px_rgb(255,0,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* FIRST RING */}
      <div className="absolute h-[344px] w-[344px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {/* PLANET on the ring left-0 top-1/2 */}
        <div className="absolute h-3 w-3 rounded-full bg-zinc-600 top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute h-3 w-3 rounded-full bg-zinc-600 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* 2nd Ring */}
      <div className="absolute h-[484px] w-[484px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* PLANET on 2nd Ring */}
        <div className="absolute h-4 w-4 bg-slate-800  rounded-full top-1/2 left-full -translate-x-1/2  -translate-y-1/2">
          {/* RING on Planet which is on the 2nd ring of the Main Planet */}
          <div className="absolute h-[64px] w-[64px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        </div>

        <div className="absolute h-4 w-4 bg-slate-800 border border-white/20 rounded-full top-0 left-1/2 -translate-x-1/2  -translate-y-1/2"></div>
      </div>
      {/* 3rd Ring */}
      <div className="absolute h-[699px] w-[699px] border rounded-full border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {/* PLANET on ring 3rd  ... cordinatest ir top an dleft through trial an error */}
        <div className="absolute h-6 w-6 bg-slate-700 rounded-full top-1/4 left-7">
          {/* RING on the planet which is on the 3rd ring of the main planet */}
          <div className="absolute h-[159px] w-[159px] border rounded-full border-white/20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        </div>
      </div>
      {/* 4th Ring */}
      <div className="absolute h-[899px] w-[899px] border rounded-full border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {/* PLANET on the 4th ring */}
        <div className="absolute h-8 w-8  bg-slate-800 rounded-full top-32 left-[764px]">
          {/* RING on planet whixh is on the 4th ring of the main planet */}
          <div className="absolute h-[190px] w-[190px] border rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container relative mt-16">
        <h1 className="text-center text-8xl md:text-9xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-center mt-6 text-2xl text-white/60">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          tenetur veniam eaque et nihil quia praesentium quasi rem facere? Optio
          non laboriosam maiores ducimus voluptas quisquam molestias voluptatum
          dolorum culpa
        </p>

        <div className="flex justify-center mt-10">
          <Button />
        </div>
      </div>
    </section>
  )
}
