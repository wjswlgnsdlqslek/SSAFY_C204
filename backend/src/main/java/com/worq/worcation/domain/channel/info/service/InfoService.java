package com.worq.worcation.domain.channel.info.service;

import com.worq.worcation.domain.channel.info.dto.InfoRequestDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface InfoService {

    List<String> CreateFeed(InfoRequestDto requestDto);
}
