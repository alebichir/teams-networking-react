import React from "react";
import { ReactNode } from "react";
import { deleteTeamRequest, loadTeamsRequest } from "./middleware";

type Team = {
  id: string;
  promotion: string;
  members: string;
  name: string;
  url: string;
  createdBy?: string;
};

function TeamRow(props: { team: Team }) {
  const team = props.team;
  const { id, url } = team;
  const displayUrl = url.startsWith("https://github.com/") ? url.substring(19) : url;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value="${id}" />
      </td>
      <td>
        <span
          className="circle-bullet"
          style={{
            background: stringToColour(team.promotion)
          }}
        ></span>
        {team.promotion}
      </td>
      <td>{team.members}</td>
      <td>{team.name}</td>
      <td>
        <a href="${url}" target="_blank">
          {displayUrl}
        </a>
      </td>
      <td>
        <button
          type="button"
          className="action-btn edit-btn"
          onClick={() => {
            console.warn("edit", id, team);
          }}
        >
          &#9998;
        </button>
        <button
          type="button"
          className="action-btn delete-btn"
          onClick={async () => {
            console.warn("delete", id);
            await deleteTeamRequest(id);
            window.location.reload();
          }}
        >
          ♻
        </button>
      </td>
    </tr>
  );
}

function stringToColour(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}

type Props = {
  loading: boolean;
  teams: Team[];
};
export function TeamsTable(props: Props) {
  console.info("table props", props);

  return (
    <form id="teamsForm" action="" method="get" className={props.loading ? "loading-mask" : ""}>
      <table id="teamsTable">
        <colgroup>
          <col className="select-all-col" />
          <col style={{ width: "20%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "15%" }} />
          <col className="table-actions" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="context">
          {props.teams.map(team => (
            <TeamRow key={team.id} team={team} />
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text" name="promotion" placeholder="Enter Promotion" required />
            </td>
            <td>
              <input type="text" name="members" placeholder="Enter Members" required />
            </td>
            <td>
              <input type="text" name="name" placeholder="Enter Name" required />
            </td>
            <td>
              <input type="text" name="url" placeholder="Enter URL" required />
            </td>
            <td>
              <button type="submit" className="action-btn" title="Add">
                ➕
              </button>
              <button type="reset" className="action-btn" title="Cancel">
                ✖
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
};
export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teams: []
    };
  }

  async componentDidMount() {
    const teams = await loadTeamsRequest();
    this.setState({
      loading: false,
      teams
    });
    console.info(teams);
  }

  render() {
    console.info("render", this.state.loading);

    return (
      <>
        <TeamsTable loading={this.state.loading} teams={this.state.teams} />
      </>
    );
  }
}
