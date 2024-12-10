import React, { useEffect, useState } from "react";
import * as client from "./client"; // 引入 client 库

export default function HttpClient() {
  // 定义两个状态变量
  const [welcomeOnClick, setWelcomeOnClick] = useState(""); // 点击时的欢迎消息
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");  // 加载时的欢迎消息

  // 点击按钮时获取数据的函数
  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };

  // 组件加载时获取数据的函数
  const fetchWelcomeOnLoad = async () => {
    const welcome = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };

  // 使用 useEffect 在组件加载时调用 fetchWelcomeOnLoad
  useEffect(() => {
    fetchWelcomeOnLoad(); // 调用函数获取欢迎信息
  }, []); // 空依赖数组，确保只在组件加载时执行一次

  return (
    <div>
      <h3>HTTP Client</h3>
      <hr />
      <h4>Requesting on Click</h4>
      <button onClick={fetchWelcomeOnClick} className="btn btn-primary">
        Fetch Welcome
      </button>
      <p>Response from server: <b>{welcomeOnClick}</b></p>
      <hr />
      <h4>Requesting on Load</h4>
      <p>Response from server: <b>{welcomeOnLoad}</b></p>
      <hr />
    </div>
  );
}