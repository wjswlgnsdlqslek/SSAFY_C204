package com.worq.worcation.domain.dashboard.application;

import com.worq.worcation.domain.dashboard.dto.WorcationRequestDto;
import com.worq.worcation.domain.dashboard.dto.WorcationResponseDto;

public interface WorcationService {
    WorcationResponseDto createWorcation(WorcationRequestDto worcationRequestDto);

    WorcationResponseDto updateWorcation(Long worcationId, WorcationRequestDto worcationRequestDto);

    void deleteWorcation(Long worcationid);
}
