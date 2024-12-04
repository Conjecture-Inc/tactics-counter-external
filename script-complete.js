const exampleWorkspaceId = "a8acea3c-3f48-4863-a7f7-102d22b8e78f" ;
const tacticsFrontendUrl = "http://localhost:5173" ;

let counter ;

const incrementBy1 = async () => {
  const response = await fetch("http://localhost:3000/api/workspace/a8acea3c-3f48-4863-a7f7-102d22b8e78f/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "1f57d955-d2b8-4df7-9597-6736b42944a9" }) ,
  }) ;
  const json = await response.json() ;
  counter = json.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

const incrementBy2 = async () => {
  const response = await fetch("http://localhost:3000/api/workspace/a8acea3c-3f48-4863-a7f7-102d22b8e78f/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "99c49f57-c884-4b2a-9289-e5f7758461b4" }) ,
  }) ;
  const json = await response.json() ;
  counter = json.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

const fetchCounter = async () => {
  const response = await fetch("http://localhost:3000/api/workspace/a8acea3c-3f48-4863-a7f7-102d22b8e78f/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initial_variables: {}, tactic_id: "e658d111-bdf9-4a0b-a396-167ad88c8548" }) ,
  }) ;
  const json = await response.json() ;
  counter = json.result.content.value ;
  document.getElementById('counterValue').textContent = counter ;
} ;

document.addEventListener('DOMContentLoaded', async () => {
  fetchCounter() ;
}) ;
