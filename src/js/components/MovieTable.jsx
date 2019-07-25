import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions/index";

export class MovieTable extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div className="ScrollContainer">
        <table className="Table">
          <th className="Cell Cell-header">Title</th>
          <th className="Cell Cell-header">Vote Count</th>
          <th className="Cell Cell-header">Average Vote</th>
          <th className="Cell Cell-header">Popularity</th>
          <th className="Cell Cell-header">Poster</th>
          <th className="Cell Cell-header">Overview</th>
          {this.props.movies.map(el => (
            <tr key={el.id}>
              <td className="Cell">{el.title}</td>
              <td className="Cell">{el.vote_count}</td>
              <td className="Cell">{el.average_vote}</td>
              <td className="Cell">{el.popularity}</td>
              <td className="Cell">{el.poster}</td>
              <td className="Cell">{el.overview}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.remoteMovies
  };
}

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieTable);
