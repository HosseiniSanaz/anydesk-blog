import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 16px;
  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    margin-bottom: 8px;
  }
`
const PostTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSizes.xl};
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    font-size: ${({theme}) => theme.fontSizes.lg};
  }
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
