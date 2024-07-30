package com.worq.worcation.domain.channel.info.repository;

import com.worq.worcation.domain.channel.info.domain.Feed;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedReository extends JpaRepository<Feed, Long> {
}
