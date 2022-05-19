package com.example.backend.todo.controller;

import com.example.backend.common.dto.WebResponseDto;
import com.example.backend.todo.dto.CreateTodoDto;
import com.example.backend.todo.entity.Todo;
import com.example.backend.todo.service.TodoService;
import com.example.backend.todo.dto.UpdateTodoDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/todos")
public class TodoController {

	private final TodoService todoService;

	@GetMapping
	public WebResponseDto<List<Todo>> getTodos() {
		return WebResponseDto.success(todoService.getTodos());
	}

	@PostMapping
	public WebResponseDto<Todo> createTodo(@RequestBody CreateTodoDto dto) {
		return WebResponseDto.success(todoService.createTodo(dto));
	}

	@DeleteMapping("{id}")
	public WebResponseDto<Object> deleteTodo(@PathVariable Long id) {
		todoService.deleteTodo(id);
		return WebResponseDto.success(null);
	}

	@PutMapping("{id}")
	public WebResponseDto<Todo> updateTodo(@PathVariable Long id, @RequestBody UpdateTodoDto dto) {
		return WebResponseDto.success(todoService.updateTodo(id, dto));
	}
}
