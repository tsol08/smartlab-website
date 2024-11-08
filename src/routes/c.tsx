import { useLocation } from "react-router-dom";
import CMarkdownRender from "../components/c-markdown-render";
import styled from "styled-components";
import CReadWrite from "../components/c-readWrite";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function C() {
    const readOnly = useLocation().state.readOnly;
    return (
        <>
            {readOnly ? (
                <Wrapper>
                    <CMarkdownRender></CMarkdownRender>
                </Wrapper>
            ) : (
                <CReadWrite></CReadWrite>
            )}
        </>
    );
}
