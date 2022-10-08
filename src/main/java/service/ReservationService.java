package service;

import Repository.Crud.ReservationRepository;
import model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }
    public Optional<Reservation> getReservation(int id){
        return reservationRepository.getReservation(id);
    }
    public Reservation save(Reservation r){
        if(r.getId()==null){
            return reservationRepository.save(r);
        }else{
            Optional<Reservation> e=reservationRepository.getReservation(r.getId());
            if(e.isPresent()){
                return r;
            }else{
                return reservationRepository.save(r);
            }
        }
    }
    public Reservation update(Reservation r){
        if(r.getId()!=null){
            Optional<Reservation> q = reservationRepository.getReservation(r.getId());
            if(q.isPresent()){
                if(r.getStartDate()!=null){
                    q.get().setStartDate(r.getStartDate());
                }
                if (r.getEndDate()!=null){
                    q.get().setEndDate(r.getEndDate());
                }
                if (r.getStatus()!=null){
                    q.get().setStatus(r.getStatus());
                }
                reservationRepository.save(q.get());
                return q.get();
            }else{
                return r;
            }
        }else{
            return r;
        }
    }
    public boolean delete(int id){
        boolean flag=false;
        Optional<Reservation>r=reservationRepository.getReservation(id);
        if(r.isPresent()){
            reservationRepository.delete(r.get());
            flag=true;
        }
        return flag;
    }
}
