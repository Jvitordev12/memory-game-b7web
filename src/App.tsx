import { useEffect, useState } from 'react';
import * as C  from './App.styles'
import logoImage from './assets/devmemory_logo.png'
import { Button } from './components/Button';
import { InfoContext } from './components/InfoItem'; 
import ButtonIcon from './svgs/restart.svg'
import { GridShowType } from './data/items';
import { items } from './data/items';
import { GridItem } from './components/Griditem';
import { FormatTimer } from './helpers/FormatTimer';


function App() {
 const [playing, setPlaying] =  useState<boolean>(false);
 const [timeElapse, setTimeElapse] =  useState<number>(0);
 const [moveCount, setMoveCount] =  useState<number>(0);
 const [showCount, setShowCount] =  useState<number>(0);
 const [gridItems, setGridItems] =  useState<GridShowType[]>([]);

 useEffect(() => ResetAndCreateGrid(), []);

 useEffect(() => {
  if(showCount == 2){
    let opened = gridItems.filter(item => item.shown == true);
    if(opened.length == 2){ 
      let tmpGrid = [...gridItems];
      if(opened[0].item === opened[1].item) {
        for(let i in tmpGrid){
          if(tmpGrid[i].shown){
          tmpGrid[i].permanentshow = true;
          tmpGrid[i].shown = false; }
          setGridItems(tmpGrid);
          setShowCount(0);
        } 
    
      } else {
         setTimeout(()=> {
        let tmpGrid = [...gridItems];
        for (let i in tmpGrid){
           tmpGrid[i].shown = false; 
          } 
         setGridItems(tmpGrid);
         setShowCount(0);
      }, 1500);
       
     }
      setMoveCount(moveCount + 1)    
    }
  }
 }, [showCount, gridItems])

 useEffect(() => {
  const timer = setInterval(() => {
  if(playing) setTimeElapse(timeElapse + 1);
  },1000);
  return () => clearInterval(timer);
  }, [playing, timeElapse]);

  useEffect(() => {
    if(moveCount > 0 && gridItems.every(item => item.permanentshow === true)){
      setPlaying(false);
    }
  },[moveCount, GridItem]);

 function ResetAndCreateGrid(){
  setTimeElapse(0);
  setMoveCount(0);
  setShowCount(0);
  let tmpGrid: GridShowType[] = [];

  for(let i = 0; i < (items.length * 2 ); i++){
    tmpGrid.push({
      item: null, permanentshow: false, shown: false
    });
  }
  for(let w = 0; w < 2; w++){
    for(let i = 0; i < items.length; i++){
      let pos = -1;
      while(pos < 0 || tmpGrid[pos].item !== null){
          pos = Math.floor(Math.random() * (items.length * 2));
      }
    
      tmpGrid[pos].item = i;
    }
  }

  setGridItems(tmpGrid);
  setPlaying(true)
 }
 const HandleItemClick = (index: number) => {
  if(playing && index !== null && showCount < 2){
    let tmpGrid = [...gridItems];
    if(!tmpGrid[index].permanentshow && !tmpGrid[index].shown){
      tmpGrid[index].shown = true;
      setShowCount(showCount +1)
    }
    setGridItems(tmpGrid);
  }
 
 }

  return (
    <C.Container>

      <C.info>

         <C.logoInfo>
          <img src={logoImage} width="200" alt="jogo-da-memoria" />
         </C.logoInfo>

         <C.infoArea>
          <InfoContext label='Time' value={FormatTimer(timeElapse)} />
          <InfoContext label='Plays' value={moveCount.toString()}/>
         </C.infoArea>

          <Button icon={ButtonIcon} label='Reset' onClick={ResetAndCreateGrid}/>

      </C.info>

      <C.gridArea>
        <C.Grid>
         {gridItems.map((item, index) => (
          <GridItem item={item} onClick={() => HandleItemClick(index)} key={index}/>
         )
       
         )}
        </C.Grid>
      </C.gridArea>

    </C.Container>
  );
}

export default App;
