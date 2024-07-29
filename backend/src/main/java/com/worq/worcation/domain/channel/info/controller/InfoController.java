package com.worq.worcation.domain.channel.info.controller;

import com.worq.worcation.domain.channel.info.dto.InfoRequestDto;
import com.worq.worcation.domain.channel.info.dto.InfoResponseDto;
import com.worq.worcation.domain.channel.info.service.InfoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/channel/feed")
@RequiredArgsConstructor
@Slf4j
public class InfoController{
    public final InfoService infoService;

    @PostMapping("/create")
    public ResponseEntity<List<String>> createInfo(
            @RequestPart("file") MultipartFile[] file,
            @RequestPart("info") InfoRequestDto requestDto) {
        List<String> list = infoService.CreateFeed(requestDto);

        return null;
    }

    @GetMapping("/{userid}")
    public ResponseEntity<InfoResponseDto> getInfo(@PathVariable("userid") String userid) {
        return null;
    }

    @PostMapping("/{feedId}/comment")
    public ResponseEntity<InfoResponseDto> getComment(@PathVariable("feedId") String feedId, @RequestParam Userid userid) {}
}
