import styled from "styled-components";

export const TasksStyled = styled.div`
  display: flex;
  align-items: flex-start;

  ul,
  h2 {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    border-radius: 4px;
    border: 1px solid #eee;
    list-style: none;
    margin-bottom: 16px;
    max-width: 320px;
    padding: 8px 32px;
  }
`;
