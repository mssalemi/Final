import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../MyLeagues/MyLeagues.css'
import {getLeagues} from '../../../services/leagues'
import soccerimg from './soccerfield.jpeg'

const placeholder_img_src = 'https://images.unsplash.com/photo-1605135693932-f1d6fb1be3cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1444&q=80'

function MyLeagues(props) {

  const [leagues, setLeagues] = useState(null);

  useEffect(async () => {
    const {data} = await getLeagues();
    const userLeagues = data.filter( league => league.teams.filter(teams => teams.roster.includes(props.user._id)).length > 0)
    setLeagues(userLeagues)
  })

  return (
    <>
      <div class="hero-image">
        <img src={soccerimg}></img>
        <div class="hero-text">
          <h1>{props.user.firstName}</h1>
          <p>View your leagues here</p>
        </div>
      </div>

      {
        leagues ? <>
        
          {
            leagues.length > 0 ? leagues.map( league => {
              return (
                <div class="card">
                  <div className="card-body">
                    <div ><Link to={`/leagues/${league._id}`}><div class="btn btn-primary">View</div></Link></div>
                    <div><h5 class="card-title">{league.name}</h5></div>
                  </div>
                </div>
              )
            } ) : <div>You are not part of any leagues.</div>
          }
        
        </> : <div>...loading leagues</div>
      }
    </>
  )
}

export default MyLeagues
