package com.example.backend.todo.dto;

import lombok.Getter;

@Getter
public class CreateTodoDto {
	private String text;
	private Boolean isDone;
}
