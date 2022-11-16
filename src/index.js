import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import card0 from './Set Cards/1DGB.png'; 
//import card0 from './test.png';
import card1 from './Set Cards/1DGF.png'; 
import card2 from './Set Cards/1DGS.png'; 
import card3 from './Set Cards/1DPB.png'; 
import card4 from './Set Cards/1DPF.png'; 
import card5 from './Set Cards/1DPS.png'; 
import card6 from './Set Cards/1DRB.png';
import card7 from './Set Cards/1DRF.png';
import card8 from './Set Cards/1DRS.png';
import card9 from './Set Cards/1OGB.png';
import card10 from './Set Cards/1OGF.png';
import card11 from './Set Cards/1OGS.png';
import card12 from './Set Cards/1OPB.png';
import card13 from './Set Cards/1OPF.png';
import card14 from './Set Cards/1OPS.png';
import card15 from './Set Cards/1ORB.png';
import card16 from './Set Cards/1ORF.png';
import card17 from './Set Cards/1ORS.png';
import card18 from './Set Cards/1SGB.png';
import card19 from './Set Cards/1SGF.png';
import card20 from './Set Cards/1SGS.png';
import card21 from './Set Cards/1SPB.png';
import card22 from './Set Cards/1SPF.png';
import card23 from './Set Cards/1SPS.png';
import card24 from './Set Cards/1SRB.png';
import card25 from './Set Cards/1SRF.png';
import card26 from './Set Cards/1SRS.png';
import card27 from './Set Cards/2DGB.png';
import card28 from './Set Cards/2DGF.png';
import card29 from './Set Cards/2DGS.png';
import card30 from './Set Cards/2DPB.png';
import card31 from './Set Cards/2DPF.png';
import card32 from './Set Cards/2DPS.png';
import card33 from './Set Cards/2DRB.png';
import card34 from './Set Cards/2DRF.png';
import card35 from './Set Cards/2DRS.png';
import card36 from './Set Cards/2OGB.png';
import card37 from './Set Cards/2OGF.png';
import card38 from './Set Cards/2OGS.png';
import card39 from './Set Cards/2OPB.png';
import card40 from './Set Cards/2OPF.png';
import card41 from './Set Cards/2OPS.png';
import card42 from './Set Cards/2ORB.png';
import card43 from './Set Cards/2ORF.png';
import card44 from './Set Cards/2ORS.png';
import card45 from './Set Cards/2SGB.png';
import card46 from './Set Cards/2SGF.png';
import card47 from './Set Cards/2SGS.png';
import card48 from './Set Cards/2SPB.png';
import card49 from './Set Cards/2SPF.png';
import card50 from './Set Cards/2SPS.png';
import card51 from './Set Cards/2SRB.png';
import card52 from './Set Cards/2SRF.png';
import card53 from './Set Cards/2SRS.png';
import card54 from './Set Cards/3DGB.png'; 
import card55 from './Set Cards/3DGF.png'; 
import card56 from './Set Cards/3DGS.png'; 
import card57 from './Set Cards/3DPB.png'; 
import card58 from './Set Cards/3DPF.png'; 
import card59 from './Set Cards/3DPS.png'; 
import card60 from './Set Cards/3DRB.png';
import card61 from './Set Cards/3DRF.png';
import card62 from './Set Cards/3DRS.png';
import card63 from './Set Cards/3OGB.png';
import card64 from './Set Cards/3OGF.png';
import card65 from './Set Cards/3OGS.png';
import card66 from './Set Cards/3OPB.png';
import card67 from './Set Cards/3OPF.png';
import card68 from './Set Cards/3OPS.png';
import card69 from './Set Cards/3ORB.png';
import card70 from './Set Cards/3ORF.png';
import card71 from './Set Cards/3ORS.png';
import card72 from './Set Cards/3SGB.png';
import card73 from './Set Cards/3SGF.png';
import card74 from './Set Cards/3SGS.png';
import card75 from './Set Cards/3SPB.png';
import card76 from './Set Cards/3SPF.png';
import card77 from './Set Cards/3SPS.png';
import card78 from './Set Cards/3SRB.png';
import card79 from './Set Cards/3SRF.png';
import card80 from './Set Cards/3SRS.png';

const imageMap = new Map();

//1 diamond
const cardObj0 = {
  color : 'green',
  number : 1,
  shape : 'diamond',
  shading : 'blank',
  img : card0
}
const cardObj1 = {
  color : 'green',
  number : 1,
  shape : 'diamond',
  shading : 'fill',
  img : card1
}
const cardObj2 = {
  color : 'green',
  number : 1,
  shape : 'diamond',
  shading : 'shaded',
  img : card2
}
const cardObj3 = {
  color : 'purple',
  number : 1,
  shape : 'diamond',
  shading : 'blank',
  img : card3
}
const cardObj4 = {
  color : 'purple',
  number : 1,
  shape : 'diamond',
  shading : 'fill',
  img : card4
}
const cardObj5 = {
  color : 'purple',
  number : 1,
  shape : 'diamond',
  shading : 'shaded',
  img : card5
}
const cardObj6 = {
  color : 'red',
  number : 1,
  shape : 'diamond',
  shading : 'blank',
  img : card6
}
const cardObj7 = {
  color : 'red',
  number : 1,
  shape : 'diamond',
  shading : 'fill',
  img : card7
}
const cardObj8 = {
  color : 'red',
  number : 1,
  shape : 'diamond',
  shading : 'shaded',
  img : card8
}
//1 pill
const cardObj9 = {
  color : 'green',
  number : 1,
  shape : 'pill',
  shading : 'blank',
  img : card9
}
const cardObj10 = {
  color : 'green',
  number : 1,
  shape : 'pill',
  shading : 'fill',
  img : card10
}
const cardObj11 = {
  color : 'green',
  number : 1,
  shape : 'pill',
  shading : 'shaded',
  img : card11
}
const cardObj12 = {
  color : 'purple',
  number : 1,
  shape : 'pill',
  shading : 'blank',
  img : card12
}
const cardObj13 = {
  color : 'purple',
  number : 1,
  shape : 'pill',
  shading : 'fill',
  img : card13
}
const cardObj14 = {
  color : 'purple',
  number : 1,
  shape : 'pill',
  shading : 'shaded',
  img : card14
}
const cardObj15 = {
  color : 'red',
  number : 1,
  shape : 'pill',
  shading : 'blank',
  img : card15
}
const cardObj16 = {
  color : 'red',
  number : 1,
  shape : 'pill',
  shading : 'fill',
  img : card16
}
const cardObj17 = {
  color : 'red',
  number : 1,
  shape : 'pill',
  shading : 'shaded',
  img : card17
}
//1 squiggle
const cardObj18 = {
  color : 'green',
  number : 1,
  shape : 'squiggle',
  shading : 'blank',
  img : card18
}
const cardObj19 = {
  color : 'green',
  number : 1,
  shape : 'squiggle',
  shading : 'fill',
  img : card19
}
const cardObj20 = {
  color : 'green',
  number : 1,
  shape : 'squiggle',
  shading : 'shaded',
  img : card20
}
const cardObj21 = {
  color : 'purple',
  number : 1,
  shape : 'squiggle',
  shading : 'blank',
  img : card21
}
const cardObj22 = {
  color : 'purple',
  number : 1,
  shape : 'squiggle',
  shading : 'fill',
  img : card22
}
const cardObj23 = {
  color : 'purple',
  number : 1,
  shape : 'squiggle',
  shading : 'shaded',
  img : card23
}
const cardObj24 = {
  color : 'red',
  number : 1,
  shape : 'squiggle',
  shading : 'blank',
  img : card24
}
const cardObj25 = {
  color : 'red',
  number : 1,
  shape : 'squiggle',
  shading : 'fill',
  img : card25
}
const cardObj26 = {
  color : 'red',
  number : 1,
  shape : 'squiggle',
  shading : 'shaded',
  img : card26
}

//2 diamond
const cardObj27 = {
  color : 'green',
  number : 2,
  shape : 'diamond',
  shading : 'blank',
  img : card27
}
const cardObj28 = {
  color : 'green',
  number : 2,
  shape : 'diamond',
  shading : 'fill',
  img : card28
}
const cardObj29 = {
  color : 'green',
  number : 2,
  shape : 'diamond',
  shading : 'shaded',
  img : card29
}
const cardObj30 = {
  color : 'purple',
  number : 2,
  shape : 'diamond',
  shading : 'blank',
  img : card30
}
const cardObj31 = {
  color : 'purple',
  number : 2,
  shape : 'diamond',
  shading : 'fill',
  img : card31
}
const cardObj32 = {
  color : 'purple',
  number : 2,
  shape : 'diamond',
  shading : 'shaded',
  img : card32
}
const cardObj33 = {
  color : 'red',
  number : 2,
  shape : 'diamond',
  shading : 'blank',
  img : card33
}
const cardObj34 = {
  color : 'red',
  number : 2,
  shape : 'diamond',
  shading : 'fill',
  img : card34
}
const cardObj35 = {
  color : 'red',
  number : 2,
  shape : 'diamond',
  shading : 'shaded',
  img : card35
}
//2 pill
const cardObj36 = {
  color : 'green',
  number : 2,
  shape : 'pill',
  shading : 'blank',
  img : card36
}
const cardObj37 = {
  color : 'green',
  number : 2,
  shape : 'pill',
  shading : 'fill',
  img : card37
}
const cardObj38 = {
  color : 'green',
  number : 2,
  shape : 'pill',
  shading : 'shaded',
  img : card38
}
const cardObj39 = {
  color : 'purple',
  number : 2,
  shape : 'pill',
  shading : 'blank',
  img : card39
}
const cardObj40 = {
  color : 'purple',
  number : 2,
  shape : 'pill',
  shading : 'fill',
  img : card40
}
const cardObj41 = {
  color : 'purple',
  number : 2,
  shape : 'pill',
  shading : 'shaded',
  img : card41
}
const cardObj42 = {
  color : 'red',
  number : 2,
  shape : 'pill',
  shading : 'blank',
  img : card42
}
const cardObj43 = {
  color : 'red',
  number : 2,
  shape : 'pill',
  shading : 'fill',
  img : card43
}
const cardObj44 = {
  color : 'red',
  number : 2,
  shape : 'pill',
  shading : 'shaded',
  img : card44
}
//2 squiggle
const cardObj45 = {
  color : 'green',
  number : 2,
  shape : 'squiggle',
  shading : 'blank',
  img : card45
}
const cardObj46 = {
  color : 'green',
  number : 2,
  shape : 'squiggle',
  shading : 'fill',
  img : card46
}
const cardObj47 = {
  color : 'green',
  number : 2,
  shape : 'squiggle',
  shading : 'shaded',
  img : card47
}
const cardObj48 = {
  color : 'purple',
  number : 2,
  shape : 'squiggle',
  shading : 'blank',
  img : card48
}
const cardObj49 = {
  color : 'purple',
  number : 2,
  shape : 'squiggle',
  shading : 'fill',
  img : card49
}
const cardObj50 = {
  color : 'purple',
  number : 2,
  shape : 'squiggle',
  shading : 'shaded',
  img : card50
}
const cardObj51 = {
  color : 'red',
  number : 2,
  shape : 'squiggle',
  shading : 'blank',
  img : card51
}
const cardObj52 = {
  color : 'red',
  number : 2,
  shape : 'squiggle',
  shading : 'fill',
  img : card52
}
const cardObj53 = {
  color : 'red',
  number : 2,
  shape : 'squiggle',
  shading : 'shaded',
  img : card53
}
//3 diamond
const cardObj54 = {
  color : 'green',
  number : 3,
  shape : 'diamond',
  shading : 'blank',
  img : card54
}
const cardObj55 = {
  color : 'green',
  number : 3,
  shape : 'diamond',
  shading : 'fill',
  img : card55
}
const cardObj56 = {
  color : 'green',
  number : 3,
  shape : 'diamond',
  shading : 'shaded',
  img : card56
}
const cardObj57 = {
  color : 'purple',
  number : 3,
  shape : 'diamond',
  shading : 'blank',
  img : card57
}
const cardObj58 = {
  color : 'purple',
  number : 3,
  shape : 'diamond',
  shading : 'fill',
  img : card58
}
const cardObj59 = {
  color : 'purple',
  number : 3,
  shape : 'diamond',
  shading : 'shaded',
  img : card59
}
const cardObj60 = {
  color : 'red',
  number : 3,
  shape : 'diamond',
  shading : 'blank',
  img : card60
}
const cardObj61 = {
  color : 'red',
  number : 3,
  shape : 'diamond',
  shading : 'fill',
  img : card61
}
const cardObj62 = {
  color : 'red',
  number : 3,
  shape : 'diamond',
  shading : 'shaded',
  img : card62
}
//3 pill
const cardObj63 = {
  color : 'green',
  number : 3,
  shape : 'pill',
  shading : 'blank',
  img : card63
}
const cardObj64 = {
  color : 'green',
  number : 3,
  shape : 'pill',
  shading : 'fill',
  img : card64
}
const cardObj65 = {
  color : 'green',
  number : 3,
  shape : 'pill',
  shading : 'shaded',
  img : card65
}
const cardObj66 = {
  color : 'purple',
  number : 3,
  shape : 'pill',
  shading : 'blank',
  img : card66
}
const cardObj67 = {
  color : 'purple',
  number : 3,
  shape : 'pill',
  shading : 'fill',
  img : card67
}
const cardObj68 = {
  color : 'purple',
  number : 3,
  shape : 'pill',
  shading : 'shaded',
  img : card68
}
const cardObj69 = {
  color : 'red',
  number : 3,
  shape : 'pill',
  shading : 'blank',
  img : card69
}
const cardObj70 = {
  color : 'red',
  number : 3,
  shape : 'pill',
  shading : 'fill',
  img : card70
}
const cardObj71 = {
  color : 'red',
  number : 3,
  shape : 'pill',
  shading : 'shaded',
  img : card71
}
//3 squiggle
const cardObj72 = {
  color : 'green',
  number : 3,
  shape : 'squiggle',
  shading : 'blank',
  img : card72
}
const cardObj73 = {
  color : 'green',
  number : 3,
  shape : 'squiggle',
  shading : 'fill',
  img : card73
}
const cardObj74 = {
  color : 'green',
  number : 3,
  shape : 'squiggle',
  shading : 'shaded',
  img : card74
}
const cardObj75 = {
  color : 'purple',
  number : 3,
  shape : 'squiggle',
  shading : 'blank',
  img : card75
}
const cardObj76 = {
  color : 'purple',
  number : 3,
  shape : 'squiggle',
  shading : 'fill',
  img : card76
}
const cardObj77 = {
  color : 'purple',
  number : 3,
  shape : 'squiggle',
  shading : 'shaded',
  img : card77
}
const cardObj78 = {
  color : 'red',
  number : 3,
  shape : 'squiggle',
  shading : 'blank',
  img : card78
}
const cardObj79 = {
  color : 'red',
  number : 3,
  shape : 'squiggle',
  shading : 'fill',
  img : card79
}
const cardObj80 = {
  color : 'red',
  number : 3,
  shape : 'squiggle',
  shading : 'shaded',
  img : card80
}

imageMap.set(0, cardObj0);
imageMap.set(1, cardObj1);
imageMap.set(2, cardObj2);
imageMap.set(3, cardObj3);
imageMap.set(4, cardObj4);
imageMap.set(5, cardObj5);
imageMap.set(6, cardObj6);
imageMap.set(7, cardObj7);
imageMap.set(8, cardObj8);
imageMap.set(9, cardObj9);
imageMap.set(10, cardObj10);
imageMap.set(11, cardObj11);
imageMap.set(12, cardObj12);
imageMap.set(13, cardObj13);
imageMap.set(14, cardObj14);
imageMap.set(15, cardObj15);
imageMap.set(16, cardObj16);
imageMap.set(17, cardObj17);
imageMap.set(18, cardObj18);  
imageMap.set(19, cardObj19);
imageMap.set(20, cardObj20);
imageMap.set(21, cardObj21);
imageMap.set(22, cardObj22);
imageMap.set(23, cardObj23);
imageMap.set(24, cardObj24);
imageMap.set(25, cardObj25);
imageMap.set(26, cardObj26);
imageMap.set(27, cardObj27);
imageMap.set(28, cardObj28);
imageMap.set(29, cardObj29);
imageMap.set(30, cardObj30);
imageMap.set(31, cardObj31);
imageMap.set(32, cardObj32);
imageMap.set(33, cardObj33);
imageMap.set(34, cardObj34);
imageMap.set(35, cardObj35);
imageMap.set(36, cardObj36);
imageMap.set(37, cardObj37);
imageMap.set(38, cardObj38);
imageMap.set(39, cardObj39);
imageMap.set(40, cardObj40);
imageMap.set(41, cardObj41);
imageMap.set(42, cardObj42);
imageMap.set(43, cardObj43);
imageMap.set(44, cardObj44);
imageMap.set(45, cardObj45);  
imageMap.set(46, cardObj46);
imageMap.set(47, cardObj47);
imageMap.set(48, cardObj48);
imageMap.set(49, cardObj49);
imageMap.set(50, cardObj50);
imageMap.set(51, cardObj51);
imageMap.set(52, cardObj52);
imageMap.set(53, cardObj53);
imageMap.set(54, cardObj54);
imageMap.set(55, cardObj55);
imageMap.set(56, cardObj56);
imageMap.set(57, cardObj57);
imageMap.set(58, cardObj58);
imageMap.set(59, cardObj59);
imageMap.set(60, cardObj60);
imageMap.set(61, cardObj61);
imageMap.set(62, cardObj62);
imageMap.set(63, cardObj63);
imageMap.set(64, cardObj64);
imageMap.set(65, cardObj65);
imageMap.set(66, cardObj66);
imageMap.set(67, cardObj67);
imageMap.set(68, cardObj68);
imageMap.set(69, cardObj69);
imageMap.set(70, cardObj70);
imageMap.set(71, cardObj71);
imageMap.set(72, cardObj72);  
imageMap.set(73, cardObj73);
imageMap.set(74, cardObj74);
imageMap.set(75, cardObj75);
imageMap.set(76, cardObj76);
imageMap.set(77, cardObj77);
imageMap.set(78, cardObj78);
imageMap.set(79, cardObj79);
imageMap.set(80, cardObj80);

var deck = [];
for(let i = 0; i < 81; i++){
  deck.push(i);
}

// class Card extends React.Component{

//   render() {
//     let bClass = "square";
//     if(this.props.selectState === 1){
//       bClass = "squareSelected";
//     } else if(this.props.selectState === 2){
//       bClass = "setFound";
//     } else if(this.props.selectState === 3){
//       bClass = "setNotFound";
//     }

//     return(
//       <button
//         className= {bClass}
//         onClick={() => {this.props.onClick();}}
//       >
//         <img src = {imageMap.get(this.props.imageIndex).img} 
//             alt = ""
//             height = "99.75"
//             width = "170.05"
//       />
//       </button>
      
//     );
//   }
// }

function Card(props){
  let bClass = "square";
    if(props.selectState === 1){
      bClass = "squareSelected";
    } else if(props.selectState === 2){
      bClass = "setFound";
    } else if(props.selectState === 3){
      bClass = "setNotFound";
    }
  return(
      <button
        className= {bClass}
        onClick={() => {props.onClick();}}
      >
        <img src = {imageMap.get(props.imageIndex).img} 
            alt = ""
            height = "99.75"
            width = "170.05"
      />
      </button>
  );
}

function Board(props) {
  const [cardSelectStates, setCardSelectStates] = useState(Array(12).fill(0));
  const [selectedCards, setSelectedCards] = useState([]);
  const [boardIndices, setBoardIndices] = useState(createStarterDeck());
  //const [boardIndices, setBoardIndices] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  console.log("creating consts");
  console.log(boardIndices);
  
  function renderCard(i, j){
    return (
      <Card 
        id = {j}
        imageIndex = {i}
        onClick={() => handleClick(j)}
        selectState = {cardSelectStates[j]}
       />
    );
  }

  async function handleClick(j) {
    var newCardSelectStates = cardSelectStates;
    var newSelectedCards = [];

    if (cardSelectStates[j] === 0) {
      newCardSelectStates[j] = 1;
    } else {
      newCardSelectStates[j] = 0;
    }

    for (let i = 0; i < 12; i++) {
      if (newCardSelectStates[i] === 1) {
        newSelectedCards.push(boardIndices[i]);
      }
    }

    setCardSelectStates(newCardSelectStates);
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 3) {

      var oldBoardIndices = boardIndices.slice();

      if (isSet(newSelectedCards[0], newSelectedCards[1], newSelectedCards[2])) {

        var newBoardIndices = boardIndices.slice();
        var tempDeck = deck.slice();
        tempDeck = shuffle(tempDeck);

        var count = 0;
        for (let element of newSelectedCards) {
          let index = newBoardIndices.indexOf(element, 0);
          newBoardIndices[index] = tempDeck[count];
          tempDeck.splice(count, 1);
          count++;
        }

        for (let element of newSelectedCards) {
          let index = oldBoardIndices.indexOf(element, 0);
          newCardSelectStates[index] = 2;
        }

        setCardSelectStates(newCardSelectStates);
        setSelectedCards(newSelectedCards);

        console.log("start set");
        await sleep(500);
        console.log("end set");
        newCardSelectStates = Array(12).fill(0);
        newBoardIndices = removeAndRefill(newSelectedCards);
        newSelectedCards = [];

        setBoardIndices(newBoardIndices);
        setCardSelectStates(newCardSelectStates);
        setSelectedCards(newSelectedCards);

      } else {

        for (let element of newSelectedCards) {
          let index = oldBoardIndices.indexOf(element, 0);
          newCardSelectStates[index] = 3;
        }

        setCardSelectStates(newCardSelectStates);
        setSelectedCards(newSelectedCards);

        console.log("start not a set");
        await sleep(510);
        console.log("end not a set");

        newCardSelectStates = Array(12).fill(0);
        newSelectedCards = [];

        setCardSelectStates(newCardSelectStates);
        setSelectedCards(newSelectedCards);
      }
    }
  }
  function removeAndRefill(newSelectedCards){
    const newBoardIndices = boardIndices.slice();

    var tempDeck = deck.slice();

    tempDeck = shuffle(tempDeck);

    var count = 0;
    for(let element of newSelectedCards){
      let index = newBoardIndices.indexOf(element, 0);
      newBoardIndices[index] = tempDeck[count];
      tempDeck.splice(count, 1);
      count++;
    }

    if(hasSet(newBoardIndices)){
      deck = tempDeck.slice();
      return newBoardIndices;
    } else{
      this.removeAndRefill();
    }
  }
  let status = "cards selected: " + selectedCards.length + " | cards remaining: " + deck.length;
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderCard(boardIndices[0], 0)}
        {renderCard(boardIndices[1], 1)}
        {renderCard(boardIndices[2], 2)}
      </div>
      <div className="board-row">
        <div className='board-card'>
          {renderCard(boardIndices[3], 3)}
        </div>
        {renderCard(boardIndices[4], 4)}
        {renderCard(boardIndices[5], 5)}
      </div>
      <div className="board-row">
        {renderCard(boardIndices[6], 6)}
        {renderCard(boardIndices[7], 7)}
        {renderCard(boardIndices[8], 8)}
      </div>
      <div className="board-row">
        {renderCard(boardIndices[9], 9)}
        {renderCard(boardIndices[10], 10)}
        {renderCard(boardIndices[11], 11)}
      </div>
    </div>
  );
}


// class Board extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       cardSelectStates : Array(12).fill(0),
//       selectedCards : [],
//       //boardIndices : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//       boardIndices : createStarterDeck()
//     };
//   }

//   handleKeyDown(e){
//     if(e.)
//   }

//   async handleClick(j){
//     var newCardSelectStates = this.state.cardSelectStates.slice();
//     var newSelectedCards = [];
//     if(this.state.cardSelectStates[j] === 0){
//       newCardSelectStates[j] = 1;
//     } else {
//       newCardSelectStates[j] = 0;
//     }

//     for(let i = 0; i < 12; i++){
//       if(newCardSelectStates[i] === 1){
//         newSelectedCards.push(this.state.boardIndices[i]);
//       }
//     }

//     this.setState({
//       cardSelectStates : newCardSelectStates, 
//       selectedCards : newSelectedCards});

//       if(newSelectedCards.length === 3){
//         var oldBoardIndices = this.state.boardIndices.slice();
//         if(isSet(newSelectedCards[0], newSelectedCards[1], newSelectedCards[2])){
//           var newBoardIndices = this.state.boardIndices.slice();
//           var tempDeck = deck.slice();
//           tempDeck = shuffle(tempDeck);
  
//           var count = 0;
//           for(let element of newSelectedCards){
//             let index = newBoardIndices.indexOf(element, 0);
//             newBoardIndices[index] = tempDeck[count];
//             tempDeck.splice(count, 1);
//             count++;
//           }
//           for(let element of newSelectedCards){
//             let index = oldBoardIndices.indexOf(element, 0);
//             console.log("got element index");
//             newCardSelectStates[index] = 2;
//           }
//           this.setState({cardSelectStates : newCardSelectStates, selectedCards : newSelectedCards});
//           console.log("start");
//           await sleep(500);
//           console.log("end");
//           newCardSelectStates = Array(12).fill(0);
//           newBoardIndices = this.removeAndRefill(newSelectedCards);
//           newSelectedCards = [];
//           this.setState({boardIndices : newBoardIndices, cardSelectStates : newCardSelectStates, selectedCards : newSelectedCards});
//         } else{
//           for(let element of newSelectedCards){
//             let index = oldBoardIndices.indexOf(element, 0);
//             console.log("got element index");
//             newCardSelectStates[index] = 3;
//           }
//           this.setState({cardSelectStates : newCardSelectStates, selectedCards : newSelectedCards});
//           console.log("start");
//           await sleep(510);
//           console.log("end");
//           newCardSelectStates = Array(12).fill(0);
//           newSelectedCards = [];
//           this.setState({cardSelectStates : newCardSelectStates, selectedCards : newSelectedCards});
//         }
//       }
//   }

//   renderCard(i, j){
//     return (
//       <Card 
//         id = {j}
//         imageIndex = {i}
//         onClick={() => this.handleClick(j)}
//         selectState = {this.state.cardSelectStates[j]}
//        />
//     );
//   }

//   removeAndRefill(newSelectedCards){
//     const newBoardIndices = this.state.boardIndices.slice();

//     var tempDeck = deck.slice();

//     tempDeck = shuffle(tempDeck);

//     var count = 0;
//     for(let element of newSelectedCards){
//       let index = newBoardIndices.indexOf(element, 0);
//       newBoardIndices[index] = tempDeck[count];
//       tempDeck.splice(count, 1);
//       count++;
//     }

//     if(hasSet(newBoardIndices)){
//       deck = tempDeck.slice();
//       return newBoardIndices;
//     } else{
//       this.removeAndRefill();
//     }
//   }

//   render(){
//     let status = "cards selected: " + this.state.selectedCards.length + " | cards remaining: " + deck.length;
//     let gameInfo = "Select groups of three cards that are SETS until the deck has been finished.";
//     let moreGameInfo = "A SET consists of 3 cards in which each of the cards' features, looked at one-by-one, are the same on each card, or, are different on each card. All of the features must separately satisfy this rule.";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="status">{this.state.userMessage}</div>
//         <div className="board-row">
//           {this.renderCard(this.state.boardIndices[0], 0)}
//           {this.renderCard(this.state.boardIndices[1], 1)}
//           {this.renderCard(this.state.boardIndices[2], 2)}
//         </div>
//         <div className="board-row">
//           <div className='board-card'>
//             {this.renderCard(this.state.boardIndices[3], 3)}
//           </div>
//           {this.renderCard(this.state.boardIndices[4], 4)}
//           {this.renderCard(this.state.boardIndices[5], 5)}
//         </div>
//         <div className="board-row">
//           {this.renderCard(this.state.boardIndices[6], 6)}
//           {this.renderCard(this.state.boardIndices[7], 7)}
//           {this.renderCard(this.state.boardIndices[8], 8)}
//         </div>
//         <div className="board-row">
//           {this.renderCard(this.state.boardIndices[9], 9)}
//           {this.renderCard(this.state.boardIndices[10], 10)}
//           {this.renderCard(this.state.boardIndices[11], 11)}
//         </div>
//       </div>
//     );
//   }
// }

function Timer() {
  const [countDown, setCountDown] = useState(0);
  const [runTimer, setRunTimer] = useState(true);

  useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(0);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown + 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  React.useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log("expired");
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  return (
    <div className="App">
      <div>
        Time: {minutes}:{seconds}
      </div>
    </div>
  );
}

class Game extends React.Component {
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Timer />
          <Board />
        </div>
        <div className="game-info">
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function isSet(i, j, k){
  let a = imageMap.get(i);
  let b = imageMap.get(j);
  let c = imageMap.get(k);

  if (!(((a.number === b.number) && (b.number === c.number)) ||
        ((a.number !== b.number) && (a.number !== c.number) && (b.number !== c.number)))) {
    return false;
  }
  if (!(((a.shape === b.shape) && (b.shape === c.shape)) ||
        ((a.shape !== b.shape) && (a.shape !== c.shape) && (b.shape !== c.shape)))) {
    return false;
  }
  if (!(((a.shading === b.shading) && (b.shading === c.shading)) ||
        ((a.shading !== b.shading) && (a.shading !== c.shading) && (b.shading !== c.shading)))) {
    return false;
  }
  if (!(((a.color === b.color) && (b.color === c.color)) ||
        ((a.color !== b.color) && (a.color !== c.color) && (b.color !== c.color)))) {
    return false;
  }
  return true;
}

function createTriplets(cards){
  let n = cards.length;
  let triplets = [];
  for(let i = 0; i < n - 2; i++){
    for(let j = i+1; j < n - 1; j++){
      for(let k = j+1; k < n; k++){
        let triplet = [];
        triplet.push(cards[i]);
        triplet.push(cards[j]);
        triplet.push(cards[k]);
        triplets.push(triplet);
      }
    }
  }
  return triplets;
}

function hasSet(cards){
  let triplets = createTriplets(cards);
  for(const triplet of triplets){
    if(isSet(triplet[0], triplet[1], triplet[2])){
      return true;
    }
  }
  return false;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function createStarterDeck(){
  let indices = [];
  let tempDeck = deck.slice();
  tempDeck = shuffle(tempDeck);
  for(let i = 0; i < 12; i++){
    indices.push(tempDeck[i]);
    tempDeck.splice(i, 1);
  }
  if(hasSet(indices)){
    for(let element of indices){
      deck.splice(deck.indexOf(element), 1);
    }
    return indices;
  } else{
    this.createStarterDeck();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
