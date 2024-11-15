import { $ } from '@wdio/globals'
import Site from './website.js'
import Hamburger from './hamburger.menu.js'

class Verify extends Site {
    get Menu () {
        return $('div[class="bm-menu"]')
    }
    get ItemCount () {
        return $('span[class="shopping_cart_badge"]')
    }
}
export default new Verify();