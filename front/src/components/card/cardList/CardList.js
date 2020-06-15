import React, { Fragment } from 'react';
import cartListUseStyles from './CardListUseStyles';

const CardList = () => {
  const classes = cartListUseStyles();

  console.log(`CardList Render....`);
  return (
    <Fragment>
      Hello World!!!!
      {/* 특정 덱의 edit 버튼 누르면 해당 페이지로 넘어오도록 해봅시다 */}
      {/* 헤더 (덱 이름 / 디스크립션 수정 가능하게) */}
      {/* 카드 추가 버튼 */}
      {/* 카드 추가 버튼 클릭 => 카드 추가 모달 폼 뜨기 */}
      {/* 카드 리스트 */}
    </Fragment>
  )
}

export default CardList;