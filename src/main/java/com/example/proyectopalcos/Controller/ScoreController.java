package com.example.proyectopalcos.Controller;


import com.example.proyectopalcos.model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.proyectopalcos.service.ScoreService;

import java.util.List;

@RestController
@RequestMapping("/api/Score")
public class ScoreController {
    @Autowired
    private ScoreService scoreService;
    @GetMapping("/all")
    public List<Score> getAll(){
        return scoreService.getAll();
    }
    @PostMapping("/save")
    public Score save(@RequestBody Score s){
        return scoreService.save(s);
    }
}
