import { GridShowType } from '../../data/items';
import * as C from './styles';
import B7icon from '../../svgs/b7.svg';
import { items  } from '../../data/items';

type Props = {
    item: GridShowType,
    onClick: () => void
}
export const GridItem = ({ item, onClick }: Props) => {
    return(

        <C.Container 
          onClick={onClick} 
          showBackground={item.permanentshow || item.shown}>
            {!item.permanentshow && !item.shown && 
            <C.Icon src={B7icon} alt='B7web' showOpacity={.1}/>}
            
            {(item.permanentshow || item.shown) && item.item !== null && 
             <C.Icon src={items[item.item].icon} alt='B7web' />}
        </C.Container>

    );
}