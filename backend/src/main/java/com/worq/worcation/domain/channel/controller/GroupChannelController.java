package com.worq.worcation.domain.channel.controller;

import com.worq.worcation.common.response.ApiResponse;
import com.worq.worcation.domain.channel.dto.request.GroupChannelRequestDto;
import com.worq.worcation.domain.channel.dto.response.GroupChannelResponseDto;
import com.worq.worcation.domain.channel.service.GroupChannelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/channel")
@RequiredArgsConstructor
public class GroupChannelController {


    public final GroupChannelService groupChannelServcice ;




    /**
     *
     * @ 작성자   : 이병수
     * @ 작성일   : 2024-08-02
     * @ 설명     : 그룹채널 생성

     * @return
     */
    @PostMapping("/create")
    public ResponseEntity<ApiResponse<GroupChannelResponseDto>> createGroupChannel (@RequestBody GroupChannelRequestDto groupChannelRequestDto) {



        return ResponseEntity.ok().body(null);
    }


}
