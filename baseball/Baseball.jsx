import React, { Component } from 'react';
import Try from './Try';

const getRandomNum = () => {
  let arr = [];
  let answer = '';
  for(let i = 0; i < 10; i++) {
    arr.push(i);
  }

  let index;
  for(let i = 0; i < 4; i++) {
    index = Math.floor(Math.random() * (10 - i));
    answer += arr[index];
    arr.splice(index, 1);
  }

  console.log(answer)

  return answer;
};

class Baseball extends Component {
  state = {
    answer: '', // 정답
    result: '', // 결과
    list: [],
    value: '', // 인풋 밸류
  };

  setAnswer = () => {
    this.setState({
      answer: getRandomNum(),
    });
  };

  onChangeInput = (e) => {
    const value = e.currentTarget.value;
    this.setState({
      value: value,
    });
  };

  onClickButton = () => {
    const arrAnswer = this.state.answer.split('');
    const arrValue = this.state.value.split('');

    let strike = 0;
    let ball = 0;

    for(let aIndex = 0; aIndex < arrAnswer.length; aIndex++) {
      for(let vIndex = 0; vIndex < arrValue.length; vIndex++) {
        if(arrAnswer[aIndex] === arrValue[vIndex]) {
          if(aIndex === vIndex) {
            strike++;
          }else {
            ball++;
          }
          break;
        }
      }
    }

    if(strike === 4) {
      this.setState({
        result: '홈런입니다!',
        value: '',
        list: [],
        answer: getRandomNum(),
      });

      return;
    }

    if(this.state.list.length === 10) {
      this.setState({
        result: '실패!',
        value: '',
        list: [],
        answer: getRandomNum(),
      });

      return;
    }

    this.setState({
      list: [...this.state.list, { try: this.state.value, result: `${strike}스트라이크 ${ball}볼` }],
      value: '',
    });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  componentWillMount = () => {
    this.setAnswer();
  }

  render() {
    return (
      <>
        <p>{this.state.list.length}회 도전</p>
        <input ref={this.onRefInput} onChange={this.onChangeInput} value={this.state.value}></input>
        <button onClick={this.onClickButton}>입력</button>
        <p>{this.state.result}</p>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <Try key={index} tryInfo={item}></Try>
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default Baseball;