import {useState} from 'react';
import {TabNameType} from '../../types/tabs';

export const useTabs = () => {
  const [activeTabName, setActiveTabNameState] = useState<TabNameType | string>(TabNameType.OVERVIEW);

  const onChangeActiveTabHandler = (TabName: TabNameType | string): void => {
    setActiveTabNameState(TabName);
  };

  return {activeTabName, onChangeActiveTabHandler};
};
