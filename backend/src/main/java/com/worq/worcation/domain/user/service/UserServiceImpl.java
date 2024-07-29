package com.worq.worcation.domain.user.service;
import com.worq.worcation.common.jwt.TokenProvider;
import com.worq.worcation.common.response.ApiResponse;
import com.worq.worcation.common.response.ErrorCode;
import com.worq.worcation.common.util.RedisUtil;
import com.worq.worcation.domain.user.domain.User;
import com.worq.worcation.domain.user.dto.request.LoginRequestDto;
import com.worq.worcation.domain.user.dto.request.SignUpRequestDto;
import com.worq.worcation.domain.user.dto.response.TokenDto;
import com.worq.worcation.domain.user.dto.response.UserResponseDto;
import com.worq.worcation.domain.user.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Collections;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AuthenticationManagerBuilder managerBuilder;
    private final TokenProvider tokenProvider;
    private final RedisUtil redisUtil;
    /**
     * 유저 회원 가입
     * @param requestDto
     * @return ResponseEntity
     */
    @Override
    @Transactional
    public ResponseEntity<ApiResponse<UserResponseDto>> signUp(@Valid final SignUpRequestDto requestDto) {
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
                .sigungu(requestDto.getSigungu())
                .report(0L)
                .roles(Collections.singletonList("VISITOR"))
                .build());

        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.success(UserResponseDto.builder()
                        .id(user.getId())
                        .email(user.getEmail())
                        .phone(user.getPhone())
                        .nickName(user.getNickName())
                        .sido(user.getSido())
                        .sigungu(user.getSigungu())
                        .build()));

    }

    /**
     * 로그인 : 로그인 성공 시 토큰 발급 및 헤어데 토큰 추가
     * @param requestDto
     * @param response
     * @return ResponseEntity
     */
    @Transactional
    @Override
    public ResponseEntity<ApiResponse<TokenDto>> login(@Valid final LoginRequestDto requestDto, HttpServletResponse response) {
        UsernamePasswordAuthenticationToken authenticationToken = new
                UsernamePasswordAuthenticationToken(requestDto.getEmail(), requestDto.getPassword());

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        TokenDto tokenDto = tokenProvider.generateToken(authentication);
        response.addHeader("Authorization",tokenDto.accessToken());
        response.addHeader("refreshToken",tokenDto.refreshToken());

        return ResponseEntity.status(HttpStatus.OK)
                .body(ApiResponse.success(tokenDto));
    }

    private boolean emailValidate(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) {
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
