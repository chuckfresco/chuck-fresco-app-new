import React from "react";
import { Button } from '@material-ui/core';
import './styles.css';
import { useState } from "react";

const TableComponent = ({ title, headers, data, colWidths }) => (
  <div style={{ marginBottom: "20px", overflowX: "auto" }}>
    <h3>{title}</h3>
    <div
      style={{
        maxWidth: "1000px",
        width: "100%",
        marginLeft: "0",
        marginRight: "auto",
        display: "block",
      }}
    >
      <table
        border="1"
        cellPadding="2"
        cellSpacing="0"
        style={{
          width: "100%",
          maxWidth: "100%",
          borderCollapse: "collapse",
        }}
      >
        <colgroup>
          {colWidths.map((width, idx) => (
            <col key={idx} style={{ width }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} style={{ background: "#ddd", padding: "5px", color: "black", height: "20px" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, idx) => (
                <td key={idx} style={{ padding: "5px", height: "20px" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


const MonsterDropsTable = () => {
  const colWidths = ["20%", "20%", "20%", "20%", "20%"];
  const headers = ["Region", "Monster", "Material Drop", "Equipment", "Skills"];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = rows.filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const data = filteredData.map(row => [
    row.region,
    row.monster,
    row.materialDrop,
    row.equipment,
    row.skills,
  ]);

  const tables = [
    {
      title: "All Monster Drops",
      headers,
      data
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: '16px' }}>Monster Drop Table</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "300px" }}
      />
      {tables.map((table, index) => (
        <TableComponent key={index} {...table} colWidths={colWidths} />
      ))}
    </div>
  );
};

const rows = [
  { id: 1, region: "Azure Expanse", monster: "Blue Slime", materialDrop: "Disturbing Ember II", equipment: "Flowing Robes, Dynasty Crown", skills: "Frost Phaser II" },
  { id: 2, region: "Azure Expanse", monster: "Red Slime", materialDrop: "Disturbing Shard II", equipment: "Tactitian's Helm, Spiked Helm", skills: "Drawing of Chaos II" },
  { id: 3, region: "Azure Expanse", monster: "Green Slime", materialDrop: "Disturbing Shard II", equipment: "Rifle Bayonet, Kirama Demon Helm, Fisherman Garb", skills: "Leach Blossom II" },
  { id: 4, region: "Azure Expanse", monster: "Black Bird", materialDrop: "Feral Ember II", equipment: "Raven Staff", skills: "Cleansing Rune II, Tremor II, Fate Reversal II" },
  { id: 5, region: "Azure Expanse", monster: "Rats", materialDrop: "Feral Shard II", equipment: "N/A", skills: "Volatile Gambit II" },
  { id: 6, region: "Azure Expanse", monster: "Owl", materialDrop: "Feral Shard II", equipment: "N/A", skills: "Ice Spear II" },
  { id: 7, region: "Azure Expanse", monster: "Brown Bird", materialDrop: "Feral Shard II", equipment: "N/A", skills: "N/A" },
  { id: 8, region: "Azure Expanse", monster: "Blue Genie", materialDrop: "Pulsing Ember II", equipment: "Kirama Demon Armor, Soulblade", skills: "Heat Wave II, Wild Call II, Decoy II" },
  { id: 9, region: "Azure Expanse", monster: "Black Frog (Violet Fire)", materialDrop: "Pulsing Ember II", equipment: "N/A", skills: "Fated Defiance II, Shattered Crystal II" },
  { id: 10, region: "Azure Expanse", monster: "Red Octopus", materialDrop: "Pulsing Ember II", equipment: "Red Candle", skills: "Firebolt II" },
  { id: 11, region: "Azure Expanse", monster: "Red Genie", materialDrop: "Pulsing Shard II", equipment: "Magic Lamp", skills: "Fractal Barrier II" },
  { id: 12, region: "Azure Expanse", monster: "Yellow Octopus", materialDrop: "Pulsing Shard II", equipment: "N/A", skills: "Sparkling Volley II, Zoom Attack II" },
  { id: 13, region: "Moon Wood", monster: "Yellow Bee", materialDrop: "Chittering Shard II", equipment: "N/A", skills: "N/A" },
  { id: 14, region: "Moon Wood", monster: "Brown Ant", materialDrop: "Chittering Shard II", equipment: "N/A", skills: "N/A" },
  { id: 15, region: "Moon Wood", monster: "Pink Bug", materialDrop: "Chittering Ember II", equipment: "Cardboard Armor, Devouring Scythe", skills: "N/A" },
  { id: 16, region: "Moon Wood", monster: "Black Ant", materialDrop: "Chittering Ember II", equipment: "N/A", skills: "N/A" },
  { id: 17, region: "Moon Wood", monster: "Gray Bee", materialDrop: "Chittering Ember II", equipment: "N/A", skills: "N/A" },
  { id: 18, region: "Moon Wood", monster: "Green Bug", materialDrop: "Chittering Shard II", equipment: "Galactic Armor", skills: "N/A" },
  { id: 19, region: "Moon Wood", monster: "Grim Reaper", materialDrop: "Cunning Shard II", equipment: "N/A", skills: "Violent Dismissal II" },
  { id: 20, region: "Moon Wood", monster: "Scientist", materialDrop: "Cunning Shard II", equipment: "Galactic Band", skills: "Chilling Breath II" },
  { id: 21, region: "Moon Wood", monster: "Lady Pirate", materialDrop: "Cunning Shard II", equipment: "Kung Pao Robes", skills: "N/A" },
  { id: 22, region: "Moon Wood", monster: "Red Octopus", materialDrop: "Pulsing Ember II", equipment: "N/A", skills: "N/A" },
  { id: 23, region: "Moon Wood", monster: "Yellow Octopus", materialDrop: "Pulsing Shard II", equipment: "Kung Pao Band", skills: "Fate Reversal II" },
  { id: 24, region: "The Wild", monster: "Gray Slime", materialDrop: "Disturbing Ember I", equipment: "Arcanist Robe, Corsair Bandana", skills: "Rift Pox I" },
  { id: 25, region: "The Wild", monster: "Red Slime", materialDrop: "Disturbing Shard I", equipment: "N/A", skills: "Overload I" },
  { id: 26, region: "The Wild", monster: "Rhino (Boss)", materialDrop: "Feral Ember I", equipment: "N/A", skills: "N/A" },
  { id: 27, region: "The Wild", monster: "Tiger", materialDrop: "Feral Ember I", equipment: "Dreamy Time Cap", skills: "N/A" },
  { id: 28, region: "The Wild", monster: "Rats", materialDrop: "Feral Ember I", equipment: "O'Trustry", skills: "N/A" },
  { id: 29, region: "The Wild", monster: "Brown Wolf", materialDrop: "Feral Ember I", equipment: "N/A", skills: "N/A" },
  { id: 30, region: "The Wild", monster: "Dirty White Wolf", materialDrop: "Feral Ember I", equipment: "N/A", skills: "Chilling Breath I" },
  { id: 31, region: "The Wild", monster: "Red T-Rex", materialDrop: "Feral Shard I", equipment: "Nature's Gift, Formal Kathin", skills: "N/A" },
  { id: 32, region: "The Wild", monster: "Black Frog (Violet)", materialDrop: "Pulsing Ember I", equipment: "Kirama Guard, Brigandine", skills: "N/A" },
  { id: 33, region: "The Wild", monster: "Black Frog (Fire)", materialDrop: "Pulsing Shard I", equipment: "Pale Light", skills: "Fate Reversal I" },
  { id: 34, region: "The Wild", monster: "Yellow Bird", materialDrop: "Pulsing Shard I", equipment: "Arcanist Cap", skills: "N/A" },
  { id: 35, region: "Northern Thicket", monster: "Black Ant", materialDrop: "Chittering Ember I", equipment: "N/A", skills: "Violent Dismissal I" },
  { id: 36, region: "Northern Thicket", monster: "Brown Ant", materialDrop: "Chittering Shard I", equipment: "Comfy Robes", skills: "N/A" },
  { id: 37, region: "Northern Thicket", monster: "Goblin (Sword)", materialDrop: "Cunning Ember I", equipment: "N/A", skills: "Decoy I" },
  { id: 38, region: "Northern Thicket", monster: "Green Orc", materialDrop: "Cunning Ember I", equipment: "Brawler's Vest", skills: "N/A" },
  { id: 39, region: "Northern Thicket", monster: "Red Orc", materialDrop: "Cunning Shard I", equipment: "N/A", skills: "Frag Wall I" },
  { id: 40, region: "Northern Thicket", monster: "Goblin (With Chains)", materialDrop: "Cunning Shard I", equipment: "N/A", skills: "Heat Wave I" },
  { id: 41, region: "Northern Thicket", monster: "Grim Reaper", materialDrop: "Cunning Shard I", equipment: "N/A", skills: "Drawing of Chaos I" },
  { id: 42, region: "Northern Thicket", monster: "Scientist", materialDrop: "Cunning Shard I", equipment: "N/A", skills: "N/A" },
  { id: 43, region: "Northern Thicket", monster: "Owl", materialDrop: "Feral Ember I", equipment: "N/A", skills: "N/A" },
  { id: 44, region: "Northern Thicket", monster: "Brown Bear", materialDrop: "Feral Shard I", equipment: "N/A", skills: "Solar Blast I" },
  { id: 45, region: "Northern Thicket", monster: "Rats", materialDrop: "Feral Shard I", equipment: "N/A", skills: "N/A" },
  { id: 46, region: "Southern Thicket", monster: "Grey Bee", materialDrop: "Chittering Ember I", equipment: "N/A", skills: "Zoom Attack I" },
  { id: 47, region: "Southern Thicket", monster: "Scientist", materialDrop: "Cunning Shard I", equipment: "N/A", skills: "Frost Attack I" },
  { id: 48, region: "Southern Thicket", monster: "Yellow Bee", materialDrop: "Chittering Shard I", equipment: "N/A", skills: "Ice Spear I" }
];

export default MonsterDropsTable;
