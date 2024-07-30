package com.worq.worcation.domain.channel.info.repository;

import com.worq.worcation.domain.channel.info.domain.Channel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChannelRepository extends JpaRepository<Channel, Long> {
}
