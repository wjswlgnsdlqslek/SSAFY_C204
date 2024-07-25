package com.worq.worcation.domain.plan.service;

import com.worq.worcation.domain.plan.dao.PlanRepository;
import com.worq.worcation.domain.plan.dto.PlanResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanRepository planRepository;


    @Override
    public PlanResponseDto createPlan(PlanResponseDto planResponseDto) {
        return null;
    }

    @Override
    public PlanResponseDto deletePlan(PlanResponseDto planResponseDto, Long planId) {
        return null;
    }

    @Override
    public List<PlanResponseDto> viewPlan(PlanResponseDto planResponseDto) {
        return List.of();
    }

    @Override
    public PlanResponseDto updatePlan(PlanResponseDto planResponseDto, Long planId) {
        return null;
    }
}
