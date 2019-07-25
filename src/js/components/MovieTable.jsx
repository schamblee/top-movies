import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { getMovies, setSortParams } from "../actions/index";
import { getSortedMovies, sortSelector } from "../selectors";

export class MovieTable extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies, setSortParams } = this.props;
    return (
      <div className="TableContainer">
        <table className="Table">
          <thead>
            <tr>
              <th className="Cell Cell-header Sortable" onClick={() => setSortParams("title")}>Title</th>
              <th className="Cell Cell-header Sortable" onClick={() => setSortParams("vote_count")}>Vote Count</th>
              <th className="Cell Cell-header Sortable" onClick={() => setSortParams("vote_average")}>Average Vote</th>
              <th className="Cell Cell-header Sortable" onClick={() => setSortParams("popularity")}>Popularity</th>
              <th className="Cell Cell-header">Poster</th>
              <th className="Cell Cell-header Sortable" onClick={() => setSortParams("overview")}>Overview</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(el => (
              <tr key={el.id}>
                <td className="Cell">{el.title}</td>
                <td className="Cell">{el.vote_count}</td>
                <td className="Cell">{el.vote_average}</td>
                <td className="Cell">{el.popularity}</td>
                <td className="Cell">
                  <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${el.poster_path}`}
                    alt={el.title}/>
                </td>
                <td className="Cell">{el.overview}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  movies: getSortedMovies(state),
  sortParams: sortSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setSortParams: bindActionCreators(setSortParams, dispatch),
  getMovies: bindActionCreators(getMovies, dispatch)
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(MovieTable);
