// Full SpellsTable with Cost, Materials, and Workshop columns restored
import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
  materialNames,
  materialFilterMap,
  pastelColors,
  materialsMonsterDrops,
  starThresholds,
  workshops
} from './data/spellData';

const darkTheme = createTheme({
  palette: { type: "dark" },
  overrides: {
    MuiTableCell: {
      root: { padding: "6px 10px", fontSize: "0.85rem", whiteSpace: "nowrap" },
      head: { backgroundColor: "#333", color: "#fff", fontWeight: "bold" }
    }
  }
});

const SpellsTable = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statFilters, setStatFilters] = useState([]);
  const [activeColor, setActiveColor] = useState("All");
  const [expandedRows, setExpandedRows] = useState([]);

  const getRemainingToNextLevel = (total) => {
    if (total == null) return Infinity;
    for (let i = 1; i < starThresholds.length; i++) {
      if (total < starThresholds[i]) {
        return starThresholds[i] - total;
      }
    }
    return Infinity;
  };

  const renderStars = (count = 0) => {
    const max = 5;
    return <span style={{ fontSize: "14px" }}>{"★".repeat(count)}{"☆".repeat(max - count)}</span>;
  };

  const applyFilters = (recipesList, term = searchTerm, stats = statFilters, color = activeColor) => {
    let filtered = [...recipesList];

    if (color !== "All") {
      const materialId = materialFilterMap[color];
      filtered = filtered.filter(item => item.materials.some(mat => mat.material === materialId));
    }

    if (term.trim()) {
      const terms = term.toLowerCase().split(",").map(t => t.trim()).filter(t => t);
      filtered = filtered.filter(item => {
        const itemText = [
          item.name,
          item.properties_crystal?.ability_properties?.description,
          ...item.materials.map(mat => {
            const id = String(mat.material).trim();
            return materialsMonsterDrops[id] || materialNames[id] || '';
          })
        ].join(" ").toLowerCase();
    
        // Check that every search term is included in the item text
        return terms.every(t => itemText.includes(t));
      });
    }

    if (stats.length > 0) {
      filtered = filtered.filter(item =>
        stats.every(s => (item.properties_crystal?.stats?.[s] ?? 0) > 0)
      );
    
      const primary = stats[0];
      filtered.sort((a, b) => {
        const aStat = a.properties_crystal?.stats?.[primary] ?? 0;
        const bStat = b.properties_crystal?.stats?.[primary] ?? 0;
    
        // If stat values are equal, use cooldown to break tie
        if (bStat === aStat) {
          const aCooldown = a.properties_crystal?.ability_properties?.cooldown ?? 0;
          const bCooldown = b.properties_crystal?.ability_properties?.cooldown ?? 0;
          return bCooldown - aCooldown; // higher cooldown first
        }
    
        return bStat - aStat;
      });
    }

    setFilteredRecipes(filtered);
  };


  const getWorkshopTag = (location) => {
    const colorKey = Object.keys(pastelColors).find(key => location.startsWith(key));
    const color = pastelColors[colorKey];
    return (
      <Box px={1.5} py={0.5} style={{ borderRadius: 6, fontWeight: "bold", fontSize: "0.75rem", backgroundColor: color?.bg, color: color?.text, border: "1px solid rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{colorKey}</Box>
    );
  };

  useEffect(() => {
    const fetchAllWorkshops = async () => {
      const combinedMap = {};
      const requests = workshops.map(async (workshop) => {
        const res = await fetch("https://api.prod.runiverseservers.com/GetStationRecipeItems", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: workshop.id, requester_id: "42F016120A68386E", excluded_items: [], character_id: "A20ADB28F178CB58" })
        });
        const data = await res.json();
        return data.map(item => ({ ...item, location: workshop.name }));
      });

      const results = await Promise.all(requests);
      const allItems = results.flat();
      for (const item of allItems) {
        const name = item.name;
        const level = item.station_data?.level ?? 0;
        if (!combinedMap[name] || level > (combinedMap[name].station_data?.level ?? 0)) {
          combinedMap[name] = item;
        }
      }
      const sorted = Object.values(combinedMap);
      sorted.sort((a, b) => {
        const levelDiff = (b.station_data?.level ?? 0) - (a.station_data?.level ?? 0);
        if (levelDiff !== 0) return levelDiff;
        const aNext = getRemainingToNextLevel(a.station_data?.total_inscriptions);
        const bNext = getRemainingToNextLevel(b.station_data?.total_inscriptions);
        return aNext - bNext;
      });
      setRecipes(sorted);
      applyFilters(sorted);
      setLoading(false);
    };
    fetchAllWorkshops();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {loading ? (

      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
      <img src="/assets/loading-runiverse.gif" alt="Loading..." style={{ width: '80px', height: '80px' }} />
      </Box>

        ) : (
      <Box p={2}>
        <Typography variant="h5" gutterBottom>Fresco Manor Spells</Typography>

        <Box display="flex" flexWrap="wrap" gap={3} mb={2}>
          {Object.keys(pastelColors).map(color => (
            <Button key={color} onClick={() => { setActiveColor(color); applyFilters(recipes, searchTerm, statFilters, color); }} variant={activeColor === color ? "contained" : "outlined"} style={{ backgroundColor: pastelColors[color].bg, color: pastelColors[color].text, fontWeight: "bold", marginRight: 7 }}>{color}</Button>
          ))}
          <Button style={{marginLeft: 10}} variant="outlined" onClick={() => { setSearchTerm(""); setStatFilters([]); setActiveColor("All"); setExpandedRows([]); applyFilters(recipes, "", [], "All"); }}>Clear Filters</Button>
        </Box>

        <Box mb={2} display="flex" flexWrap="wrap" gap={2}>
          <TextField label="Search" variant="outlined" fullWidth value={searchTerm} onChange={(e) => { const val = e.target.value; setSearchTerm(val); applyFilters(recipes, val, statFilters, activeColor); }} style={{ marginBottom: 0, maxWidth: 600 }} />
        </Box>
        {['strength', 'constitution', 'dexterity', 'intelligence', 'wisdom'].map(stat => (
          <FormControlLabel style={{ marginBottom: 8}} key={stat} control={<Checkbox checked={statFilters.includes(stat)} onChange={(e) => { const updated = e.target.checked ? [...statFilters, stat] : statFilters.filter(s => s !== stat); setStatFilters(updated); applyFilters(recipes, searchTerm, updated, activeColor); }} color="primary" />} label={stat.charAt(0).toUpperCase() + stat.slice(1)} />
        ))}

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Icon</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Stars</TableCell>
                <TableCell>Inscriptions</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Cost</TableCell>
                <TableCell>Materials</TableCell>
                <TableCell>Workshop</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRecipes.map((item, idx) => {
                const isExpanded = expandedRows.includes(idx);
                const gemMaterial = item.materials.find(mat => materialNames[mat.material]);
                const otherMaterials = item.materials.filter(mat => !materialNames[mat.material]);
                const isHigh = ["High", "HighCantrip"].includes(item.type);
                return (
                  <React.Fragment key={idx}>
                    <TableRow onClick={() => setExpandedRows(prev => isExpanded ? prev.filter(i => i !== idx) : [...prev, idx])} style={{ backgroundColor: idx % 2 === 0 ? "#2b2b2b" : "#1f1f1f", cursor: "pointer", transition: "background-color 0.2s ease", }} onMouseEnter={e => e.currentTarget.style.backgroundColor = "#3a3a3a"}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = idx % 2 === 0 ? "#2b2b2b" : "#1f1f1f"}>
                      <TableCell><Avatar src={item.properties_crystal?.ability_properties?.icon} alt={item.name} variant="square" style={isHigh ? { border: "2px solid gold", boxShadow: "0 0 6px gold" } : {}} /></TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{renderStars(item.station_data?.level ?? 0)}</TableCell>
                      <TableCell>{`Next LVL: ${getRemainingToNextLevel(item.station_data?.total_inscriptions ?? 0)}`}</TableCell>                      <TableCell style={{ whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: 300 }}>{item.properties_crystal?.ability_properties?.description || "—"}</TableCell>
                      <TableCell>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <img src="/assets/gold-runiverse.png" alt="gold" style={{ width: '16px', height: '16px' }} />
                          <span>{item.currencies?.gold ?? 0} Gold</span>
                        </div>
                        {gemMaterial && (
                          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: 4 }}>
                            <Avatar src={gemMaterial.icon} alt="gem" style={{ width: 20, height: 20 }} />
                            <span>{gemMaterial.amount}x {materialNames[gemMaterial.material]}</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        {otherMaterials.map((mat, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: 2 }}>
                            <Avatar src={mat.icon} alt={mat.type} style={{ width: 20, height: 20 }} />
                            <span>{mat.amount}x {materialsMonsterDrops[String(mat.material).trim()] || 'Unknown'}</span>
                          </div>
                        ))}
                      </TableCell>
                      <TableCell>{getWorkshopTag(item.location)}</TableCell>
                    </TableRow>
                    {isExpanded && (
                      <TableRow>
                        <TableCell colSpan={8} style={{ backgroundColor: "#1a1a1a" }}>
                            <Box display="flex" alignItems="center" gap={1} flexWrap="nowrap">

                              {/* Column 0: Image */}
                              <Box flex={0.06} minWidth={30} display="flex" justifyContent="center" alignItems="center">
                                <Avatar
                                  src={item.image}
                                  alt={item.name}
                                  variant="square"
                                  style={{ width: 35, height: 35 }}
                                />
                              </Box>

                              {/* Column 1: Stats */}
                              <Box flex={0.1} minWidth={150}>
                                {Object.entries(item.properties_crystal?.stats || {})
                                  .filter(([_, value]) => value > 0)
                                  .sort(([, aVal], [, bVal]) => bVal - aVal)
                                  .map(([stat, value]) => (
                                    <Box
                                      key={stat}
                                      display="flex"
                                      alignItems="center"
                                      mb={0.5}
                                    >
                                      <strong style={{ minWidth: '80px', textTransform: 'capitalize' }}>
                                        {stat}:
                                      </strong>
                                      <span style={{ marginLeft: '16px' }}>
                                        {"★".repeat(value)}{"☆".repeat(3 - value)}
                                      </span>
                                    </Box>
                                ))}
                              </Box>

                              {/* Column 2: Cooldown */}
                              <Box flex={0.1} minWidth={50} display="flex" justifyContent="center" alignItems="center">
                                <span><strong>Cooldown:</strong> {item.properties_crystal?.ability_properties?.cooldown ?? "—"}</span>
                              </Box>

                              {/* Column 3: Target */}
                              <Box flex={0.1} minWidth={50} display="flex" justifyContent="center" alignItems="center">
                                <span><strong>Target:</strong> {item.properties_crystal?.ability_properties?.target_type ?? "—"}</span>
                              </Box>

                              {/* Column 4: Type */}
                              <Box flex={0.1} minWidth={50} display="flex" justifyContent="center" alignItems="center">
                                <span><strong>Type:</strong> {item.type ?? "—"}</span>
                              </Box>

                            </Box>
                          </TableCell>

                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      )}
    </ThemeProvider>
  );
};

export default SpellsTable;
