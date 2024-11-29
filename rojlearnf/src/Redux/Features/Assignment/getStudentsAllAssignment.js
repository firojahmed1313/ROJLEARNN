

const initalState = {
    studentAllExam: null,
    loading: false,
    error: null,
};

export const getStudentsAllAssignment = createAsyncThunk('getStudentsAllAssignment', async (id) => {
    const burl = import.meta.env.VITE_URL;
    const token = Cookies.get("ROJLEARN");
    try {
        const data = getApi(`${burl}/student/assignment/${id}`,token);
        //console.log(data);
        return data; 
    } catch (error) {
        //console.warn(error);
    }
    
})

export const getStudentsAllAssignmentSlice = createSlice({
    name: "getStudentsAllAssignment",
    initialState: initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStudentsAllAssignment.pending, (state, action) => {
                //console.log("pending");
                state.loading = true;
            })
            .addCase(getStudentsAllAssignment.fulfilled, (state, action) => {
                //console.log("getStudentsAllAssignment fulfilled", action.payload);
                state.loading = false;
                state.studentAllExam = action.payload.data;
            })
            .addCase(getStudentsAllAssignment.rejected, (state, action) => {
                //console.log("rejected");
                state.loading = false;
                state.error = action.error;
                //console.log("error", action.error);
            })
    }
})