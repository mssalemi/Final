import React, {useState} from 'react'
import {getTeams} from '../../services/teams'

function TeamSearch(props) {

  const [search, setSearch] = useState('')
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    clearResults();
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
                  <div onClick={() => props.addTeamToLeague(team._id)} class="list-group-item list-group-item-action">
                    {team.name}
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
