package com.wava.worcation.domain.plan.service;

import com.wava.worcation.domain.plan.dto.PlanRequestDto;
import com.wava.worcation.domain.plan.dto.PlanResponseDto;

import java.util.List;

public interface PlanService {
    PlanResponseDto createPlan(final PlanRequestDto planRequestDto);

    void deletePlan( Long planId);

    List<PlanResponseDto> viewPlan(PlanRequestDto planRequestDto);

    PlanResponseDto updatePlan(PlanRequestDto planRequestDto, Long planId);
}
