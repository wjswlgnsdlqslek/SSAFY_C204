package com.worq.worcation.domain.plan.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PlanResponseDto {

    private String msg;
    private List<PlanData> data;

    @Getter
    @Setter
    public static class PlanData {
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

    public enum PlanType {
        WORK,
        REST
    }
}
