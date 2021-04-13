import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="ui floating segment">
        <h3 className="ui header">Please select a song</h3>
      </div>
    );
  }

  return (
    <div className="ui floating message">
      <h2>Detail for: </h2>
      <h3 className="ui header">
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  //state.selectedSong = reducer's object name
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
