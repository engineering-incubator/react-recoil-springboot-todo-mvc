package com.example.backend.todo.service;

import com.example.backend.common.exception.NotFoundException;
import com.example.backend.todo.dto.CreateTodoDto;
import com.example.backend.todo.repository.TodoRepository;
import com.example.backend.todo.dto.UpdateTodoDto;
import com.example.backend.todo.entity.Todo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
	private final TodoRepository todoRepository;

	public List<Todo> getTodos() {
		return todoRepository.findAll();
	}
	public Todo createTodo(CreateTodoDto dto) {
		Todo todo = Todo.builder()
			.text(dto.getText())
			.isDone(dto.getIsDone())
			.build();
		return todoRepository.save(todo);
	}

	public void deleteTodo(Long id) {
		todoRepository.findById(id).orElseThrow(NotFoundException::new);
		todoRepository.deleteById(id);
	}

	public Todo updateTodo(Long id, UpdateTodoDto dto) {
		todoRepository.findById(id).orElseThrow(NotFoundException::new);

		Todo updatedTodo = Todo.builder()
			.text(dto.getText())
			.isDone(dto.getIsDone())
			.build();

		return todoRepository.save(updatedTodo);
	}


}
