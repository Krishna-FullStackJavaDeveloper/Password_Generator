package com.password_generator.service;

public interface PasswordService {

    // New method for multi-word generation
    String generatePassword(int lettersPerWord, int numWords, boolean includeNumbers, boolean includeSymbols, String capitalization);
}
