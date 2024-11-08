import styled from "styled-components";
import CMarkdownRender from "./c-markdown-render";
import { CodeEditorForCoding } from "./c-code-editor";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  height: 100vh;
`;
export default function CReadWrite() {
    return (
        <Wrapper>
            <CMarkdownRender></CMarkdownRender>
            <CodeEditorForCoding></CodeEditorForCoding>
        </Wrapper>
    );
}
