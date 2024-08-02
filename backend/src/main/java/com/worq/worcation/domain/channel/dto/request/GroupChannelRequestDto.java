package com.worq.worcation.domain.channel.dto.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class GroupChannelRequestDto {

    Long id;
    Long userId;
    String gugun;
    String roomTitle;
    String description;

}
