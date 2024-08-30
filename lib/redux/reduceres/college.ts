import collegeAPI from "@/utils/axios/college";
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

interface CollegeState {
  profile: object | null;
  name: string | null;
  username: string | null;
  loading: boolean;
  error: string | null;
  courses: Course[] | null;
}

const initialState: CollegeState = {
  profile: null,
  name: null,
  username: null,
  loading: false,
  error: null,
  courses: null,
};

export const fetchCollegeData = createAsyncThunk(
  "college/fetchCollegeData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await collegeAPI.get("/account/verify-college-token/");
      console.log(response, "response of college");
      
      return response.data;
    } catch (error) {
      return rejectWithValue("user not found");
    }
  }
);

export const fetchCourses = createAsyncThunk(
  "college/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await collegeAPI.get("/education/courses/");
      console.log(response, "response of courses");
      
      return response.data.results;
    } catch (error) {
      return rejectWithValue("Failed to fetch courses");
    }
  }
);

const collegeSlice = createSlice({
  name: "college",
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
      // fetchCollegeData
      .addCase(fetchCollegeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCollegeData.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.profile;
        state.name = action.payload.name;
        state.username = action.payload.username;
      })
      .addCase(fetchCollegeData.rejected, (state, action) => {
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

export const { logout } = collegeSlice.actions;
export default collegeSlice.reducer;
