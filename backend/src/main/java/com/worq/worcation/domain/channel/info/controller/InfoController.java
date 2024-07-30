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
import java.util.Map;

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
    public ResponseEntity<InfoResponseDto> getFeed(@PathVariable("userid") String userid) {
        return null;
    }

    @PostMapping("/{feedId}/comment")
    public ResponseEntity<?> createComment(@PathVariable("feedId") String feedId, @RequestBody Map<String, String> comment) {
        Long userid = Long.valueOf(comment.get("userid"));
        Long feedid = Long.valueOf(feedId);
        String commentContext = comment.get("Comment");

        Map<String, Object> commentMap = infoService.createComment(userid, feedid, commentContext);

        return ResponseEntity.ok(commentMap);
    }

    @GetMapping("/{feedId}/detail")
    public ResponseEntity<InfoResponseDto> viewComment(@PathVariable("feedId") String feedId, @RequestParam String userid) {
        return null;
    }

    @GetMapping("/search")
    public ResponseEntity<List<InfoResponseDto>> searchFeed(@RequestParam String keyword) {
        return null;
    }

}
