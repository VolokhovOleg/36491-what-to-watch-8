import {BaseSyntheticEvent, ComponentType, useState} from 'react';
import {onChangeTabsHandlerType, TabsNames, tabsType} from '../types';

type HOCProps = tabsType;

function withTabs<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {
  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithTabs(props: ComponentProps): JSX.Element {
    const [activeTab, setActiveTabState] = useState<string>('0');

    const handleActiveChange = (evt: BaseSyntheticEvent, onChangeTabHandler: onChangeTabsHandlerType, tabsName: TabsNames) => {
      if (evt.target) {
        const id: string = evt.target.getAttribute('data-id');

        setActiveTabState(id);
        onChangeTabHandler(tabsName[parseInt(id, 10)]);
      }
    };

    return (
      <Component
        {...props as T}
        activeTab={activeTab}
        onActiveChange={
          (evt: BaseSyntheticEvent, onChangeTabHandler: onChangeTabsHandlerType, tabsName: TabsNames ) =>
            handleActiveChange(evt, onChangeTabHandler, tabsName)
        }
      />
    );
  }

  return WithTabs;
}
export default withTabs;
