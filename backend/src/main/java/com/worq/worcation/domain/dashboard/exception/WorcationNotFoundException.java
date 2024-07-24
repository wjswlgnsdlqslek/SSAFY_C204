// src/main/java/com/worq/worcation/domain/dashboard/exception/WorcationNotFoundException.java
package com.worq.worcation.domain.dashboard.exception;

public class WorcationNotFoundException extends RuntimeException {
    public WorcationNotFoundException(String message) {
        super(message);
    }
}
