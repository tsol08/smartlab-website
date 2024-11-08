import styled from "styled-components";
import CMenuTableContent from "./c-menu-table-content.tsx";

const Wrapper = styled.div`
  margin: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const TitleBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 10px;
`;

const LevelpTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  overflow-x: scroll;

  margin-bottom: 30px;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #646464;
    border-radius: 10px;
  }
`;

type CMenuTableProps = {
    levelc: string;
    value: object;
};

export default function CMenuTable({ levelc, value }: CMenuTableProps) {
    if (value instanceof Array) {
        return (
            <Wrapper>
                <TitleBox>
                    <LevelpTitle>Level {levelc}</LevelpTitle>
                </TitleBox>
                <Content>
                    {value.map((c) => (
                        <CMenuTableContent key={c.fileID} levelc={levelc} {...c} />
                    ))}
                </Content>
            </Wrapper>
        );
    }
}
