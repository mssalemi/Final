import React, {useState} from 'react'
import {getTeams} from '../../services/teams'

function TeamSearch(props) {

  const [search, setSearch] = useState('')
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    clearResults();
    console.log(props.league.teams)
  };

  const [results, setResults] = useState(null);
  const clearResults = () => setResults(null);

  async function handleSearch(){
    console.log("searching for palyer" + search)
    const {data} = await getTeams();
    console.log(data)
    const filterdTeams = data.filter( team => team.name.toUpperCase().includes(search.toUpperCase()) )
    setResults(filterdTeams);
  }

  const handleAddTeam = async (team) => {
    await props.addTeamToLeague(team._id)
    props.refreshLeague();
  }

  return (
    <div>
      <input value={search} onChange={handleSearchChange} class="form-control form-control-lg" type="text" placeholder="search teams"></input>
      <button onClick={handleSearch}>Search</button>
      <div class="list-group">
        {
          results && <>
            {
              results.map( team => {
                return (
                  <div class="list-group-item list-group-item-action">
                    {team.name}
                    <button type="button" class={`btn btn-${props.league.teams.map(team => team._id).includes(team._id) ? "secondary" : "primary"}`} onClick={() => handleAddTeam(team) } disabled={props.league.teams.map(team => team._id).includes(team._id)} >{props.league.teams.map(team => team._id).includes(team._id) ? "Team in league" : "Add Team"}</button>
                  </div>
                )
              } )
            }

          </>
        }
      </div>
    </div>
  )
}

export default TeamSearch
