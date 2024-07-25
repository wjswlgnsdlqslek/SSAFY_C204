package com.worq.worcation.domain.plan.controller;

import com.worq.worcation.domain.plan.dto.PlanResponseDto;
import com.worq.worcation.domain.plan.service.PlanService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/plan")
public class PlanController {
    @Autowired
    private PlanService PlanService;

    @PostMapping("/create")
    public ResponseEntity<?> createPlan(@RequestBody PlanResponseDto planResponseDto){
        try {
            PlanResponseDto response = PlanService.createPlan(planResponseDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return  ResponseEntity.status(500).body("일시적인 오류가 발생했습니다");
        }
    }
    @DeleteMapping("/delete/{planId}")
    public ResponseEntity<?> deletePlan(@RequestBody PlanResponseDto planResponseDto,@RequestParam Long planId){
        try {
            PlanResponseDto response = PlanService.deletePlan(planResponseDto,planId);
            return ResponseEntity.ok("Success");
        } catch (Exception e) {
            return  ResponseEntity.status(500).body("일시적인 오류가 발생했습니다");
        }
    }
    @GetMapping("/view")
    public ResponseEntity<?> viewPlan(@RequestBody PlanResponseDto planResponseDto){
        try {
            List<PlanResponseDto> response = PlanService.viewPlan(planResponseDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return  ResponseEntity.status(500).body("일시적인 오류가 발생했습니다");
        }
    }
    @PatchMapping("/update/{planId}")
    public ResponseEntity<?> updatePlan(@RequestBody PlanResponseDto planResponseDto,@RequestParam Long planId){
        try {
            PlanResponseDto response = PlanService.updatePlan(planResponseDto,planId);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return  ResponseEntity.status(500).body("일시적인 오류가 발생했습니다");
        }
    }
}
