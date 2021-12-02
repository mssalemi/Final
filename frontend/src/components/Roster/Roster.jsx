import React from 'react'

function Roster(props) {
  return (
    props.roster.length > 0 ? (
      <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Contact Info</th>
          </tr>
        </thead>
        <tbody>
          {
            props.roster.map((player, i) => {
              return (
                <tr>
                  <th scope="row">{i+1}</th>
                  <td>{player.firstName || "-"}</td>
                  <td>{player.lastName || "-"}</td>
                  <td>{player.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    ) : <div>There are no players on this roster</div>

  )
}

export default Roster
