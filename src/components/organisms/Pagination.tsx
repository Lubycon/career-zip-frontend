import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Flex } from 'rebass';
import { BLUE } from 'styles/colors';

const Wrapper = styled.div`
  margin: 0 8px;

  button:last-of-type {
    margin-right: 0;
  }
`;

const NumberButton = styled.button`
  width: 32px;
  height: 32px;
  color: #424b57;
  border-radius: 100%;
  font-weight: bold;
  margin-right: 8px;
  line-height: 1;
  &.current {
    background-color: ${BLUE[1]};
    color: white;
  }
`;

const Arrow = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
`;

interface Props {
  totalPage: number;
  currentPage: number;
  onClickPage: (page: number) => void;
}

const Pagination = ({ totalPage, currentPage, onClickPage }: Props) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const startPage = Math.floor(currentPage / 5) * 5 + 1;
    const endPage = startPage + 4;
    const pageArray = [];
    if (endPage > totalPage) {
      for (let i = startPage; i <= totalPage; i += 1) {
        pageArray.push(i);
      }
    } else {
      for (let i = startPage; i <= endPage; i += 1) {
        pageArray.push(i);
      }
    }
    setPages(pageArray);
  }, [currentPage]);

  const handleClickPrevious = () => {
    const calculated = currentPage - 5;
    if (totalPage > 5 && calculated > 0) {
      onClickPage(calculated);
    }
  };

  const handleClickNext = () => {
    const calculated = currentPage + 5;
    if (totalPage > 5 && calculated <= totalPage) {
      onClickPage(calculated);
    }
  };

  const handleClickPage = (page: number) => {
    if (page === currentPage) return;
    onClickPage(page);
  };

  return (
    <Flex marginLeft="auto" justifyContent="center" alignItems="center">
      <Arrow onClick={handleClickPrevious}>
        <img alt="prev-button" src="/public/icons/page_arrow_left.svg" />
      </Arrow>
      <Wrapper>
        {totalPage > 0 &&
          pages.map((page, i) => (
            <NumberButton
              key={`number-${page}`}
              className={currentPage === page && 'current'}
              onClick={() => handleClickPage(page)}
            >
              {page}
            </NumberButton>
          ))}
      </Wrapper>
      <Arrow onClick={handleClickNext}>
        <img alt="right-button" src="/public/icons/page_arrow_right.svg" />
      </Arrow>
    </Flex>
  );
};

export default Pagination;
