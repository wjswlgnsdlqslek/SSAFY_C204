package com.worq.worcation.domain.worcation.application;

import com.worq.worcation.domain.worcation.dao.WorcationRepository;
import com.worq.worcation.domain.worcation.domain.Worcation;
import com.worq.worcation.domain.worcation.dto.WorcationRequestDto;
import com.worq.worcation.domain.worcation.dto.WorcationResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorcationServiceImpl implements WorcationService {

    @Autowired
    private WorcationRepository worcationRepository;

    @Override
    public WorcationResponseDto createWorcation(WorcationRequestDto worcationRequestDto) {
        Worcation worcation = new Worcation();
        worcation.setStart(worcationRequestDto.getStart());
        worcation.setEnd(worcationRequestDto.getEnd());
        worcation.setSido(worcationRequestDto.getSido());
        worcation.setGugun(worcationRequestDto.getGugun());
        worcation.setJob(worcationRequestDto.getJob());
        worcation.setType(worcationRequestDto.getType());

        Worcation savedWorcation = worcationRepository.save(worcation);
        return new WorcationResponseDto(savedWorcation);
    }

    @Override
    public WorcationResponseDto updateWorcation(Long worcationId, WorcationRequestDto worcationRequestDto) { // 수정된 부분
        Worcation worcation = worcationRepository.findById(worcationId)
                .orElseThrow(() -> new RuntimeException("Worcation not found"));

        if (worcationRequestDto.getStart() != null) {
            worcation.setStart(worcationRequestDto.getStart());
        }
        if (worcationRequestDto.getEnd() != null) {
            worcation.setEnd(worcationRequestDto.getEnd());
        }
        if (worcationRequestDto.getSido() != null) {
            worcation.setSido(worcationRequestDto.getSido());
        }
        if (worcationRequestDto.getGugun() != null) {
            worcation.setGugun(worcationRequestDto.getGugun());
        }
        if (worcationRequestDto.getJob() != null) {
            worcation.setJob(worcationRequestDto.getJob());
        }
        if (worcationRequestDto.getType() != null) {
            worcation.setType(worcationRequestDto.getType());
        }

        Worcation updatedWorcation = worcationRepository.save(worcation);
        return new WorcationResponseDto(updatedWorcation);
    }

    @Override
    public void deleteWorcation(Long worcationid) {
        Worcation worcation = worcationRepository.findById(worcationid)
                .orElseThrow(() -> new RuntimeException("Worcation not found"));
        worcationRepository.delete(worcation);
    }
}
