import CompactKit from '../api/Pic/5.95Compact.jpg';
import PersonKit from '../api/Pic/16.25Personal.jpg';
import CPRKit from '../api/Pic/_12CPRresponder.jpg';
import _72HrEhancedKit from '../api/Pic/45ENhanced72h.jpg';
import _72HrBackpack from '../api/Pic/76.95backpack.jpg';
import Delux from '../api/Pic/60.95Deluxe.jpg';
import HomeVehicle from '../api/Pic/25Homevehicle.jpg';
import EssentialKit from '../api/Pic/12essentialKit.jpg';
import SportsKit from '../api/Pic/29.92Sports.jpg';
import Addon from '../api/Pic/16.75addon.jpg';
import Faceshield from '../api/Pic/4.75face-shild-cop.jpg';
import Family from '../api/Pic/40.95Family.jpg';

import Vehiclewithtool from '../api/Pic/47vehiclewtool.jpg';
import Vehiclkit from '../api/Pic/29vehicle.jpg';

import WorkplaceLevel1WB from '../api/Pic/Workplace/HighRisk/close/93.55occupational_first_2-15.jpg';
import WorkplaceLevel1WOB from '../api/Pic/Workplace/HighRisk/close/70occupational_first_aid_level_1_first_aid_kit_without_blankets2-15.jpg';
import WorkplaceLevel1M from '../api/Pic/Workplace/HighRisk/close/97level_1_first_aid_kit_with_metal_case-2-15.jpg';


import WorkplaceLevel2 from '../api/Pic/Workplace/HighRisk/close/186.85level2_16.jpg';
import WorkplaceLevel3 from '../api/Pic/Workplace/HighRisk/distant/251.85occupational_first_aid_level_3_with_bvm_-_opa_-_suction_unit_set11.jpg';

import BasicKit from '../api/Pic/Workplace/Low/close/43.75basic2-10.jpg';


const firstAidKits = [
  {
      Name: "Compact Kit",
      Content:"Compact Kit is a portable Kit perfect to carry around",
      Type: ["Personal","First Aid Treament",[1,3],5.95],
      Pic: CompactKit,
      Key1:5.95
     
  },
  {
      Name: "Personal Kit",
      Content:"Personal kit is a perosonalized kit",
      Type: ["Personal", "First Aid Treament",[1,5],16.25],
      Pic: PersonKit,
           Key1:16.25,Key2: 1
      
  },
   {
      Name: "CPR Kit",
      Content:"An upgrade from Compact Kit",
      Type: ["Personal", "First Aid Treament",[1,3],12],
      Pic: CPRKit,
           Key1:10.00,Key2: 36
      
  },
  {
      Name: "Family Kit",
      Content:"Perfect Kit for a family to deal with any injuries",
      Type: ["Personal", "First Aid Treament",[1,6],40.95],
      Pic: Family,
           Key1:40.95,Key2: 37
      
  },
  {
      Name: "Essential Kit",
      Content:"Essential Kit is a portable Kit perfect to carry around",
      Type:[ "Personal","Disaster Preparedness",[1,3],12],
      Pic: EssentialKit,
           Key1:12.00,Key2: 38
      
  },
    
  {
      Name: "Workplace Level 3 Kit",
      Content:"For level 3 BC Workplace Safety",
      Type:["Workplace","High",[11,100],"20+ minutes"],
      Pic: WorkplaceLevel3,
           Key1:251.85,Key2: 39
      
  },
  {
      Name: "Workplace Level 1 Kit without Blanket",
      Content:"For level 1 BC Workplace Safety",
      Type:["Workplace","High",[2,15],"0-20 minutes"],
      Pic: WorkplaceLevel1WOB,
           Key1:70.00,Key2: 40
      
  },
   {
      Name: "72H Enhanced Kit",
      Content:"72H Backpack will preapre you for any situation",
      Type: ["Personal", "Disaster Preparedness",[1,6],45],
      Pic: _72HrEhancedKit,
           Key1:45.00,Key2: 41
      
  },
   {
      Name: "72H Backpack",
      Content:"Essential kit is perfect for on-the-go situation",
      Type: ["Personal", "Disaster Preparedness",[1,10],76.95],
      Pic: _72HrBackpack,
           Key1:76.95,Key2: 42
      
  },
  
  {
      Name: "Workplace Level 1 Kit with Blanket",
      Content:"For level 1 BC Workplace Safety",
      Type:["Workplace","High",[2,15],"0-20 minutes"],
      Pic: WorkplaceLevel1WB,
           Key1:93.55,Key2: 43
      
  },
  {
      Name: "Delux Kit",
      Content:"Delux Kit is a portable Kit perfect to for family or just self",
      Type:[ "Personal","First Aid Treament", [1,7],60.95],
      Pic: Delux,
           Key1:60.95,Key2: 44
      
  },
  {
      Name: "Home & Vehicle Kit",
      Content:"Home & Vehicle Kit is an ideal Kit perfect for household or on the car",
      Type:[ "Personal","First Aid Treament",[1,7],25],
      Pic: HomeVehicle,
           Key1:25.00,Key2: 45
      
  },
{
      Name: " Workplace Level 2 Kit",
      Content:"For level 2 BC Workplace Safety",
      Type:["Workplace","High",[2,100],"0-20 minutes"],
      Pic: WorkplaceLevel2,
           Key1:186.85,Key2: 46
      
  },
  
   {
      Name: "Sports Kit",
      Content:"Sports Kit is a portable Kit perfect to carry around",
      Type:[ "Personal","First Aid Treament",[1,10],29.92],
      Pic: SportsKit,
      Key1:29.92,Key2: 47
      
  },   
  {
      Name: "Vehicle Kit",
      Content:"Sports Kit is a portable Kit perfect to carry around",
      Type:[ "Personal","First Aid Treament",[1,10],29],
      Pic: Vehiclkit,
      Key1:29.00,Key2: 48
      
  },


    {
      Name: "Survical Kit - Add On",
      Content:"Add on comes with water, food and foil Blanket",
      Type:[ "Personal","Disaster Preparedness",[1,10],16.75],
      Pic: Addon,
           Key1:16.75,Key2: 49
      
  },

  {
      Name: "Vehicle Kit with Auto Safety Tool",
      Content:"Upgrade of the Vehicle Tool",
      Type:[ "Personal","First Aid Treament",[1,10],47],
      Pic: Vehiclewithtool,
           Key1:9.00,Key2: 50
      
  },
  {
      Name: "CPR Face Shield Kit",
      Content:"Portbale CPR Faceshield Kit",
      Type:[ "Personal","First Aid Treament",[1,3],4.75],
      Pic: Faceshield,
           Key1:4.75,Key2: 51
      
  },



  {
      Name: "Workplace Level 1 Kit with Mental Case",
      Content:"For level 1 BC Workplace Safety",
      Type:["Workplace","High",[2,15],"0-20 minutes"],
      Pic: WorkplaceLevel1M,
           Key1:97.00,Key2: 52
      
  },

     {
      Name: "Workplace Basic Kit",
      Content:"For BC Workplace Safety",
      Type:["Workplace","Low",[2,10],"0-20 minutes"],
      Pic: BasicKit,
           Key1:43.75,Key2: 53
      
  },
 {
      Name: "Workplace CPR Kit",
      Content:"For BC Workplace Safety",
      Type:["Workplace","Low",[2,10],"0-20 minutes"],
      Pic: CPRKit,
           Key1:12,Key2: 54
      
  },


];

export default firstAidKits;
