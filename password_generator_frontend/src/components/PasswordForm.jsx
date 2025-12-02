import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  Tooltip,
  Stack,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { generatePassword } from "../api";
import PreviewBox from "./PreviewBox";

export default function PasswordForm({ setPassword, fullWidth }) {
  const [lettersPerWord, setLettersPerWord] = useState(6);
  const [numWords, setNumWords] = useState(2);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [capitalization, setCapitalization] = useState("capitalize");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [preview, setPreview] = useState("");
  const [backendPassword, setBackendPassword] = useState("");

  const [lettersError, setLettersError] = useState("");
  const [wordsError, setWordsError] = useState("");

  useEffect(() => {
    const makePreview = () => {
      if (lettersPerWord > 6 || numWords > 6) return; // prevent generating invalid preview

      const lower = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+";

      let words = [];
      for (let w = 0; w < Math.min(6, Math.max(1, numWords)); w++) {
        let chars = Array.from(
          { length: Math.min(6, Math.max(1, lettersPerWord)) },
          (_, i) => lower[(i + w * 3) % lower.length]
        );
        if (includeNumbers)
          chars[(w + 1) % chars.length] = numbers[(w + 1) % numbers.length];
        if (includeSymbols)
          chars[(w + 2) % chars.length] = symbols[(w + 2) % symbols.length];

        let word = chars.join("");
        if (capitalization === "allcaps") word = word.toUpperCase();
        if (capitalization === "capitalize")
          word = word[0].toUpperCase() + word.slice(1);

        words.push(word);
      }
      setPreview(words.join("."));
    };
    makePreview();
  }, [
    lettersPerWord,
    numWords,
    includeNumbers,
    includeSymbols,
    capitalization,
  ]);

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    try {
      const resp = await generatePassword({
        lettersPerWord,
        numWords,
        includeNumbers,
        includeSymbols,
        capitalization,
      });
      setBackendPassword(resp.password);
      setPassword(resp.password);
      setPreview(resp.password);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to generate password — using Quick Preview as fallback."
      );
      setPassword(preview.replace(/\./g, ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{ width: "100%" }}
    >
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          width: fullWidth ? "100%" : "auto",
          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(15px) saturate(180%)",
          WebkitBackdropFilter: "blur(15px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.3)",
          transition: "transform 0.3s",
          // "&:hover": { transform: "scale(1.02)" },
        }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Typography variant="h5" fontWeight="700" gutterBottom>
            Customize Your Password
          </Typography>

          <Box sx={{ display: "grid", gap: 2 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Letters / word"
                type="number"
                fullWidth
                value={lettersPerWord}
                error={!!lettersError}
                helperText={lettersError}
                onChange={(e) => {
                  const val = e.target.value;

                  // Allow empty input so user can type
                  if (val === "") {
                    setLettersPerWord("");
                    setLettersError("Minimum 1 letter required");
                    return;
                  }

                  const numVal = Number(val);

                  if (numVal > 6) {
                    setLettersError("Cannot exceed 6 letters per word");
                  } else if (numVal < 1) {
                    setLettersError("Minimum 1 letter required");
                  } else {
                    setLettersError("");
                  }

                  setLettersPerWord(numVal);
                }}
              />

              <TextField
                label="Number of words"
                type="number"
                fullWidth
                value={numWords}
                error={!!wordsError}
                helperText={wordsError}
                onChange={(e) => {
                  const val = e.target.value;

                  // Allow empty input so user can type
                  if (val === "") {
                    setNumWords("");
                    setWordsError("Minimum 1 word required");
                    return;
                  }

                  const numVal = Number(val);

                  if (numVal > 6) {
                    setWordsError("Cannot exceed 6 words");
                  } else if (numVal < 1) {
                    setWordsError("Minimum 1 word required");
                  } else {
                    setWordsError("");
                  }

                  setNumWords(numVal);
                }}
              />
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                  />
                }
                label="Include numbers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                  />
                }
                label="Include symbols"
              />
            </Stack>

            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Capitalization
              </Typography>
              <RadioGroup
                row
                value={capitalization}
                onChange={(e) => setCapitalization(e.target.value)}
              >
                <FormControlLabel
                  value="lowercase"
                  control={<Radio />}
                  label="lowercase"
                />
                <FormControlLabel
                  value="capitalize"
                  control={<Radio />}
                  label="Capitalize"
                />
                <FormControlLabel
                  value="allcaps"
                  control={<Radio />}
                  label="ALL CAPS"
                />
              </RadioGroup>
            </Box>

            {/* Preview Box */}
            <PreviewBox
              preview={preview}
              lettersPerWord={lettersPerWord}
              numWords={numWords}
              includeNumbers={includeNumbers}
              includeSymbols={includeSymbols}
              capitalization={capitalization}
            />

            {error && <Typography color="error">{error}</Typography>}

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
              <Tooltip title="Generate password">
                <span>
                  <Button
                    variant="contained"
                    onClick={handleGenerate}
                    disabled={loading || !!lettersError || !!wordsError}
                    // sx={{ width: "100%" }}
                  >
                    {loading ? "Generating…" : "Generate Password"}
                  </Button>
                </span>
              </Tooltip>

              <Box sx={{ flex: 1 }} />
              <Chip
                label={`Expected length: ${lettersPerWord * numWords}`}
                variant="outlined"
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
