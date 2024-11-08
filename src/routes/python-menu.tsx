import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import PythonMenuTable from "../components/python-menu-table";
import styled from "styled-components";

export interface PythonType {
  difficulty: number;
  fileID: string;
  fileName: string;
  readOnly: boolean;
}

const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export default function PythonMenu() {
  const [pythonOfListFirst, setPythonOfListFirst] = useState<PythonType[]>([]);
  const [pythonOfListSecond, setPythonOfListSecond] = useState<PythonType[]>([]);
  //const [pythonOfListThird, setPythonOfListThird] = useState<PythonType[]>([]);
  const getPythonData = async (levelp_num: number) => {
    const PythonQuery = query(collection(db, `levelp${levelp_num}`));
    const snapshot = await getDocs(PythonQuery);
    const pythons = snapshot.docs.map((doc) => {
      const { difficulty, fileID, fileName, readOnly } = doc.data();
      return { difficulty, fileID, fileName, readOnly };
    });
    if (levelp_num === 1) {
      setPythonOfListFirst(pythons);
    } else if (levelp_num === 2) {
      setPythonOfListSecond(pythons);
    } else if (levelp_num === 3) {
      //setPythonOfListThird(pythons);
    }
  };

  useEffect(() => {
    getPythonData(1);
    getPythonData(2);
  }, []);

  return (
    <Wrapper> 
      <PythonMenuTable levelp="1" value={pythonOfListFirst}></PythonMenuTable>
      <PythonMenuTable levelp="2" value={pythonOfListSecond}></PythonMenuTable>
    </Wrapper>
  );
}
