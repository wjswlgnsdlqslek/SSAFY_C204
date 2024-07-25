package com.worq.worcation.domain.user.service;

import com.worq.worcation.common.response.ApiResponse;
import com.worq.worcation.common.response.ErrorCode;
import com.worq.worcation.domain.user.domain.Role;
import com.worq.worcation.domain.user.domain.User;
import com.worq.worcation.domain.user.dto.request.SignUpRequestDto;
import com.worq.worcation.domain.user.dto.response.SignUpResponseDto;
import com.worq.worcation.domain.user.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * 유저 회원 가입
     * @param requestDto
     * @return ResponseEntity
     */
    @Override
    @Transactional
    public ResponseEntity<ApiResponse<SignUpResponseDto>> signUp(@Valid final SignUpRequestDto requestDto) {
        if(emailValidate(requestDto.getEmail())) {
            return ResponseEntity.status(ErrorCode.DUPLICATE_EMAIL.getStatus())
                                .body(ApiResponse.error(ErrorCode.DUPLICATE_EMAIL));
        }
        if(phoneNumberValidate(requestDto.getPhone())) {
            return ResponseEntity.status(ErrorCode.DUPLICATE_PHONE_NUMBER.getStatus())
                    .body(ApiResponse.error(ErrorCode.DUPLICATE_PHONE_NUMBER));
        }
        if(nickNameValidate(requestDto.getNickName())) {
            return ResponseEntity.status(ErrorCode.DUPLICATE_NICKNAME.getStatus())
                    .body(ApiResponse.error(ErrorCode.DUPLICATE_NICKNAME));
        }

        String encodedPassword = bCryptPasswordEncoder.encode(requestDto.getPassword());
        User user = userRepository.save(User.builder()
                    .email(requestDto.getEmail())
                    .phone(requestDto.getPhone())
                    .password(encodedPassword)
                    .nickName(requestDto.getNickName())
                    .sido(requestDto.getSido())
                    .sigungu(requestDto.getGugun())
                    .report(0L)
                    .role(Role.ROLE_VISITOR)
                    .build());

        return ResponseEntity.status(HttpStatus.OK)
                        .body(ApiResponse.success(SignUpResponseDto.builder()
                                .id(user.getId())
                                .email(user.getEmail())
                                .phone(user.getPhone())
                                .nickName(user.getNickName())
                                .sido(user.getSido())
                                .gugun(user.getSigungu())
                                .build()));

    }
    private boolean emailValidate(String email) {
        if(userRepository.findByEmail(email) != null) {
            return true;
        }
        return false;
    }
    private boolean phoneNumberValidate(String phone) {
        if(userRepository.findByPhone(phone) != null) {
            return true;
        }
        return false;
    }
    private boolean nickNameValidate(String nickName) {
        if(userRepository.findByNickName(nickName) != null) {
            return true;
        }
        return false;
    }
}
