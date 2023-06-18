/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */

import {PureComponent} from 'react';

import Menu from 'Component/Menu';
import SearchField from 'Component/SearchField';

import { AsideMenuComponentProps } from './AsideMenu.type';

import './AsideMenu.style';

/** @namespace TestApp/Component/AsideMenu/Component */
export class AsideMenuComponent extends PureComponent<AsideMenuComponentProps> {
  closeMobileMenu = () => {
      document.getElementById('AsideMenu')?.classList.remove('AsideMenu-show');
  }

  render() {
      return (
          <aside id="AsideMenu" block="AsideMenu">
            <div
              block="AsideMenu"
              elem="AsideMenuHeader"
            >
              <img src="/logo.webp" alt="logo" width="195px" height="29px" />
              <button
                type="button"
                block="AsideMenu"
                elem="CloseBtn"
                onClick={ this.closeMobileMenu }
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
              </button>
            </div>
            <div
              block="AsideMenu"
              elem="SearchContainer"
            >
              <SearchField />
            </div>
            <div
              id="AsideMenuContainer"
              block="AsideMenu"
              elem="AsideMenuContainer"
            >
              <Menu />
            </div>
          </aside>
      );
  }
}

export default AsideMenuComponent;
