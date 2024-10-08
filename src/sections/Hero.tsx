import { Button } from "@/components/button"

export const Hero = () => {
  return (
    <section className="h-[492px] flex items-center">
      <div className="container">
        <h1 className="text-center text-8xl font-bold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-center mt-5 text-lg text-white/70">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          tenetur veniam eaque et nihil quia praesentium quasi rem facere? Optio
          non laboriosam maiores ducimus voluptas quisquam molestias voluptatum
          dolorum culpa
        </p>

        <div className="flex justify-center my-5">
          <Button />
        </div>
      </div>
    </section>
  )
}
