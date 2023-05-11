import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-app/Firebase-config";

type Props = {
  title: string;
};

const CustomdropdownDevice = ({ ...props }: Props) => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "devicetype");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result: any[] = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    }
    getData();
  }, []);
  // const handleClickOption = async (item : any) => {
  //   const colRef = doc(db, "categories", item.id);
  //   const docData = await getDoc(colRef);
  //   setValue("category", {
  //     id: docData.id,
  //     ...docData.data(),
  //   });
  //   setSelectCategory(item);
  // };
  return (
    <div className="mb-[17px] mt-[3px]">
      <div className="flex flex-col gap-y-[3px]">
        <label className="text-[16px] leading-6 font-semibold">
          {props.title}
        </label>
        <select className="p-[9px] border rounded-lg border-gray">
          {categories.length > 0 &&
            categories.map((item: any) => (
              <option key={item.id} value="Kiosk">
                {item.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CustomdropdownDevice;
