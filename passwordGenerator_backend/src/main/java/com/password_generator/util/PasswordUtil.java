package com.password_generator.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class PasswordUtil {

    private static final String LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String NUMBERS = "0123456789";
    private static final String SYMBOLS = "!@#$%^&*()_+";

    private static final Random RANDOM = new Random();

    // Generate password with multiple words and options
    public static String generatePasswordWords(int lettersPerWord, int numWords, boolean includeNumbers, boolean includeSymbols, String capitalization) {
        if (numWords > 6) numWords = 6; // max 6 words
        StringBuilder password = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < numWords; i++) {
            char[] chars = new char[lettersPerWord];

            // Fill all positions with random letters
            for (int j = 0; j < lettersPerWord; j++) {
                chars[j] = LOWER.charAt(random.nextInt(LOWER.length()));
            }

            // Replace a random position with number if enabled
            if (includeNumbers) {
                int pos = random.nextInt(lettersPerWord);
                chars[pos] = NUMBERS.charAt(random.nextInt(NUMBERS.length()));
            }

            // Replace a random position with symbol if enabled
            if (includeSymbols) {
                int pos = random.nextInt(lettersPerWord);
                chars[pos] = SYMBOLS.charAt(random.nextInt(SYMBOLS.length()));
            }

            // Convert char array to String
            String word = new String(chars);

            // Apply capitalization
            switch (capitalization.toLowerCase()) {
                case "allcaps":
                    word = word.toUpperCase();
                    break;
                case "capitalize":
                    word = word.substring(0, 1).toUpperCase() + word.substring(1);
                    break;
                case "lowercase":
                default:
                    word = word.toLowerCase();
                    break;
            }

            password.append(word);
//            if (i < numWords - 1) {
//                password.append("."); // separator
//            }
        }

        return password.toString();
    }

}

