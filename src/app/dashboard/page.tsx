import { user1Mock } from "@/mock/user";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ユーザー情報</h1>
      <div className="border rounded p-4 bg-gray-50 shadow">
        <p>
          <span className="font-semibold">Name:</span> {user1Mock.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user1Mock.email}
        </p>
        <p>
          <span className="font-semibold">Created At:</span> {user1Mock.createdAt}
        </p>
      </div>
    </div>
  );
}
