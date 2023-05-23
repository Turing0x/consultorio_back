const WorkerQuerys = {

  // SELECT Querys
  getAll: 'SELECT * FROM PersonalSalud;',
  getById: 'SELECT * FROM PersonalSalud WHERE regMed = @regMed',

  // INSERT Querys
  addNewWorker: `INSERT INTO PersonalSalud VALUES
    ( @regMed, @name, @address, @phoneNumber, @annoGrad, @esEspecialista, @annoExp,
      @categoria, @esMedico, @esEnfermera, @suConsultorio )`,

  // UPDATE Querys
  updateWorker: `
    UPDATE PersonalSalud SET 
      name = @name, address = @address, phoneNumber = @phoneNumber, annoGrad = @annoGrad, 
        esEspecialista = @esEspecialista, annoExp = @annoExp, categoria = @categoria, 
          esMedico = @esMedico, esEnfermera = @esEnfermera, suConsultorio = @suConsultorio`,

  // DELETE Querys
  deleteWorkerByCI: 'DELETE FROM PersonalSalud WHERE regMed = @regMed'

}

module.exports = WorkerQuerys