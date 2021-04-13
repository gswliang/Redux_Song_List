import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "寂寞邊界", duration: "3:51" },
    { title: "天灰", duration: "4:10" },
    { title: "你那麼愛她", duration: "3:29" },
    { title: "思念是一種病", duration: "5:20" },
    { title: "我可以", duration: "2:20" },
    { title: "傻瓜", duration: "4:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
