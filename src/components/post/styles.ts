import Link from "next/link";
import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
  margin-bottom: 16px;
`
const PostTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSizes.xl};
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
`

const PostBody = styled.p`
  font-size: ${({theme}) => theme.fontSizes.md};
  color: ${({theme}) => theme.colors.text};
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`

export {PostContainer, PostHeader, PostTitle, PostBody, ButtonContainer};
