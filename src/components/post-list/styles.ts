import styled from "styled-components"

const PostGrid = styled.div`
  display: grid;
  overflow: scroll;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const PostCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 16px;
  height: 170px;
  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    height: 140px;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    height: 120px;
  }
`

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
  margin-bottom: 16px;
  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    margin-bottom: 8px;
    min-height: 50px;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    min-height: 40px;
  }
`
const PostTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSizes.lg};
  font-weight: bold;
  color: ${({theme}) => theme.colors.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    font-size: ${({theme}) => theme.fontSizes.md};
  }
`

const PostBody = styled.p`
  font-size: ${({theme}) => theme.fontSizes.md};
  color: ${({theme}) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    font-size: ${({theme}) => theme.fontSizes.sm};
  }
`

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 16px;
  text-align: center;
`
const EmptyTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSizes.lg};
  font-weight: bold;
`
const EmptyMessage = styled.p`
  font-size: ${({theme}) => theme.fontSizes.lg};
  color: ${({theme}) => theme.colors.text};
`

export {PostGrid, PostCard, PostHeader, PostTitle, PostBody, EmptyContainer, EmptyMessage, EmptyTitle}
