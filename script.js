let counter ;

const incrementBy1 = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the incrementBy1 tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/e7dbec80-ac3d-4453-9b91-ba92e7ca52d9/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "b08cbcad-5331-4708-baa4-a8ad2f834d4a" }) ,
  }) ;
  const result = await response.json() ;
  counter = result.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

const incrementBy2 = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the incrementBy2 tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/e7dbec80-ac3d-4453-9b91-ba92e7ca52d9/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "7666d0c0-983f-4356-8818-38b397e98b6a" }) , 
  }) ;
  const result = await response.json() ;
  counter = result.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

const fetchCounter = async () => {
  // replace this with your own fetch by clicking "manage" after hovering over the fetchCounter tactic in your workspace
  const response = await fetch("https://api.tactics.dev/api/workspace/e7dbec80-ac3d-4453-9b91-ba92e7ca52d9/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "5b69b6ed-cc60-4c06-8b01-dcc47ec5eaf4" }) ,
  }) ;
  const result = await response.json() ;
  counter = result.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

document.addEventListener('DOMContentLoaded', async () => {
  fetchCounter() ;
}) ;
