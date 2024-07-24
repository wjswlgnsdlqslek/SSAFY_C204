package com.worq.worcation.domain.user.service;

import com.sun.jdi.request.DuplicateRequestException;
import com.worq.worcation.domain.user.domain.User;
import com.worq.worcation.domain.user.dto.request.SignUpRequestDto;
import com.worq.worcation.domain.user.dto.response.SignUpResponseDto;
import com.worq.worcation.domain.user.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Override
    @Transactional
    public ResponseEntity<SignUpResponseDto> signUp(@Valid final SignUpRequestDto requestDto) {
        log.info("in");
        emailValidate(requestDto.getEmail());
        phoneNumberValidate(requestDto.getPhone());
        nickNameValidate(requestDto.getNickName());

        User user = userRepository.save(User.builder()
                    .email(requestDto.getEmail())
                    .phone(requestDto.getPhone())
                    .password(requestDto.getPassword())
                    .nickName(requestDto.getNickName())
                    .sido(requestDto.getSido())
                    .gugun(requestDto.getGugun())
                    .build());

        return ResponseEntity.ok(SignUpResponseDto.builder()
                        .id(user.getId())
                        .email(user.getEmail())
                        .phone(user.getPhone())
                        .nickName(user.getNickName())
                        .sido(user.getSido())
                        .gugun(user.getGugun())
                        .build());
    }
    private void emailValidate(String email) {
        if(userRepository.findByEmail(email) != null) {
            throw new DuplicateRequestException("이미 가입되어있는 이메일 입니다.");
        }
    }
    private void phoneNumberValidate(String phone) {
        if(userRepository.findByPhone(phone) != null) {
            throw new DuplicateRequestException("이미 가입되어있는 전화번호 입니다.");
        }
    }
    private void nickNameValidate(String nickName) {
        if(userRepository.findByNickName(nickName) != null) {
            throw new DuplicateRequestException("이미 가입되어있는 닉네임 입니다.");
        }
    }
}
