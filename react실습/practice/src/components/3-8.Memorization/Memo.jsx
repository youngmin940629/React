import React, {useState, useEffect} from 'react';
import Comments from './Comments'


const CommentList = [
  {title: 'comment1', content: 'message1', likes:1},
  {title: 'comment2', content: 'message2', likes:2},
  {title: 'comment3', content: 'message3', likes:3},
]

export default function Memo() {
  const [comments, setComments] = useState(CommentList)

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments)=> [
        ...prevComments,
        {title: `comment1${prevComments.length + 1}`, content: `message1${prevComments.content + 1}`, likes:1}
      ])
    }, 1000)

    return () =>{
      clearInterval(interval);
    }
  }, [])

  return (
    <Comments commentList={comments} />
  );
}

// React.memo => HOC / Props 비교하여 메모
// profiler => 리액트 성능 분석 도구
// callback => useCallback
// value => useMemo