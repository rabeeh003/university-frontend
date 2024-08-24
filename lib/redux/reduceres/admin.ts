import adminAPI from "@/utils/axios/admin";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Course {
  id: number;
  name: string;
  icon: string;
  qualification: string;
  duration: number;
  description: string;
  url: string;
}

interface AdminState {
  profile: object | null;
  name: string | null;
  username: string | null;
  loading: boolean;
  error: string | null;
  courses: Course[] | null;
}

const initialState: AdminState = {
  profile: null,
  name: null,
  username: null,
  loading: false,
  error: null,
  courses: null,
};

export const fetchAdminData = createAsyncThunk(
  "admin/fetchAdminData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await adminAPI.get("/account/verify-token/");
      console.log(response, "response of admin");
      
      return response.data;
    } catch (error) {
      return rejectWithValue("user not found");
    }
  }
);

export const fetchCourses = createAsyncThunk(
  "admin/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await adminAPI.get("/education/courses/");
      console.log(response, "response of courses");
      
      return response.data.results;
    } catch (error) {
      return rejectWithValue("Failed to fetch courses");
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
      state.courses = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchAdminData
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
      })
      // fetchCourseData
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
