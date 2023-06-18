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

export interface AsideMenuContainerMapStateProps {
}

export type AsideMenuContainerMapDispatchProps = Record<string, unknown>;

export interface AsideMenuContainerFunctions {
    closeMenu: () => void;
}

export type AsideMenuContainerProps = AsideMenuContainerMapStateProps & AsideMenuContainerMapDispatchProps;

export interface AsideMenuComponentProps {
}
