import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, IconButton, Box, LinearProgress, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { motion } from "framer-motion";
import copy from "copy-to-clipboard";
import zxcvbn from "zxcvbn";
import { useTheme } from "@mui/material/styles";

export default function ResultBox({ password, fullWidth }) {
  const [copied, setCopied] = useState(false);
  const [score, setScore] = useState(null);

  const theme = useTheme();
  
  useEffect(() => {
    if (password) {
      const result = zxcvbn(password);
      setScore(result.score);
    } else {
      setScore(null);
    }
  }, [password]);

  const handleCopy = () => {
    if (!password) return;
    copy(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const scoreLabel = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
  const scoreColor = ["#d32f2f", "#f57c00", "#fbc02d", "#7cb342", "#2e7d32"];

  if (!password) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      <Card
        sx={{
          mt: 3,
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          width: "100%",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px) saturate(180%)",
          WebkitBackdropFilter: "blur(15px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.2)",
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.02)" }
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, wordBreak: "break-word", flex: 1 }} >{password}</Typography>
            <Tooltip title="Copy password">
              <span>
                <IconButton onClick={handleCopy} color={copied ? "success" : "default"}>
                  <ContentCopy />
                </IconButton>
              </span>
            </Tooltip>
          </Box>

          {score !== null && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
              <LinearProgress
                variant="determinate"
                value={(score + 1) * 20}
                sx={{
                  flex: 1,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#efefef",
                  "& .MuiLinearProgress-bar": { backgroundColor: scoreColor[score] },
                }}
              />
              <Typography variant="body1" sx={{ minWidth: 100, textAlign: "right", color: scoreColor[score], fontWeight: 600 }}>
                {scoreLabel[score]}
              </Typography>
            </Box>
          )}

          {copied && <Typography color="success.main" variant="body2" sx={{ mt: 1 }}>Copied to clipboard ✓</Typography>}
        </CardContent>
      </Card>
    </motion.div>
  );
}
