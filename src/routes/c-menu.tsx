import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import CMenuTable from "../components/c-menu-table.tsx";
import styled from "styled-components";

export interface CType {
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

export default function CMenu() {
    const [cOfListFirst, setCOfListFirst] = useState<CType[]>([]);
    //const [cOfListSecond, setCOfListSecond] = useState<CType[]>([]);
    //const [cOfListThird, setCOfListThird] = useState<CType[]>([]);
    const getCData = async (levelc_num: number) => {
        const CQuery = query(collection(db, `levelc${levelc_num}`));
        const snapshot = await getDocs(CQuery);
        const cs = snapshot.docs.map((doc) => {
            const { difficulty, fileID, fileName, readOnly } = doc.data();
            return { difficulty, fileID, fileName, readOnly };
        });
        if (levelc_num === 1) {
            setCOfListFirst(cs);
        } else if (levelc_num === 2) {
            //setCOfListSecond(cs);
        } else if (levelc_num === 3) {
            //setCOfListThird(cs);
        }
    };

    useEffect(() => {
        getCData(1);
        getCData(2);
    }, []);

    return (
        <Wrapper>
            <CMenuTable levelc="1" value={cOfListFirst}></CMenuTable>
            {/* <CMenuTable levelc="2" value={cOfListSecond}></CMenuTable> */}
        </Wrapper>
    );
}
