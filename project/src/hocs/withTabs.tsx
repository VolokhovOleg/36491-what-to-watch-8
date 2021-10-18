import {BaseSyntheticEvent, ComponentType, useState} from 'react';
import {tabsType} from '../types';

type HOCProps = tabsType;

function withTabs<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {
  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithTabs(props: ComponentProps): JSX.Element {
    const [activeTab, setActiveTabState] = useState<string>('0');

    const handleActiveChange = (evt: BaseSyntheticEvent) => {
      if (evt.target) {
        setActiveTabState(evt.target.getAttribute('data-id'));
      }
    };

    return (
      <Component
        {...props as T}
        activeTab={activeTab}
        onActiveChange={handleActiveChange}
      />
    );
  }

  return WithTabs;
}
export default withTabs;
