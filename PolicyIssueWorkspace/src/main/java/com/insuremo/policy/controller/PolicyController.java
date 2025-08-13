package com.insuremo.policy.controller;

import com.insuremo.policy.model.Policy;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import jakarta.validation.Valid;

@Controller
public class PolicyController {

    @GetMapping("/")
    public String showForm(@ModelAttribute("policy") Policy policy) {
        return "index";
    }

    @GetMapping("/enrolled-policies")
    public String showEnrolledPolicies() {
        return "enrolled-policies";
    }

    @PostMapping("/submit")
    public String submitForm(@Valid @ModelAttribute("policy") Policy policy, BindingResult result) {
        if (result.hasErrors()) {
            return "index";
        }
        return "redirect:/?success";
    }
}
