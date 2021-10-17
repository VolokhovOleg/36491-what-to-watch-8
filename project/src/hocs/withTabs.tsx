import {useState} from 'react';

export const withTabs = (Component: (props: (JSX.IntrinsicAttributes & { onActiveChange: (evt: Event) => void; isActive: string})) => JSX.Element) => (props: JSX.IntrinsicAttributes) => {
  const [isActive, setActive] = useState<string>('0');

  const handleActiveChange = (evt: any) => {
    if (evt.target) {
      setActive(evt.target.getAttribute('data-id'));
    }
  };

  return (
    <Component
      {...props}
      isActive={isActive}
      onActiveChange={handleActiveChange}
    />
  );
}
