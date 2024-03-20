package com.portfolio.devkuroi.services;

import com.portfolio.devkuroi.services.model.EmailDTO;

import jakarta.mail.MessagingException;

public interface IEmailService {
    public void sendEmail(EmailDTO email) throws MessagingException;
}
