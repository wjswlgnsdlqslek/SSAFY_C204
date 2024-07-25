package com.worq.worcation.domain.plan.service;

import com.worq.worcation.domain.plan.dto.PlanResponseDto;

import java.util.List;

public interface PlanService {
    PlanResponseDto createPlan(final PlanResponseDto planResponseDto);

    PlanResponseDto deletePlan(PlanResponseDto planResponseDto, Long planId);

    List<PlanResponseDto> viewPlan(PlanResponseDto planResponseDto);

    PlanResponseDto updatePlan(PlanResponseDto planResponseDto, Long planId);
}
