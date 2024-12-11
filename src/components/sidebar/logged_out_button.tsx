import React from "react";
import { Button } from "../ui/button";

const LoggedOutButton = () => {
  return (
    <Button className=" w-2/3 border border-red-600 bg-red-200 text-black font-extrabold hover:bg-red-500">
      ログアウト
    </Button>
  );
};

export default LoggedOutButton;
