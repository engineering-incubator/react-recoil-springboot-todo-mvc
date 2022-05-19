package com.example.backend.common.exception;

import com.example.backend.common.dto.WebResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ControllerAdviceException {

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<WebResponseDto> notFoundExceptionHandler (NotFoundException exception) {
		return new ResponseEntity(WebResponseDto.failure(exception.getMessage(), HttpStatus.NOT_FOUND),
			HttpStatus.NOT_FOUND);
	}
}
