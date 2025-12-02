import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function PreviewBox({ preview, lettersPerWord, numWords, includeNumbers, includeSymbols, capitalization }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px) saturate(180%)",
          WebkitBackdropFilter: "blur(15px) saturate(180%)",
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          p: 2,
          mt: 2,
          border: "1px solid rgba(255,255,255,0.2)",
          transition: "transform 0.3s",
          // "&:hover": { transform: "scale(1.02)" }
        }}
      >
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">Live Preview</Typography>
          <Box sx={{ mt: 1, display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
            <Typography variant="h6" fontWeight={700}>{preview}</Typography>
            <Typography variant="body2" color="text.secondary">
              • words: {numWords} • letters/word: {lettersPerWord} • numbers: {includeNumbers ? "yes" : "no"} • symbols: {includeSymbols ? "yes" : "no"} • {capitalization}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
