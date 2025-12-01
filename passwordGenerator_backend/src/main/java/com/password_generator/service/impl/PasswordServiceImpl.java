package com.password_generator.service.impl;

import com.password_generator.service.PasswordService;
import com.password_generator.util.PasswordUtil;
import org.springframework.stereotype.Service;

@Service
public class PasswordServiceImpl implements PasswordService {

    @Override
    public String generatePassword(int lettersPerWord, int numWords, boolean includeNumbers, boolean includeSymbols, String capitalization) {
        return PasswordUtil.generatePasswordWords(lettersPerWord, numWords, includeNumbers, includeSymbols, capitalization);
    }
}
