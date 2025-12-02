import React from "react";
import { styled } from "@mui/system";

const BG = styled("div")(({ mode }) => ({
  position: "fixed",
  inset: 0,
  zIndex: 0,
  background: mode === "light"
    ? "linear-gradient(120deg,#f7fbff 0%, #e6f0ff 50%, #fefefe 100%)"
    : "linear-gradient(120deg,#0f1724 0%, #071226 50%, #0b1220 100%)",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "80vw",
    height: "80vw",
    left: "-10vw",
    top: "-30vw",
    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 30%)",
    transform: "rotate(25deg)",
    filter: "blur(40px)",
    opacity: mode === "light" ? 0.9 : 0.4,
    animation: "float 10s linear infinite",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "120vw",
    height: "100vw",
    right: "-30vw",
    bottom: "-40vw",
    background: mode === "light"
      ? "linear-gradient(120deg, rgba(20,120,255,0.06), rgba(100,180,255,0.04))"
      : "linear-gradient(120deg, rgba(60,90,140,0.06), rgba(20,50,80,0.04))",
    filter: "blur(60px)",
    transform: "rotate(-10deg)",
    animation: "float 18s linear infinite reverse",
  },
  "@keyframes float": {
    "0%": { transform: "translateY(0) rotate(0deg)" },
    "50%": { transform: "translateY(12px) rotate(3deg)" },
    "100%": { transform: "translateY(0) rotate(0deg)" }
  }
}));

export default function AnimatedBackground({ mode }) {
  return <BG mode={mode} />;
}
