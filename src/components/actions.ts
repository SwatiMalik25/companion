"use server";


export async function getCompanions() {
  const id = "./public/companions.json";

  // console.log("Loading companion descriptions from "+COMPFILE);
  var fs = require('fs');
  const data = fs.readFileSync(id);
  console.log(String(data));
  // run a parse here to force a server side error if the JSON is improperly formatted
  // It's much more difficult to debug client side
  var js = JSON.parse(String(data));
  return String(data);
}
export default getCompanions;