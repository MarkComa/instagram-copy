import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: "1",
      nickname: "qwe1",
      messages: [{ message: "sadsad" }, { message: "2223" }],
    },
    {
      id: "2",
      nickname: "qee",
      messages: [
        { message: "ddsad" },
        { message: "2ddd3" },
        { message: "2ddd3" },
      ],
    },
    {
      id: "3",
      nickname: "wre21",
      messages: [{ message: "32q" }, { message: "54w3" }],
    },
  ],
};

const directSlice = createSlice({
  name: "direct",
  initialState,
  reducers: {
    sendMessageClick(state, action) {     
      if (state.newMessageText !=="") {
        state.users.map((el)=> {
          if (el.id === action.payload.id) {
            el.messages.push({message: action.payload.newMessageText})
            }
            return el 
        })
      }
    }
  }
})
export default directSlice.reducer;

export const { sendMessageClick } = directSlice.actions
