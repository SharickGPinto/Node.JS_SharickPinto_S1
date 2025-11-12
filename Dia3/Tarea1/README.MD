## DIAGRAMA DE CLASES
```
classDiagram

  class Hospital{
    +idHospital: String
    +nombre: String
    +direccion: String
  }

  class Persona{
    +idPersona: Number
    +nombre: String
    +direccion: String
  }

  class Paciente{
    +idPaciente: Number
    +edad: Number          
    +fechaIngreso: Number  
    +nombre: String
  }

  class Personal{
    +idPersonal: String
    +titulo: String
    +nombre: String
    +salario: Number
  }

  class Doctor{
    +titulo:String
    +idDoctor: String      
    +nombre: String
    +rango: String
  }

  class Departamento{
    +idDepartamento: String
    +nombre: String
  }

  class Pabellon{
    +idPabellon: String
    +nombre: String
    +capacidad: Number    
    +especialidad: String  
  }

  Persona <|-- Paciente
  Persona <|-- Personal
  Persona <|-- Doctor

  Hospital *-- "1..*" Departamento
  Hospital *-- "1..*" Pabellon
  Departamento "1" o-- "0..*" Personal
  Pabellon "1" o-- "0..*" Paciente
  Doctor "0..*" -- "0..*" Paciente : atiende
```