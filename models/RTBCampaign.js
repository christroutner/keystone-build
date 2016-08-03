/**
 * RTB Form - Campaign Model
 * ===========
 * This model mimics the CAMPAIGNS
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var RTBCampaign = new keystone.List('RTBCampaign', {
        map: { name: 'advertiserName' },
	defaultSort: '-advertiserName'
});

RTBCampaign.add({
  advertiserName: { type: String },
  trackingNumber: { type: String },
  budget: { type: Number },
  impressionGoal: { type: Number },
  order: { type: String},             //GUID for parent order.
  tactics: { type: String},           //CSV string of children GUIDs.
  tacticCnt: { type: Number }         //Number of tactic contained in this campaign.

});


RTBCampaign.defaultColumns = 'advertiserName';
RTBCampaign.register();

