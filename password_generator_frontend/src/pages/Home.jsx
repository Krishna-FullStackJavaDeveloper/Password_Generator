import React, { useState } from "react";
import { Box, Typography, IconButton, Stack, Tooltip } from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Lock,
  Security,
  CheckCircle,
  Shield,
  Fingerprint,
  Code,
  Devices,
  LockClock,
  GitHub,
  LinkedIn,
  Email,
  Web,
  LockOutlined,
} from "@mui/icons-material";
import PasswordForm from "../components/PasswordForm";
import ResultBox from "../components/ResultBox";
import { motion } from "framer-motion";
import appIcon from "../assets/password.png";
// import appIcon from "../assets/password-strenght.png";

const ICONS = [Lock, Security, Fingerprint, CheckCircle, Shield];

// Floating shapes component
const FloatingShapes = ({ mode }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: ["0%", "10%", "0%"], x: ["0%", "5%", "0%"] }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i,
          }}
          style={{
            position: "absolute",
            width: 60 + i * 15,
            height: 60 + i * 15,
            borderRadius: "50%",
            background:
              mode === "light"
                ? `rgba(100, 150, 255, ${0.1 + i * 0.05})`
                : `rgba(100, 150, 255, ${0.05 + i * 0.05})`,
            top: `${i * 15 + 10}%`,
            left: `${i * 12 + 5}%`,
            filter: "blur(15px)",
          }}
        />
      ))}
    </Box>
  );
};

export default function Home({ mode, toggleMode }) {
  const [password, setPassword] = useState("");

  const totalIcons = 20; // number of icons to show

  const getRandom = (min, max) => min + Math.random() * (max - min);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
          background:
            mode === "light"
              ? "linear-gradient(120deg, #f7fbff, #e6f0ff)"
              : "linear-gradient(120deg, #0f1724, #071226)",
        }}
      >
        {/* Background image */}
        <Box
          sx={{
            position: "fixed", // fixed ensures icons stay relative to viewport
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh", // full viewport height
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {Array.from({ length: totalIcons }).map((_, i) => {
            const IconComponent =
              ICONS[Math.floor(Math.random() * ICONS.length)];
            const top = getRandom(0, 100); // now full 0-100%
            const left = getRandom(0, 100);
            const size = getRandom(50, 150);
            const opacity = getRandom(0.02, 0.08);

            return (
              <motion.div
                key={i}
                animate={{
                  y: [`0%`, `${getRandom(2, 10)}%`, `0%`],
                  x: [`0%`, `${getRandom(2, 5)}%`, `0%`],
                  rotate: [0, getRandom(0, 360), 0],
                }}
                transition={{
                  duration: getRandom(15, 30),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: getRandom(0, 5),
                }}
                style={{
                  position: "absolute",
                  top: `${top}%`,
                  left: `${left}%`,
                }}
              >
                <IconComponent
                  sx={{
                    fontSize: size,
                    opacity: opacity,
                    color:
                      mode === "light"
                        ? "rgba(100, 150, 255, 1)"
                        : "rgba(100, 150, 255, 0.6)",
                  }}
                />
              </motion.div>
            );
          })}
        </Box>
        {/* Floating shapes in background */}
        <FloatingShapes mode={mode} />

        {/* Theme Toggle */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mb: 4,
            zIndex: 10,
          }}
        >
          <motion.div
            whileTap={{ scale: 0.8, rotate: 20 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              borderRadius: "50%",
              background: mode === "light" ? "#f0f4ff" : "#1a202c",
              padding: 8,
              display: "inline-block",
            }}
          >
            <IconButton
              onClick={toggleMode}
              sx={{
                fontSize: 32,
                color: mode === "light" ? "#2b6cb0" : "#63b3ed",
                transition: "color 0.3s",
              }}
            >
              {mode === "light" ? (
                <Brightness4 fontSize="inherit" />
              ) : (
                <Brightness7 fontSize="inherit" />
              )}
            </IconButton>
          </motion.div>
        </Box>

        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            maxWidth: 800,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <motion.img
              src={appIcon}
              alt="App Icon"
              style={{ width: 80, height: 80 }}
              animate={{ rotate: [0, 10, -10, 0] }} // subtle rotation animation
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                lineHeight: 1.2,
                background: "linear-gradient(90deg, #2b6cb0, #63b3ed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              StrongPass Generator
            </Typography>
          </motion.div>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6, mt: 2 }}
          >
            Keep your accounts secure by generating complex passwords. Each
            password is unique and never shared with servers.
          </Typography>
        </Box>

        {/* Side by Side Info Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 3 }, // reduced gap
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 4 },
            alignItems: "stretch",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Left Column */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{ flex: 1 }}
            initial={{ y: 0 }}
            // animate={{ y: [0, -5, 0] }}
            // transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Box
              sx={{
                background:
                  mode === "light"
                    ? "rgba(255,255,255,0.25)"
                    : "rgba(20,30,50,0.25)",
                backdropFilter: "blur(15px) saturate(180%)",
                WebkitBackdropFilter: "blur(15px) saturate(180%)",
                borderRadius: 4,
                p: 4,
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                border:
                  mode === "light"
                    ? "1px solid rgba(255,255,255,0.3)"
                    : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Lock
                sx={{
                  fontSize: 50,
                  background: "linear-gradient(90deg, #2b6cb0, #63b3ed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                A Strong Password
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                A strong password is key for protecting your personal info and
                assets online. Using different passwords that are long and
                include multiple types of characters will help secure your
                accounts.
              </Typography>
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CheckCircle sx={{ color: "#63b3ed" }} />
                  <Typography color="text.secondary">
                    Use at least 12 characters
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Shield sx={{ color: "#63b3ed" }} />
                  <Typography color="text.secondary">
                    Include letters, numbers, and symbols
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Fingerprint sx={{ color: "#63b3ed" }} />
                  <Typography color="text.secondary">
                    Never reuse passwords across sites
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </motion.div>

          {/* Right Column */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{ flex: 1 }}
            initial={{ y: 0 }}
            // animate={{ y: [0, -5, 0] }}
            // transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Box
              sx={{
                background:
                  mode === "light"
                    ? "rgba(255,255,255,0.25)"
                    : "rgba(20,30,50,0.25)",
                backdropFilter: "blur(15px) saturate(180%)",
                WebkitBackdropFilter: "blur(15px) saturate(180%)",
                borderRadius: 4,
                p: 4,
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                border:
                  mode === "light"
                    ? "1px solid rgba(255,255,255,0.3)"
                    : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Security
                sx={{
                  fontSize: 50,
                  background: "linear-gradient(90deg, #63b3ed, #2b6cb0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                How it Works
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                Password generation is done directly in your browser. Your
                passwords are never transmitted or stored on any server, keeping
                them private and secure.
              </Typography>
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Code sx={{ color: "#63b3ed" }} />
                  <Typography color="text.secondary">
                    Generated entirely in your browser
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Devices sx={{ color: "#63b3ed" }} />
                  <Typography color="text.secondary">
                    Works on all devices and screen sizes
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LockClock sx={{ color: "#63b3ed" }} />
                  <Typography color="text.secondary">
                    No storage or server transmission
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </motion.div>
        </Box>

        {/* Password Form Card */}
        <Box
          component={motion.div}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          sx={{
            width: { xs: "100%", md: "95%" },
            background:
              mode === "light"
                ? "rgba(255, 255, 255, 0.25)"
                : "rgba(20, 30, 50, 0.25)",
            backdropFilter: "blur(15px) saturate(180%)",
            WebkitBackdropFilter: "blur(15px) saturate(180%)",
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            p: { xs: 3, md: 5 },
            mb: 6,
            border:
              mode === "light"
                ? "1px solid rgba(255, 255, 255, 0.3)"
                : "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <PasswordForm setPassword={setPassword} fullWidth />
          {password && <ResultBox password={password} fullWidth />}
        </Box>

        {/* Footer */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Made with ❤️ by Krishna Bhatt.
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 1 }}
          >
            <Tooltip title="Portfolio">
              <span>
                <IconButton
                  component="a"
                  href="https://krishna-fullstackjavadeveloper.github.io/myPortfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <Web />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title="GitHub Repository">
              <span>
                <IconButton
                  component="a"
                  href="https://github.com/Krishna-FullStackJavaDeveloper?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <GitHub />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title="LinkedIn">
              <span>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/krishnabhatt-fullstackdeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  <LinkedIn />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title="Email">
              <span>
                <IconButton
                  component="a"
                  href="mailto:krishnampandya@gmail.com"
                  color="inherit"
                >
                  <Email />
                </IconButton>
              </span>
            </Tooltip>
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
}
