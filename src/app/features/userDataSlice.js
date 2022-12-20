import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    users:[],
    error: null, 
    loading: false
}

export const addUser = createAsyncThunk("dataUser/add", async(data, thunkAPI)=>{
    console.log(data);
    try {
        const res = await fetch("http://localhost:4000/add/user", {
            method:"POST", 
            body: JSON.stringify({
            firstName: data.firstName,
            secondName:data.secondName,
            lastName:data.lastName, 
            mail:data.mail, 
            numderPhone:data.phone, 
            birthday: data.dateBird, 
            gender:data.gender,
            fullAdress:data.fullAdress,
            documents:{               
                document: data.document, 
                seriesOfTheDocument:data.documentSeries, 
                numberOfTheDocument:data.documentNumber, 
                dataOfIssue:data.dateDocument, 
                issuedByWhom:data.documentIssued, 
                divisionCode: data.documentDivision,
            }

            }),
            headers:{
                "Content-type": "application/json",
            }


        })
        const dataUser = await res.json()
        if(dataUser.error){
            thunkAPI.rejectWithValue(dataUser.error)
        }
        return thunkAPI.fulfillWithValue(dataUser)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const userData = createSlice({
    name: "UserData", 
    initialState, 
    reducers:{}, 
    extraReducers: (builder) =>{
    builder
    .addCase(addUser.fulfilled((state, actions)=>{
        state.users.push(actions.payload)
        state.loading = false
        state.error = null
    }))
    .addCase(addUser.rejected((state, actions)=>{
        state.error = actions.payload
        state.loading = false
    }))
    .addCase(addUser.pending((state, actions)=>{
        state.loading = true
        state.error = null
    }))
    }
})

export default userData.reducer