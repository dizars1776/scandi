import { Page } from '@scandipwa/scandipwa/src/component/Header/Header.config';
import Link from '@scandipwa/scandipwa/src/component/Link';
import OfflineNotice from '@scandipwa/scandipwa/src/component/OfflineNotice';
import { ReactElement } from '@scandipwa/scandipwa/src/type/Common.type';
import { isCrawler, isSSR } from '@scandipwa/scandipwa/src/util/Browser';

import AsideMenu from 'Component/AsideMenu';
import { HeaderComponent as SourceHeaderComponent } from 'SourceComponent/Header/Header.component';

import { HeaderComponentProps } from './Header.type';

/** @namespace TestApp/Component/Header/Component */
export class HeaderComponent extends SourceHeaderComponent {
    static defaultProps: Partial<HeaderComponentProps> = {
        logo_alt: 'ScandiPWA logo',
        logo_height: 25,
        logo_width: 200,
        showMyAccountLogin: false,
        header_logo_src: '',
        isLoading: true,
        isMenuVisible: false,
    };

    state = { isMenuVisible: true }

    onBurgerClick = () => {
        document.getElementById('AsideMenu')?.classList.add('AsideMenu-show');
    }

    renderLogo(isVisible = false): ReactElement {
        const { isLoading, device: { isMobile } } = this.props;

        if (isLoading) {
            return null;
        }

        if (isMobile) {
            return (
                <div
                  block="Header"
                  elem="mobHead"
                  aria-hidden={ !isVisible }
                  mods={ { isVisible } }
                  key="logo"
                >
                    <button
                      type="button"
                      onClick={ this.onBurgerClick }
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </button>
                    <Link
                      to="/"
                      aria-label="Go to homepage by clicking on ScandiPWA logo"
                      aria-hidden={ !isVisible }
                      tabIndex={ isVisible ? 0 : -1 }
                      block="Header"
                      elem="LogoWrapper"
                      mods={ { isVisible } }
                      key="logo"
                    >
                    { this.renderLogoImage() }
                    </Link>
                </div>
            );
        }

        return (
            <Link
              to="/"
              aria-label="Go to homepage by clicking on ScandiPWA logo"
              aria-hidden={ !isVisible }
              tabIndex={ isVisible ? 0 : -1 }
              block="Header"
              elem="LogoWrapper"
              mods={ { isVisible } }
              key="logo"
            >
                { this.renderLogoImage() }
            </Link>
        );
    }

    renderAsideMenu(isMenuVisible = true): ReactElement {
        if (isMenuVisible) {
            return (
                <AsideMenu />
            );
        }

        return null;
    }

    renderMobileHeader(isVisible = true): ReactElement {
        const { device: { isMobile } } = this.props;

        if (isMobile) {
            return (
                <div
                  block="Header"
                  elem="mobHead"
                  aria-hidden={ !isVisible }
                  mods={ { isVisible } }
                  key="logo"
                >
                    <button
                      type="button"
                      onClick={ this.onBurgerClick }
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </button>
                    <Link
                      to="/"
                      aria-label="Go to homepage by clicking on ScandiPWA logo"
                      aria-hidden={ !isVisible }
                      tabIndex={ isVisible ? 0 : -1 }
                      block="Header"
                      elem="LogoWrapper"
                      mods={ { isVisible } }
                      key="logo"
                    >
                    { this.renderLogoImage() }
                    </Link>
                </div>
            );
        }

        return null;
    }

    render(): ReactElement {
        const { stateMap } = this;
        const {
            navigationState: { name, isHiddenOnMobile = false },
            isCheckout,
            device: { isMobile },
        } = this.props;

        if (!isMobile) {
            // hide edit button on desktop
            stateMap[Page.CUSTOMER_WISHLIST].edit = false;
            stateMap[Page.CUSTOMER_WISHLIST].share = false;
            stateMap[Page.CART_OVERLAY].edit = false;
        }

        return (
            <section
              block="Header"
              elem="Wrapper"
              mods={ { isPrerendered: isSSR() || isCrawler() } }
            >
                <header
                  block="Header"
                  mods={ { name, isHiddenOnMobile, isCheckout } }
                  mix={ { block: 'FixedElement', elem: 'Top' } }
                  ref={ this.logoRef }
                >
                    { this.renderTopMenu() }
                    <nav block="Header" elem="Nav">
                        { /* { this.renderNavigationState() } */ }
                        { this.renderMobileHeader() }
                    </nav>
                </header>
                { this.renderAsideMenu() }
                <OfflineNotice />
            </section>
        );
    }
}

export default HeaderComponent;
