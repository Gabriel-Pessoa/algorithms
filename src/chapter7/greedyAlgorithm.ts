import { intersectionSet } from "../utils/setOperations";

const statesToCoverage = new Set(["BA", "MA", "DF", "AC", "AM", "PR", "SC", "RS"]);

const radioStations = {
  AuroraFM: new Set(["AC", "AM", "PR"]),
  HorizonteRadio: new Set(["MA", "AC", "BA"]),
  CentralWave: new Set(["DF", "AM", "SC"]),
  SerraSound: new Set(["AM", "PR"]),
  SulVibes: new Set(["SC", "RS"]),
};

const finalStations = new Set<string>();

while (statesToCoverage.size > 0) {
  let coveredStates = new Set<string>();
  let bestStation = "";

  for (const element of Object.entries(radioStations)) {
    const [station, coverage] = element;
    const intersec = intersectionSet(coverage, statesToCoverage);

    if (intersec.size > coveredStates.size) {
      bestStation = station;
      coveredStates = intersec;
    }
  }
  
  finalStations.add(bestStation);
  coveredStates.forEach(value => statesToCoverage.delete(value));
}

console.log(finalStations);