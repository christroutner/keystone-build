/**
 * DFP Form - Campaign Model
 * ===========
 * This model mimics the CAMPAIGNS
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var DFPCampaign = new keystone.List('DFPCampaign', {
  map: { name: 'advertiserName' },
	defaultSort: '-advertiserName'
});

DFPCampaign.add({
  advertiserName: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  rush: { type: String },
  rushReason: { type: String },
  order: { type: String},             //GUID for parent order.
  tactics: { type: String},           //CSV string of children GUIDs.
  tacticCnt: { type: Number },        //Number of tactic contained in this campaign.
  orderType: { type: String },        //Impression or Sponsorship
  pngProperties: { type: String },    //CSV list of PNG Properties
  quantity: { type: Number },         //Quantity of impressions, or Goal for Sponsorhip
  rate: { type: String },              //Rate for Impressions or Sponsorships
  adPlacement: {type: String},
  adPlacementIndex: { type: Number }

});


DFPCampaign.defaultColumns = 'advertiserName';
DFPCampaign.register();

