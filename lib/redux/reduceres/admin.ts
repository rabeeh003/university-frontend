import adminAPI from "@/utils/axios/admin";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AdminState {
  profile: object | null;
  name: string | null;
  username: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  profile: null,
  name: null,
  username: null,
  loading: false,
  error: null,
};

export const fetchAdminData = createAsyncThunk(
  "admin/fetchAdminData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await adminAPI.get("/account/verify-token/");
      return response.data;
    } catch (error) {
      return rejectWithValue("user not found");
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logout: (state) => {
      state.profile = null;
      state.name = null;
      state.username = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminData.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.profile;
        state.name = action.payload.name;
        state.username = action.payload.username;
      })
      .addCase(fetchAdminData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
