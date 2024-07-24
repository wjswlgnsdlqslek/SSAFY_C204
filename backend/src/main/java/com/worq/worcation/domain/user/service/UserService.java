package com.worq.worcation.domain.user.service;

import com.worq.worcation.domain.user.dto.request.SignUpRequestDto;
import com.worq.worcation.domain.user.dto.response.SignUpResponseDto;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<SignUpResponseDto> signUp(@Valid final SignUpRequestDto requestDto);
}
