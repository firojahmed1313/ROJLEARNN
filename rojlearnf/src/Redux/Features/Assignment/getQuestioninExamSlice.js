
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getApi } from "../../Api/Api";

const initalState = {
    questioninExam: [],
    loading: false,
    error: null
}
const getQuestions=async(id)=>{
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    console.log(token);    
    try {
        const data = getApi(`${burl}/question/getQuestion/${id}`,token);
        return data;
    } catch (error) {
        console.warn(error);
    }
}

export const getQuestioninExam = createAsyncThunk('getQuestioninExam', async (item) => {
    const datas = [];
    console.log(item)
    for(let i = 0; i < item.length; i++){
        console.log(item[i])
        const data = await getQuestions(item[i]);
        //console.log(data.data);
        datas.push(data.data);
        
    }
    console.log(datas);
    return datas;
    
})

export const getQuestioninExamSlice = createSlice({
    name: "getQuestioninExam",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getQuestioninExam.pending, (state) => {
                console.log("pending");
                state.loading = true;
            })
            .addCase(getQuestioninExam.fulfilled, (state, action) => {
                console.log("Carts fulfilled");
                state.loading = false;
                state.questioninExam = action.payload;
            })
            .addCase(getQuestioninExam.rejected, (state, action) => {
                console.log("rejected");
                state.loading = false;
                state.error = action.error.message;
                console.log("error", action.error);
            })
    }
})

export default getQuestioninExamSlice.reducer