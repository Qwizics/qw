const models = [
  require('./tenant').default,
  require('./auditLog').default,  
  require('./settings').default,
  require('./user').default,
  require('./course').default,
  require('./courseRegistration').default,
  require('./exam').default,
  require('./courseLecture').default,
  require('./coursePayment').default,
  require('./examQuestion').default,
  require('./examAnswer').default,
  require('./examResult').default,
  require('./answerResult').default,
  require('./courseResults').default,  
];

export default function init(database) {
  for (let model of models) {
    model(database);
  }

  return database;
}

export async function createCollections(database) {
  for (let model of models) {
    await model(database).createCollection();
  }

  return database;
}
