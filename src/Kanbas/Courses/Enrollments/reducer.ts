// reducers/enrollmentsReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrollments: { [userId: string]: string[] }; // 存储用户ID与其课程ID的映射
}

const initialState: EnrollmentState = {
  enrollments: {},
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      if (!state.enrollments[userId]) {
        state.enrollments[userId] = [];
      }
      if (!state.enrollments[userId].includes(courseId)) {
        state.enrollments[userId].push(courseId);
      }
    },
    unenroll: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      if (state.enrollments[userId]) {
        state.enrollments[userId] = state.enrollments[userId].filter(
          (id) => id !== courseId
        );
      }
    },
  },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;