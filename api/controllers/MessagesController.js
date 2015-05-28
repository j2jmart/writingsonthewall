/**
 * MessagesController
 *
 * @description :: Server-side logic for managing Messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index:function(req, res) {
		Messages.find() .then (function(users)
			{
				res.json(users)
			}) 
	}
};

