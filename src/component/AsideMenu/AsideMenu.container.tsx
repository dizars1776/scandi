import { ReactElement } from '@scandipwa/scandipwa/src/type/Common.type';
import { PureComponent } from 'react';

import AsideMenuComponent from './AsideMenu.component';
import {
    AsideMenuContainerProps,
} from './AsideMenu.type';

/** @namespace TestApp/Component/AsideMenu/Container */
export class AsideMenuContainer extends PureComponent<AsideMenuContainerProps> {
    render(): ReactElement {
        return (
          <AsideMenuComponent />
        );
    }
}

export default AsideMenuContainer;
