package com.wava.worcation.domain.channel.service;


import com.wava.worcation.common.jwt.TokenProvider;
import com.wava.worcation.common.response.ApiResponse;
import com.wava.worcation.domain.channel.domain.Channel;
import com.wava.worcation.domain.channel.dto.request.GroupChannelRequestDto;
import com.wava.worcation.domain.channel.dto.response.GroupChannelResponseDto;
import com.wava.worcation.domain.channel.repository.ChannelRepository;
import com.wava.worcation.domain.user.domain.User;
import com.wava.worcation.domain.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class GroupChannelServiceImpl implements GroupChannelService {

    private final ChannelRepository channelRepository;
    private final UserRepository userRepository;
    private final TokenProvider tokenProvider;




    /**
     *
     * @ 작성자   : user
     * @ 작성일   : 2024-08-03
     * @ 설명     :
     * @param groupChannelRequestDto
     * @param token
     * @return
     */
    @Override
    @Transactional
    public ResponseEntity<ApiResponse<GroupChannelResponseDto>> createGroupChannel(GroupChannelRequestDto groupChannelRequestDto, String token) {

        Authentication authentication = tokenProvider.getAuthentication(token);
        User userOpt  = userRepository.findByEmail(authentication.getName()).orElseThrow();

        Channel channel = Channel.builder()
                .user(userOpt)
                .channelDescription(groupChannelRequestDto.getDescription())
                .channelTitle(groupChannelRequestDto.getRoomTitle())
                .channelType("C001")    //C001 : 그룹 ,  C002 : 피드
                .channelSido(groupChannelRequestDto.getSido())
                .channelSigungu(groupChannelRequestDto.getGugun())
                .build();

         channelRepository.save(channel);

         GroupChannelResponseDto groupChannelResponseDto = new GroupChannelResponseDto();
         groupChannelResponseDto.setId(channel.getId());
         groupChannelResponseDto.setUserId(userOpt.getId());
         groupChannelResponseDto.setDescription(channel.getChannelDescription());
         groupChannelResponseDto.setRoomTitle(channel.getChannelTitle());
         groupChannelResponseDto.setSido(channel.getChannelSido());
         groupChannelResponseDto.setRoomTitle(channel.getChannelTitle());
         groupChannelResponseDto.setDescription(channel.getChannelDescription());


        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(groupChannelResponseDto));
    }

    @Override
    public ResponseEntity<ApiResponse<List<GroupChannelResponseDto>>> showAllGroupChannel() {
        List<Channel> channelList = channelRepository.findAll();


        //return ResponseEntity.status(HttpStatus.OK).body();

        return null;
    }
}
