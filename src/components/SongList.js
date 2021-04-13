import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

const SongList = (props) => {
  const renderList = () => {
    const song = props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui primary button"
              onClick={() => {
                props.selectedSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });

    return song;
  };

  return <div className="ui divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

//passing action as an 2nd value of connect with ES 2015 syntax
// {selectedSong: selectedSong} => {selectedSong}
export default connect(mapStateToProps, { selectedSong })(SongList);
