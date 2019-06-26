var db = require('../util/mysql_connection')
const { get_accounts_per_user, get_investment_by_id } = require('../models')
//const { get_investment_by_id  } = require('../models').investment_model

/**
 * Returns all account investments
 */
module.exports = async function accountInvestments_api(req, res) {
    console,log("username: ", req.params.username)
    let username = req.params.username;
    try{
        let investments = await get_all_investments(username);
	    res.send(investments)
 	}
 	catch(err){
        console.log(err)
 		res.status(400).send({msg: 'Failed getting all account investments', error:err.message});	
 	}
};

async function get_all_investments(username){
    console.log("Getting all account investments for ", username);
    let accounts = get_accounts_per_user(username);
    let investment = get_investment_by_id(accounts.investment_id);
    let investment_details = [];

    for (i = 0; i < accounts.length; i ++){

        investment_details.push({
            investment_name: investment.investment_name,
            currency: investment.currency,
        });
        console.log(investment_details);
    }
    return investment_details;
}
