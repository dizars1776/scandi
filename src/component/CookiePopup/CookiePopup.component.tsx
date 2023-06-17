import Link from '@scandipwa/scandipwa/src/component/Link';
import { ReactElement } from '@scandipwa/scandipwa/src/type/Common.type';

import { CookiePopupComponent as SourceCookiePopupComponent } from 'SourceComponent/CookiePopup/CookiePopup.component';

/** @namespace TestApp/Component/CookiePopup/Component */
export class CookiePopupComponent extends SourceCookiePopupComponent {
    renderCookieLink(): ReactElement {
        const { cookieLink } = this.props;

        if (!cookieLink) {
            return null;
        }

        return (
            <>
            <Link
              block="CookiePopup"
              elem="Link"
              to={ cookieLink }
            >
              { __('Μάθετε περισσότερα') }
            </Link>
            { __(' σχετικά με τους κανόνες του GDPR στους όρους χρήσης') }
            </>
        );
    }

    renderCookieText(): ReactElement {
        const cookieText = 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας! ';

        return (
          <p block="CookiePopup" elem="Content">
              { cookieText }
              { this.renderCookieLink() }
          </p>
        );
    }

    renderCTA(): ReactElement {
        return (
          <div
            block="CookiePopup"
            elem="CTA"
          >
              <button
                type="button"
                onClick={ this.acceptCookies }
                onKeyDown={ this.acceptCookies }
                tabIndex={ 0 }
              >
                { __('Αποδοχή') }
              </button>
          </div>
        );
    }
}

export default CookiePopupComponent;
