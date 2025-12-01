package com.password_generator.controller;


import com.password_generator.service.PasswordService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
@Tag(name = "Password Generator API", description = "Generate passwords using various strategies")
public class PasswordController {

    private final PasswordService passwordService;

    @Autowired
    public PasswordController(PasswordService passwordService) {
        this.passwordService = passwordService;
    }

    @GetMapping("/generate")
    @Operation(summary = "Generate multi-word password", description = "Generate password based on letters per word, number of words, numbers/symbols, and capitalization")
    public Map<String, String> generatePasswordWords(
            @RequestParam(defaultValue = "6") int lettersPerWord,
            @RequestParam(defaultValue = "2") int numWords,
            @RequestParam(defaultValue = "true") boolean includeNumbers,
            @RequestParam(defaultValue = "true") boolean includeSymbols,
            @Parameter(description = "capitalization: (lowercase, allcaps, capitalize)")
            @RequestParam(defaultValue = "capitalize") String capitalization // lowercase, allcaps, capitalize

    ) {
        String password = passwordService.generatePassword(lettersPerWord, numWords, includeNumbers, includeSymbols, capitalization);
        return Map.of("password", password);
    }

}
