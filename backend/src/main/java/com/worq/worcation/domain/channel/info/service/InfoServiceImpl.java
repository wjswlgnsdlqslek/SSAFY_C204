package com.worq.worcation.domain.channel.info.service;

import com.worq.worcation.domain.channel.info.domain.Feed;
import com.worq.worcation.domain.channel.info.domain.FeedComment;
import com.worq.worcation.domain.channel.info.dto.InfoRequestDto;
import com.worq.worcation.domain.channel.info.repository.FeedCommentRepository;
import com.worq.worcation.domain.channel.info.repository.FeedReository;
import com.worq.worcation.domain.user.domain.User;
import com.worq.worcation.domain.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
public class InfoServiceImpl implements InfoService {

    private final FeedCommentRepository feedCommentRepository;
    private final UserRepository userRepository;
    private final FeedReository feedReository;

    @Override
    public List<String> CreateFeed(InfoRequestDto requestDto) {
        return List.of();
    }

    @Override
    public Map<String, Object> createComment(Long userid, Long feedid, String commentContext) {

        Optional<Feed> feedOp = feedReository.findById(feedid);
        Optional<User> userOp = userRepository.findById(userid);

        if (feedOp.isPresent() && userOp.isPresent()) {
            Feed feed = feedOp.get();
            User user = userOp.get();


        FeedComment feedComment = FeedComment.builder()
                .feed(feed)
                .user(user)
                .comment(commentContext)
                .build();

        feedCommentRepository.save(feedComment);

        Map<String, Object> response = new HashMap<>();

        response.put("commentId", feedComment.getId());
        response.put("feedId", feedid);
        response.put("commentContext", commentContext);
        response.put("userid", userid);

        return response;
    }
        return null;
    }
}
