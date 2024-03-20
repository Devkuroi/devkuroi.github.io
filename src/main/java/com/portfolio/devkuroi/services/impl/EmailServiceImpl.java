package com.portfolio.devkuroi.services.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;

import com.portfolio.devkuroi.services.IEmailService;
import com.portfolio.devkuroi.services.model.EmailDTO;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements IEmailService{
    
    @Autowired
    JavaMailSender javaMailSender;
    
    @Autowired
    TemplateEngine templateEngine;

    @Override
    public void sendEmail(EmailDTO email) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            String content = "Nombre: " + email.getNombre() + "\nEmail: " + email.getEmail() + "\nMensaje: " + email.getMensaje();
        
            helper.setTo("joan2000oviedo@gmail.com");
            helper.setSubject("Un mensaje del portafolio");
            helper.setText(content);

            javaMailSender.send(message);
        } catch(Exception e) {
            throw new RuntimeException("Error al enviar un correo: " + e.getMessage(), e);
        }
    }
}
