"use client"

import acmeLogo from "@/assets/logo-acme.png"
import apexLogo from "@/assets/logo-apex.png"
import echoLogo from "@/assets/logo-echo.png"
import pulseLogo from "@/assets/logo-pulse.png"
import quantumLogo from "@/assets/logo-quantum.png"
import celestialLogo from "@/assets/logo-celestial.png"

import { motion } from "framer-motion"

export const LogoTicker = () => {
  const logos = [
    acmeLogo,
    apexLogo,
    echoLogo,
    pulseLogo,
    celestialLogo,
    quantumLogo,
    acmeLogo,
    apexLogo,
    echoLogo,
    pulseLogo,
    celestialLogo,
    quantumLogo,
  ]

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-8">
          <div className="flex-1 md:flex-none">
            <h2 className="font-semibold text-white/60">
              Trusted by top innovative teams
            </h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {logos.map((logo, index) => (
                <img
                  key={index} // Add key prop here
                  src={logo.src}
                  className="h-6 w-auto"
                  alt={`Logo ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
