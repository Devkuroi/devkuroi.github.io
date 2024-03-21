package com.portfolio.devkuroi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.devkuroi.services.IEmailService;
import com.portfolio.devkuroi.services.model.EmailDTO;

import jakarta.mail.MessagingException;


@RestController
@RequestMapping
public class EmailController {
    
    final IEmailService emailService;

    EmailController(IEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    public ResponseEntity<String> sendMail(@RequestParam("name") String nombre, @RequestParam("email") String mail, @RequestParam("message") String message) throws MessagingException {
        
        EmailDTO email = new EmailDTO(nombre, mail, message);
        emailService.sendEmail(email);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
