import { styled } from "styled-components";

  export default function Home() {
  const Back = styled.div`
  height:100vh;
  width:200vh;
  background-image: url('https://pbs.twimg.com/media/E3sXKUHVoAEpnUU.jpg');
  background-size: cover;
  margin-top:10px;
  display : inline-block
  `
  const MainText = styled.div`
  font-size:100px;
  background-color:transparent;
  `

  const Pulsegun = styled.img`np
  width:60vh;
  height:80vh;
  `

  const Happy = styled.img`
  margin-left: 90vh;
  margin-top: 10vh;
  height:60vh;
  width:40vh;
  `

  
  return (
    <Back>
    <MainText>
      스마트랪 왮사이트
    </MainText>
    <Pulsegun src="https://i.ibb.co/dgRKwBt/pulsegun.jpg" />
    <Happy src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-vu3EyjHDUyzLVyHqgBfKUjRQrv1n7Cf6Q&s" /> 
    </Back>
  );
}
