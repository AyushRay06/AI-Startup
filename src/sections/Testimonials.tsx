"use client"

import avatar1 from "@/assets/avatar-1.png"
import avatar2 from "@/assets/avatar-2.png"
import avatar3 from "@/assets/avatar-3.png"
import avatar4 from "@/assets/avatar-4.png"
import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
]

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-5xl text-center lg:text-7xl font-semibold tracking-tighter">
          Beyound Expections.
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-center pt-5 text-lg md:text-xl tracking-tight">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          maiores! Sunt odit dicta ea.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-5 flex-none -translate-x-1/2 pr-5"
          >
            {/* creating an array and spreading testimonial so that it can loop basically to map testimonial twice */}
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                // flex-none esure that flex property is not determining the dimention of the element, and it is determined by whatever the explicit declaration is
                className="border border-white/15 p-6 md:p-10 lg:p-12 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md lg:max-w-lg mx-auto flex-none"
              >
                <div className="text-xl tracking-tight">{testimonial.text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <Image
                    src={testimonial.avatarImg}
                    alt={`Avatar of ${testimonial.name}`}
                    className="rounded-xl h-11 w-11 grayscale border border-white/80"
                  />

                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="font-light">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
