import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../common/title/Title';

function createData(id, recentStudyDate, deckName, cardName, reviewCount, nextReviewDate, difficulty, importance) {
  return { id, recentStudyDate, deckName, cardName, reviewCount, nextReviewDate, difficulty, importance };
}

const rows = [
  createData(0, '2020년 7월 20일', '운영체제', '쓰레드', 1, '2020년 7월 20일', "쉬움", "매우 중요"),
  createData(1, '2020년 7월 20일', '컴퓨터 아키텍처', 'CPU 명령어', 32, '2020년 7월 20일', "쉬움", "매우 중요"),
  createData(2, '2020년 7월 20일', '네트워크 통신', 'TCP / IP', 3, '2020년 7월 20일', "쉬움", "매우 중요"),
  createData(3, '2020년 7월 20일', '데이터베이스 설계', 'DB Archtecture', 4, '2020년 7월 20일', "쉬움", "매우 중요"),
  createData(4, '2020년 7월 20일', '데이터베이스 설계', 'DB Archtecture', 4, '2020년 7월 20일', "쉬움", "매우 중요"),
  createData(5, '2020년 7월 20일', '데이터베이스 설계', 'DB Archtecture', 4, '2020년 7월 20일', "쉬움", "매우 중요"),
  createData(6, '2020년 7월 20일', '데이터베이스 설계', 'DB Archtecture', 4, '2020년 7월 20일', "쉬움", "매우 중요"),
  createData(7, '2020년 7월 20일', '데이터베이스 설계', 'DB Archtecture', 4, '2020년 7월 20일', "쉬움", "매우 중요"),
  createData(8, '2020년 7월 20일', '창의 공학 설계', '김대영 교수님', 5, '2020년 7월 20일', "쉬움", "매우 중요"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function RecentStudys() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>최근 학습한 카드</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>최근 학습 일자</TableCell>
            <TableCell>덱</TableCell>
            <TableCell>카드</TableCell>
            <TableCell>복습 횟수</TableCell>
            <TableCell >다음 복습 일자</TableCell>
            {/* <TableCell align="right">다음 복습 일자</TableCell> */}
            <TableCell>난이도</TableCell>
            <TableCell>중요도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.recentStudyDate}</TableCell>
              <TableCell>{row.deckName}</TableCell>
              <TableCell>{row.cardName}</TableCell>
              <TableCell>{row.reviewCount}</TableCell>
              <TableCell >{row.nextReviewDate}</TableCell>
              {/* <TableCell align="right">{row.nextReviewDate}</TableCell> */}
              <TableCell>{row.difficulty}</TableCell>
              <TableCell>{row.importance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more cards
        </Link>
      </div>
    </React.Fragment>
  );
}