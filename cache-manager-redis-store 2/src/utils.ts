export function getDogs() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log("getDogs", new Date().toISOString());
      resolve([
        {
          id: 1,
          name: "Luna",
          breed: "Caucasian Shepherd"
        },
        {
          id: 2,
          name: "Ralph",
          breed: "Husky"
        }
      ]);
    }, 1000);
  });
}

export function getCats() {
  return new Promise((resolve, _) => {
    console.log("getCats", new Date().toISOString());
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Vas",
          breed: "moggie"
        },
        {
          id: 2,
          name: "Clover",
          breed: "Blue Russian"
        }
      ]);
    }, 1000);
  });
}
