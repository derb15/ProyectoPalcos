package Controller;

import model.Box;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.BoxService;

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
