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


import WorkplaceLevel2 from '../api/Pic/Workplace/HighRisk/close/186.85level2_16+.jpg';
import WorkplaceLevel3 from '../api/Pic/Workplace/HighRisk/distant/251.85occupational_first_aid_level_3_with_bvm_-_opa_-_suction_unit_set11+.jpg';

import BasicKit from '../api/Pic/Workplace/Low/close/43.75basic2-10.jpg';


const firstAidKits = [
     {
          Name: "Workplace CPR Kit",
          Content: "For BC Workplace Safety",
          Type: ["Workplace", "Low", [0, 1], "0-20 minutes"],
          Pic: CPRKit,
          Key1: 12
          , Key2: 1,

     },
     {
          Name: "Personal Kit",
          Content: "Personal kit is a perosonalized kit",
          Type: ["Workplace", "Low", [0, 1], "0-20 minutes"],
          Pic: PersonKit,
          Key1: 16.25, Key2: 2,

     },
     {
          Name: "Workplace Level 1 Kit with Mental Case",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Low", [11, 50], "0-20 minutes"],
          Pic: WorkplaceLevel1M,
          Key1: 97.00, Key2: 3,

     },
     {
          Name: "Workplace Level 1 Kit with Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Low", [11, 50], "0-20 minutes"],
          Pic: WorkplaceLevel1WB,
          Key1: 93.55, Key2: 3,

     },
     {
          Name: "Workplace Level 1 Kit without Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Low", [11, 50], "0-20 minutes"],
          Pic: WorkplaceLevel1WOB,
          Key1: 70, Key2: 4

     },
     {
          Name: "Workplace Basic Kit",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Low", [2, 10], "0-20 minutes"],
          Pic: BasicKit,
          Key1: 43.75, Key2: 5

     },
     {
          Name: "Workplace Level 2 Kit",
          Content: "For level 2 BC Workplace Safety",
          Type: ["Workplace", "Low", [51, 100], "0-20 minutes"],
          Pic: WorkplaceLevel2,
          Key1: 186.85, Key2: 6

     },



     {
          Name: "Workplace Level 1 Kit with Mental Case",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Low", [6, 50], "20+ minutes"],
          Pic: WorkplaceLevel1M,
          Key1: 97.00, Key2: 7

     },
     {
          Name: "Workplace Level 1 Kit with Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Low", [6, 50], "20+ minutes"],
          Pic: WorkplaceLevel1WB,
          Key1: 93.55, Key2: 8

     },
     {
          Name: "Workplace Level 1 Kit without Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Low", [6, 50], "20+ minutes"],
          Pic: WorkplaceLevel1WOB,
          Key1: 70, Key2: 9

     },
     {
          Name: "Workplace Basic Kit",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Low", [2, 5], "20+ minutes"],
          Pic: BasicKit,
          Key1: 43.75, Key2: 10

     },
     {
          Name: "Workplace Level 3 Kit",
          Content: "For level 3 BC Workplace Safety",
          Type: ["Workplace", "Low", [51, 100], "20+ minutes"],
          Pic: WorkplaceLevel3,
          Key1: 251.85, Key2: 11
     },







     {
          Name: "Personal Kit",
          Content: "Personal kit is a perosonalized kit",
          Type: ["Workplace", "Medium", [0, 1], "0-20 minutes"],
          Pic: PersonKit,
          Key1: 16.25, Key2: 12

     },

     {
          Name: "Workplace Level 1 Kit with Mental Case",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Medium", [6, 25], "0-20 minutes"],
          Pic: WorkplaceLevel1M,
          Key1: 97.00, Key2: 13

     },
     {
          Name: "Workplace Level 1 Kit with Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Medium", [6, 25], "0-20 minutes"],
          Pic: WorkplaceLevel1WB,
          Key1: 93.55, Key2: 14

     },
     {
          Name: "Workplace Level 1 Kit without Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Medium", [6, 25], "0-20 minutes"],
          Pic: WorkplaceLevel1WOB,
          Key1: 70, Key2: 15

     },
     {
          Name: "Workplace Basic Kit",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Medium", [2, 5], "0-20 minutes"],
          Pic: BasicKit,
          Key1: 43.75, Key2: 16

     },
     {
          Name: "Workplace Level 2 Kit",
          Content: "For level 2 BC Workplace Safety",
          Type: ["Workplace", "Medium", [26, 100], "0-20 minutes"],
          Pic: WorkplaceLevel2,
          Key1: 186.85, Key2: 17

     },




     {
          Name: "Personal Kit",
          Content: "Personal kit is a perosonalized kit",
          Type: ["Workplace", "Medium", [0, 1], "20+ minutes"],
          Pic: PersonKit,
          Key1: 16.25, Key2: 18

     },

     {
          Name: "Workplace Level 1 Kit with Mental Case",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Medium", [2, 15], "20+ minutes"],
          Pic: WorkplaceLevel1M,
          Key1: 97.00, Key2: 19

     },
     {
          Name: "Workplace Level 1 Kit with Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Medium", [2, 15], "20+ minutes"],
          Pic: WorkplaceLevel1WB,
          Key1: 93.55, Key2: 20

     },
     {
          Name: "Workplace Level 1 Kit without Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Medium", [2, 15], "20+ minutes"],
          Pic: WorkplaceLevel1WOB,
          Key1: 70, Key2: 21

     },
     {
          Name: "Workplace Basic Kit",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "Medium", [0, 1], "20+ minutes"],
          Pic: BasicKit,
          Key1: 43.75, Key2: 22

     },
     {
          Name: "Workplace Level 3 Kit",
          Content: "For level 3 BC Workplace Safety",
          Type: ["Workplace", "Medium", [16, 100], "20+ minutes"],
          Pic: WorkplaceLevel3,
          Key1: 251.85, Key2: 23
     },








     {
          Name: "Personal Kit",
          Content: "Personal kit is a perosonalized kit",
          Type: ["Workplace", "High", [0, 1], "0-20 minutes"],
          Pic: PersonKit,
          Key1: 16.25, Key2: 24
     },

     {
          Name: "Workplace Level 1 Kit with Mental Case",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "High", [2, 15], "0-20 minutes"],
          Pic: WorkplaceLevel1M,
          Key1: 97.00, Key2: 25

     },
     {
          Name: "Workplace Level 1 Kit with Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "High", [2, 15], "0-20 minutes"],
          Pic: WorkplaceLevel1WB,
          Key1: 93.55, Key2: 26

     },
     {
          Name: "Workplace Level 1 Kit without Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "High", [2, 15], "0-20 minutes"],
          Pic: WorkplaceLevel1WOB,
          Key1: 70, Key2: 27

     },
     {
          Name: "Workplace Basic Kit",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "High", [0, 1], "0-20 minutes"],
          Pic: BasicKit,
          Key1: 43.75, Key2: 28

     },
     {
          Name: "Workplace Level 2 Kit",
          Content: "For level 2 BC Workplace Safety",
          Type: ["Workplace", "High", [16, 100], "0-20 minutes"],
          Pic: WorkplaceLevel2,
          Key1: 186.85, Key2: 29

     },






     {
          Name: "Personal Kit",
          Content: "Personal kit is a perosonalized kit",
          Type: ["Workplace", "High", [0, 1], "20+ minutes"],
          Pic: PersonKit,
          Key1: 16.25, Key2: 30

     },

     {
          Name: "Workplace Level 1 Kit with Mental Case",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "High", [2, 10], "20+ minutes"],
          Pic: WorkplaceLevel1M,
          Key1: 97.00, Key2: 31

     },
     {
          Name: "Workplace Level 1 Kit with Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "High", [2, 10], "20+ minutes"],
          Pic: WorkplaceLevel1WB,
          Key1: 93.55, Key2: 32

     },
     {
          Name: "Workplace Level 1 Kit without Blanket",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "High", [2, 10], "20+ minutes"],
          Pic: WorkplaceLevel1WOB,
          Key1: 70, Key2: 33

     },
     {
          Name: "Workplace Basic Kit",
          Content: "For level 1 BC Workplace Safety",
          Type: ["Workplace", "High", [0, 1], "20+ minutes"],
          Pic: BasicKit,
          Key1: 43.75, Key2: 34

     },
     {
          Name: "Workplace Level 3 Kit",
          Content: "For level 3 BC Workplace Safety",
          Type: ["Workplace", "High", [11, 100], "20+ minutes"],
          Pic: WorkplaceLevel3,
          Key1: 251.85, Key2: 35
     },






];

export default firstAidKits;
