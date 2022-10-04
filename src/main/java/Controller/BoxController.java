package Controller;

import Repository.Crud.BoxRepository;
import model.Box;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/Box")
public class BoxController {
    @Autowired
    //se crea la instancia de servicio!!!
    BoxRepository boxRepository;
    @GetMapping("/all")
    @PostMapping("/save")
    public List<Box> getBox(){
        return BoxRepository.getAll();
    }
}
