import { Profesor } from "./clases/Profesor";
import { Student } from "./clases/Student";

export const runObserver = () => {
  const profesor: Profesor = new Profesor("Alejandro Sanabria");
  
  const alumno1 = new Student("Ana");
  const alumno2 = new Student("Luis");
  
  profesor.subscribe(alumno1);
  profesor.subscribe(alumno2);
  
  profesor.publish("TP1", "Algoritmos", "viernes 18:00");

  profesor.unsubscribe(alumno2);

  profesor.publish("TP2", "Patrones", "martes 18:00");
}