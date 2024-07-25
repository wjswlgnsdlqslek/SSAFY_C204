package com.worq.worcation.domain.plan.dto;

import com.worq.worcation.domain.plan.domain.PlanType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlanResponseDto {

    private Long id;
    private String title;
    private String content;
    private String start;
    private String end;
    private String important;
    private PlanType type;
    private String className; // DTO만 사용
    private Boolean isFinish;

}
