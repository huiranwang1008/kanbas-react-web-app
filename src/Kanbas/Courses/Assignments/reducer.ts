import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../../Database";

// 定义 Assignment 数据类型
interface Assignment {
  _id: string;
  title: string;
  course: string;
  editing?: boolean;
}

// 初始状态，包含从数据库加载的作业
const initialState = {
  assignments: db.assignments as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // 添加新的作业
    addAssignment: (state, action: PayloadAction<Omit<Assignment, "_id">>) => {
      const newAssignment: Assignment = {
        _id: `A${new Date().getTime()}`, // 根据时间戳生成唯一的 _id
        ...action.payload,
        editing: false,
      };
      state.assignments.push(newAssignment);
    },

    // 删除作业
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    // 更新作业
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === action.payload._id
      );
      if (index !== -1) {
        state.assignments[index] = { ...state.assignments[index], ...action.payload };
      }
    },

    // 设置作业的编辑状态
    editAssignment: (state, action: PayloadAction<string>) => {
      const assignment = state.assignments.find(
        (assignment) => assignment._id === action.payload
      );
      if (assignment) {
        assignment.editing = true;
      }
    },
  },
});

// 导出 action 和 reducer
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;