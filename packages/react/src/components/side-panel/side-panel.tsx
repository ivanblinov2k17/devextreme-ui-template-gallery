/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import classNames from 'classnames';
import { useScreenSize } from '../../utils/media-query';
import Button from 'devextreme-react/button';
import './side-panel.scss';
interface SidePanelProps {
  side: 'left' | 'right',
  isOverlapping?: boolean,
  icon?: string,
  toggleOpen: () => void,
  isOpened: boolean,
}
export const SidePanel = ({ side, icon, isOverlapping = true, isOpened, toggleOpen, children }: React.PropsWithChildren<SidePanelProps>) => {
  const { isXSmall, isSmall, isMedium, isLarge } = useScreenSize();
  const defaultIcon = isOpened ? 'showpanel' : 'hidepanel';
  return <>
    <div
      id='side-panel'
      className={classNames({
        'side-panel': true,
        'resize': !isOverlapping,
        'overlap': !isLarge || isOverlapping,
        'small': !isLarge,
        'x-small': isXSmall,
        'open': isOpened,
        'side-right': true
      })}
    >
      {children}
    </div>
    {!isOverlapping && (isMedium || isLarge) &&
      <Button
        className={classNames({
          'open-button': true,
          'hidden': isOpened && !(!isLarge || isOverlapping),
          'side-right': true
        })}
        icon={icon || 'hidepanel'}
        onClick={toggleOpen} />}
  </>;
};
