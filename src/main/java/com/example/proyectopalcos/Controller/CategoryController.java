package com.example.proyectopalcos.Controller;

import com.example.proyectopalcos.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.proyectopalcos.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping("/api/Category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/all")
    public List<Category> getAll(){
        return categoryService.getAll();
    }
    @PostMapping("/save")
    public Category save(@RequestBody Category c){
        return categoryService.save(c);
    }
}
