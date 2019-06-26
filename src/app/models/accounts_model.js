var db = require('../util/mysql_connection');

async function get_account_by_id(account_id){
  const [rows, fields] = await db.connection.query("SELECT * FROM account WHERE account_id = ?",[account_id]);
  return rows[0];
}

async function get_account_by_investment(username,investment_id){
  const [rows, fields] = await db.connection.query("SELECT * FROM account WHERE username = ? AND investment_id = ?",[username,investment_id]);
  return rows[0];
}

async function get_accounts_by_investment(investment_id){
  const [rows, fields] = await db.connection.query("SELECT * FROM account WHERE investment_id = ?",[investment_id]);
  return rows;
}

async function get_investment_account(investment_id){
  const [rows, fields] = await db.connection.query("SELECT * FROM account WHERE investment_id = ? and account_level = ?",[investment_id,1]);
  return rows[0];
}

async function get_accounts_per_user(username){
  const [accounts, fields] = await db.connection.query("SELECT * FROM account WHERE username = ?",[username]);
  return accounts;
}

async function get_all_accounts(investment_id){
  const [accounts, fields] = await db.connection.query("SELECT * FROM account WHERE investment_id = ? AND account_level!= 1",[investment_id]);
  return accounts;
}

async function get_investments_by_account(username){
    const [accounts, fields] = await db.connection.query("SELECT investment_id FROM account WHERE username = ?",[username]);
    return accounts;
  }

module.exports = {
  get_account_by_id,
  get_account_by_investment,
  get_accounts_by_investment,
  get_investment_account,
  get_accounts_per_user,
  get_all_accounts,
  get_investments_by_account
};
