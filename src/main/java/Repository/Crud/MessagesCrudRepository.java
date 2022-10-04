package Repository.Crud;

import model.Messages;
import org.springframework.data.repository.CrudRepository;

public interface MessagesCrudRepository extends CrudRepository<Messages, Integer> {

}
