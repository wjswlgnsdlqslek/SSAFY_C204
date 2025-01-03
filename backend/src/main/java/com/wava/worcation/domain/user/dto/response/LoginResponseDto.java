package com.wava.worcation.domain.user.dto.response;

import com.wava.worcation.domain.worcation.dto.WorcationResponseDto;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponseDto {
    private String nickName;
    private String profile;
    private Boolean isWorcation;
    private WorcationResponseDto worcation;

}
