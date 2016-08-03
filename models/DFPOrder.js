/**
 * DFP Form - Order Model
 * ===========
 * This model covers the ORDERS
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var DFPOrder = new keystone.List('DFPOrder', {
  map: { name: 'timeStamp' },
	defaultSort: '-timeStamp'
});

DFPOrder.add({
  formUser: { type: String }, //name
  phoneNumber: { type: String },
  emailAddress: { type: String },
  campaigns: { type: String }, //CSV of campaign GUIDs
  submissionStatus: { type: String },
  timeStamp: {type: String },
  orderNumberVD: {type: String}
});


DFPOrder.defaultColumns = 'timeStamp';
DFPOrder.register();

