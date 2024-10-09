import Starbg from "@/assets/stars.png"
import Gridbg from "@/assets/grid-lines.png"
import { Button } from "@/components/button"

export const CallToAction = () => {
  return (
    <section className="p-20 md:p-28">
      <div
        className="border border-white/10 py-28 rouned-xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${Starbg.src})`,
        }}
      >
        <div
          className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] "
          style={{
            backgroundImage: `url(${Gridbg.src})`,
          }}
        ></div>
        <div className="container">
          <div className="relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-center max-w-lg mx-auto">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-lg text-white/70 text-center mt-10 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              beatae blanditiis aliquid.
            </p>
            <div className="text-center mt-10">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
