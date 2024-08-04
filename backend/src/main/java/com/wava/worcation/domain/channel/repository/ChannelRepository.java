package com.wava.worcation.domain.channel.repository;

import com.wava.worcation.domain.channel.domain.Channel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface ChannelRepository extends JpaRepository<Channel, Long> {
    Optional<Channel> findById(Long id);
}
