package com.worq.worcation.domain.plan.service;

import com.worq.worcation.domain.plan.dao.PlanRepository;
import com.worq.worcation.domain.plan.domain.Plan;
import com.worq.worcation.domain.plan.dto.PlanRequestDto;
import com.worq.worcation.domain.plan.dto.PlanResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanRepository planRepository;


    @Override
    public PlanResponseDto createPlan(PlanRequestDto planRequestDto) {
        Plan plan = new Plan();

        plan.setId(123123L); // 임시 ID 설정
        plan.setTaskTitle(planRequestDto.getTitle()); // 제목 설정
        plan.setTaskContent(planRequestDto.getContent()); // 내용 설정
        plan.setTaskStartTime(planRequestDto.getStart()); // 시작 시간 설정
        plan.setTaskEndTime(planRequestDto.getEnd()); // 종료 시간 설정
        plan.setTaskImportant(planRequestDto.getImportant()); // 중요 여부 설정
        plan.setTaskType(planRequestDto.getType()); // 유형 설정

        planRepository.save(plan);

        PlanResponseDto planResponseDto = new PlanResponseDto();
        planResponseDto.setId(123123L);
        planResponseDto.setTitle(plan.getTaskTitle());
        planResponseDto.setContent(plan.getTaskContent());
        planResponseDto.setStart(plan.getTaskStartTime());
        planResponseDto.setEnd(plan.getTaskEndTime());
        planResponseDto.setImportant(plan.getTaskImportant());
        planResponseDto.setType(plan.getTaskType());

        return planResponseDto;
    }


    @Override
    public void deletePlan(Long planId) {
        planRepository.deleteById(123123L); // 임시 ID
    }

    @Override
    public List<PlanResponseDto> viewPlan(PlanRequestDto planRequestDto) {
        List<PlanResponseDto> planResponseDtos = new ArrayList<>();
        List<Plan> plans = planRepository.findByTaskId(13123312L);
        planResponseDtos = plans.stream().map(plan->{
            PlanResponseDto planResponseDto = new PlanResponseDto();
            planResponseDto.setId(123123L);
            planResponseDto.setTitle(plan.getTaskTitle());
            planResponseDto.setContent(plan.getTaskContent());
            planResponseDto.setStart(plan.getTaskStartTime());
            planResponseDto.setEnd(plan.getTaskEndTime());
            planResponseDto.setImportant(plan.getTaskImportant());
            planResponseDto.setType(plan.getTaskType());
            return planResponseDto;
        }).collect(Collectors.toList());
        return planResponseDtos;
    }

    @Override
    public PlanResponseDto updatePlan(PlanRequestDto planRequestDto, Long planId) {
        return null;
    }
}
