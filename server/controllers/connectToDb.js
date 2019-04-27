const { Pool } = require('pg');
const connectionString = 'postgres://drcropgq:uTKPGV_PGuQgG-Bskbm51J-PZ-rGmNEm@isilo.db.elephantsql.com:5432/drcropgq'


const connectToDb = () => {
  return new Pool({
    connectionString,
    max: 1
  });
}

module.export = connectToDb;