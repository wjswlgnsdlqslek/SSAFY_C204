package com.worq.worcation.domain.channel.service;


import com.worq.worcation.common.response.ApiResponse;
import com.worq.worcation.domain.channel.dto.request.GroupChannelRequestDto;
import com.worq.worcation.domain.channel.dto.response.GroupChannelResponseDto;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface GroupChannelService {
    ResponseEntity<ApiResponse<GroupChannelResponseDto>> createGroupChannel(@Valid final GroupChannelRequestDto groupChannelRequestDto);

 }
