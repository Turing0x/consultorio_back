const WorkerQuerys = {

  // SELECT Querys
  getAll: `
    SELECT * FROM PersonalSalud p JOIN Doctor d ON p.regNum = d.regNum WHERE p.regNum = d.regNum;
    SELECT * FROM PersonalSalud p JOIN Nurse n ON p.regNum = n.regNum WHERE p.regNum = n.regNum;`,

  getAllByClinic: `
    SELECT * FROM PersonalSalud p JOIN Doctor d ON p.regNum = d.regNum 
      WHERE CAST(p.suConsultorio AS varchar(36)) = @clinicId;

    SELECT * FROM PersonalSalud p JOIN Nurse n ON p.regNum = n.regNum 
      WHERE CAST(p.suConsultorio AS varchar(36)) = @clinicId;`,
  
  getDoctorByCI: `
    SELECT * FROM PersonalSalud WHERE regMed = @regMed;
    SELECT * FROM Doctor WHERE regMed = @regMed;`,
  
  getNurseByCI: `
    SELECT * FROM PersonalSalud WHERE regMed = @regMed;
    SELECT * FROM Nurse WHERE regMed = @regMed;`,

  // INSERT Querys
  addNewWorker: `
    INSERT INTO PersonalSalud VALUES
      ( @regMed,
        @name,
        @address,
        @phoneNumber,
        @suConsultorio );`,

  addDoctor: `
    INSERT INTO Doctor VALUES
      ( @regMed,
        @anno_grad,
        @es_especialista );`,
  
  addNurse: `
    INSERT INTO Nurse VALUES
      ( @regMed,
        @anno_exp,
        @category );`,

  // UPDATE Querys
  updateWorker: `
    UPDATE PersonalSalud SET 
      name = @name, 
      address = @address, 
      phoneNumber = @phoneNumber,
      suConsultorio = @suConsultorio;`,

  updateDoctor: `
    UPDATE Doctor SET 
      regMed = @regMed, 
      anno_grad = @anno_grad, 
      es_especialista = @es_especialista;`,
    
  updateNurse: `
    UPDATE Nurse SET 
      regMed = @regMed, 
      anno_exp = @anno_exp, 
      category = @category;`,

  // DELETE Querys
  deleteDoctorByCI: `DELETE FROM PersonalSalud WHERE regMed = @regMed;
                      DELETE FROM Doctor WHERE regMed = @regMed;`,

  deleteNurseByCI: `DELETE FROM PersonalSalud WHERE regMed = @regMed;
                      DELETE FROM Nurse WHERE regMed = @regMed;`,

}

module.exports = WorkerQuerys