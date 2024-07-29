    // src/main/java/com/worq/worcation/domain/worcation/domain/Worcation.java
    package com.worq.worcation.domain.worcation.domain;

    import com.worq.worcation.domain.user.domain.User;
    import com.worq.worcation.domain.worcation.dto.WorcationRequestDto;
    import jakarta.persistence.*;
    import lombok.AllArgsConstructor;
    import lombok.Builder;
    import lombok.Data;
    import lombok.Getter;

    import java.util.Date;

    @Entity
    @Data
    @Builder
    @Getter
    @AllArgsConstructor

    public class Worcation {

        // Getters and Setters
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @OneToOne
        @JoinColumn(name = "user_id")
        private User user;

        private Date start;
        private Date end;
        private String sido;
        private String gugun;
        private String job;
        private String type;

        public Worcation() {
        }

        public void Update(WorcationRequestDto worcationRequestDto){
            if (worcationRequestDto.getStart() != null) {
                this.start = worcationRequestDto.getStart();
            }
            if (worcationRequestDto.getEnd() != null) {
                this.end = worcationRequestDto.getEnd();
            }
            if (worcationRequestDto.getSido() != null) {
                this.sido = worcationRequestDto.getSido();
            }
            if (worcationRequestDto.getGugun() != null) {
                this.gugun = worcationRequestDto.getGugun();
            }
            if (worcationRequestDto.getJob() != null) {
                this.job = worcationRequestDto.getJob();
            }
            if (worcationRequestDto.getType() != null) {
                this.type = worcationRequestDto.getType();
            }
        }
    }
