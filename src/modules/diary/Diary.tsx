import React from "react";
import Menubar from "../../auth/user/Menubar";
import DiaryList from "../../auth/setting/diary/DiaryList";

type Props = {};

const Diary = (props: Props) => {
  return (
    <div className="relative">
      <Menubar></Menubar>
      <DiaryList></DiaryList>
    </div>
  );
};

export default Diary;
