/**
 * RTB Form - Order Model
 * ===========
 * This model covers the ORDERS
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var RTBOrder = new keystone.List('RTBOrder', {
        map: { name: 'publication' },
	defaultSort: '-publication'
});

RTBOrder.add({
  publication: { type: String },
  publication_index: { type: Number },
  formUser: { type: String }, //name
  phoneNumber: { type: String },
  emailAddress: { type: String },
  campaigns: { type: String }, //CSV of campaign GUIDs
  submissionStatus: { type: String },
  timeStamp: {type: String }
});


RTBOrder.defaultColumns = 'publication';
RTBOrder.register();

