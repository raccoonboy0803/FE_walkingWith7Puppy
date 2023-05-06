import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 250px;
`;

const Info = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 16px;
  color: #9d9d9d;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const Area = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #9d9d9d;
  text-align: right;
  margin-bottom: 20px;
`;

const Post = () => {
  return (
    <div>
      <PostWrapper>
        <Link to="">
          <Area>강서구</Area>
          <Image
            src="https://images.unsplash.com/photo-1587463272361-565200f82b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHB1cHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="강아지이미지"
          />
          <Info>
            <Title>같이 산책할 친구 구합니다</Title>
            <Content>
              오늘 저녁 8시에 한강에서 같이 산책할 친구 구해요. 사교성이 좋고 친구들을 좋아합니다...
            </Content>
          </Info>
        </Link>
      </PostWrapper>
    </div>
  );
};

export default Post;
