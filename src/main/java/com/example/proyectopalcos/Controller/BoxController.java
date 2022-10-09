package com.example.proyectopalcos.Controller;

import com.example.proyectopalcos.model.Box;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.proyectopalcos.service.BoxService;

import java.util.List;

@RestController
@RequestMapping("/api/Box")
public class BoxController {
    @Autowired
    private BoxService boxService;
    @GetMapping("/all")
    public List<Box> getAll(){
        return boxService.getAll();
    }
    @PostMapping("/save")
    public Box save(@RequestBody Box b){
        return boxService.save(b);
    }
}
