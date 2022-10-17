package com.example.proyectopalcos.Repository.Crud;

import com.example.proyectopalcos.model.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {

    /*Reporte 1
    * SELECT * FROM Reservation WHERE startDate AFTER fechaA AND devolutionDate BEFORE  fechaB */
    public List<Reservation> findAllByStartDateAfterAndDevolutionDateBefore(Date fechaA, Date fechaB);

    /*Reporte 2
     * SELECT * FROM Reservation WHERE status = "valorQueNecesito"; */
    public List<Reservation> findAllByStatus(String status);

    /*Reporte 3
     * SELECT COUNT(client), client FROM Reservation GROUP BY client ORDER BY COUNT(client) DESC; */
    @Query("SELECT c.client, COUNT(c.client) FROM Reservation AS c GROUP BY c.client ORDER BY COUNT(c.client) DESC")
    public List<Object[]> getTotalReservationsByClient();



    /* SELECT * FROM Reservation WHERE status = created AND id = 10; */
    public List<Reservation> findAllByStatusAndIdReservation(String status, int id);
}
