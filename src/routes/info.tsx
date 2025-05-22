import { Wrapper } from "../components/auth-component";
import styled from 'styled-components';

const Content = styled.div`
  padding: 20px;
  color: #ffffff;
  background-color: #1e1e1e;
  border-radius: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;

`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #cccccc;
`;

const NoticeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NoticeItem = styled.li`
  background-color: #333333;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #444444;
`;

const notices = [
  { id: 1, title: "첫 번째 공지사항", content: "" },
  { id: 2, title: "두 번째 공지사항", content: "" },
];

function NoticeBoard() {
  return (
    <Section>
      <Title>공지사항</Title>
      <NoticeList>
        {notices.map(notice => (
          <NoticeItem key={notice.id}>
            <h3 style={{ color: '#36f659' }}>{notice.title}</h3>
            <Paragraph>{notice.content}</Paragraph>
          </NoticeItem>
        ))}
      </NoticeList>
    </Section>
  );
}

export default function Info() {
    return (
        <Wrapper>
            <Content>
                <Section>
                    <Title>소개</Title>
                    <Paragraph>
                        스마트랩 동아리 멘토링, 소개, 문제풀이 등을 위한 사이트입니다.<br />
                        사실 사이트 퀄리티가 좋지 못해 추가적으로 공부하고 싶은 친구들을 위해 코딩 공부에 도움 될만한 사이트를 첨부합니다.<br /><br />
                        기초 코딩 공부 사이트:
                        <a href="https://www.tcpschool.com/" title="tcpschool" style={{ color: '#0de6f6' }}>
                            tcp school
                        </a><br />코딩 문제 풀이 사이트:
                        <a href="https://www.acmicpc.net/search#q=&c=Problems" title="백준" style={{ color: '#0de6f6' }}>
                            백준
                        </a><br />
                        해외 코딩 문제 풀이 사이트:
                        <a href="https://codeforces.com/" title="코포" style={{ color: '#0de6f6' }}>
                            코드포스
                        </a><br />
                        오픈소스 관리 및 코드 공유 사이트:
                        <a href="https://github.com/" title="깃헙" style={{ color: '#0de6f6' }}>
                            깃헙
                        </a>
                    </Paragraph>
                </Section>
                <Section>
                    <Title>연락처</Title>
                    <Paragraph>문의 사항이나 궁금한 점이나 엿같은점이 있으시면 상민이 카톡으로 연락해 주세요.</Paragraph>
                </Section>
                <NoticeBoard />
            </Content>
        </Wrapper>
    );
}