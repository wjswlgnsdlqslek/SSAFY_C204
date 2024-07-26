package com.worq.worcation.domain.user.controller;

import com.worq.worcation.common.response.ApiResponse;
import com.worq.worcation.domain.user.dto.request.SignUpRequestDto;
import com.worq.worcation.domain.user.dto.response.SignUpResponseDto;
import com.worq.worcation.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Slf4j
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<SignUpResponseDto>> signup(@RequestBody SignUpRequestDto requestDto) {
        return userService.signUp(requestDto);
    }
}
