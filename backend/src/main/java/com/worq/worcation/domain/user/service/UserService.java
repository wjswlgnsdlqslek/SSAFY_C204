package com.worq.worcation.domain.user.service;

import com.worq.worcation.common.response.ApiResponse;
import com.worq.worcation.domain.user.dto.request.SignUpRequestDto;
import com.worq.worcation.domain.user.dto.response.SignUpResponseDto;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<ApiResponse<SignUpResponseDto>> signUp(@Valid final SignUpRequestDto requestDto);
}
