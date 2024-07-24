package com.worq.worcation.domain.worcation.application;

import com.worq.worcation.domain.worcation.dto.WorcationRequestDto;
import com.worq.worcation.domain.worcation.dto.WorcationResponseDto;

public interface WorcationService {
    WorcationResponseDto createWorcation(WorcationRequestDto worcationRequestDto);

    WorcationResponseDto updateWorcation(Long worcationId, WorcationRequestDto worcationRequestDto);

    void deleteWorcation(Long worcationid);
}
