package com.worq.worcation.domain.user.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SignUpResponseDto {
    private Long id;
    private String email;
    private String nickName;
    private String phone;
    private String sido;
    private String gugun;
}
